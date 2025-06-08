const WebSocket = require('ws');
const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const fs = require('fs');
const path = require('path');

class SuperZooCaretaker {
    constructor() {
        this.connectedClients = new Map();
        this.animalStats = new Map();
        this.feedingSchedule = new Map();
        this.lastFeedingTime = new Map();
        
        // Initialize with some default animal data
        this.initializeAnimalData();
        
        // Load configuration
        this.loadConfig();
        
        // Add error handling
        process.on('uncaughtException', (error) => {
            console.error('💥 Uncaught Exception:', error);
            console.log('🔄 Attempting to continue...');
        });

        process.on('unhandledRejection', (reason, promise) => {
            console.error('💥 Unhandled Rejection at:', promise, 'reason:', reason);
            console.log('🔄 Attempting to continue...');
        });
        
        try {
            this.setupWebServer();
            this.setupWebSocketServer();
            this.setupScheduledTasks();
            
            console.log('🦁 Super Zoo AI Caretaker initializing...');
            console.log(`🔐 Authorized users: ${this.getAllAuthorizedUsers().join(', ')}`);
            console.log('🌐 WebSocket server ready on 0.0.0.0:8080');
            console.log('📋 To connect from Minecraft, use: /connect <server-ip>:8080/ws');
        } catch (error) {
            console.error('💥 Failed to initialize Zoo Caretaker:', error);
            process.exit(1);
        }
    }

    initializeAnimalData() {
        // Initialize with default zoo animals
        const defaultAnimals = [
            'lions', 'tigers', 'elephants', 'giraffes', 'penguins',
            'dolphins', 'monkeys', 'bears', 'wolves', 'pandas',
            'zebras', 'hippos', 'rhinos', 'flamingos', 'seals'
        ];
        
        defaultAnimals.forEach(animal => {
            this.animalStats.set(animal, {
                count: Math.floor(Math.random() * 10) + 2, // 2-12 animals
                health: 'healthy',
                lastFed: new Date(Date.now() - Math.random() * 3600000), // Random time in last hour
                hunger: Math.floor(Math.random() * 100)
            });
        });
        
        console.log(`🦁 Initialized data for ${defaultAnimals.length} animal types`);
    }

    getAllAuthorizedUsers() {
        const allUsers = [];
        for (const [level, users] of Object.entries(this.config.permissionLevels || {})) {
            allUsers.push(...users);
        }
        return allUsers;
    }

    loadConfig() {
        try {
            const configPath = path.join(__dirname, 'config.json');
            const configData = fs.readFileSync(configPath, 'utf8');
            this.config = JSON.parse(configData);
            
            console.log('📋 Configuration loaded successfully');
            console.log('🎫 Permission levels configured:');
            for (const [level, users] of Object.entries(this.config.permissionLevels || {})) {
                if (users.length > 0) {
                    console.log(`   ${level}: ${users.join(', ')}`);
                }
            }
        } catch (error) {
            console.warn('⚠️ Could not load config.json, using defaults:', error.message);
            
            // Fallback to defaults
            this.config = {
                permissionLevels: {
                    admin: ['YourMinecraftUsername'],
                    manager: [],
                    builder: [],
                    visitor: []
                },
                commandPermissions: {
                    help: ['admin', 'manager', 'builder', 'visitor'],
                    feed: ['admin', 'manager', 'builder', 'visitor'],
                    count: ['admin', 'manager', 'builder', 'visitor'],
                    health: ['admin', 'manager', 'builder', 'visitor'],
                    stats: ['admin', 'manager', 'builder', 'visitor'],
                    clean: ['admin', 'manager'],
                    schedule: ['admin', 'manager'],
                    emergency: ['admin'],
                    authorize: ['admin'],
                    'tnt-auth': ['admin'],
                    'tnt-list': ['admin', 'manager'],
                    perm: ['admin']
                },
                animalTypes: [
                    'lions', 'tigers', 'elephants', 'penguins', 'dolphins',
                    'giraffes', 'monkeys', 'bears', 'wolves', 'pandas'
                ]
            };
        }
    }

    getPlayerPermissionLevel(playerName) {
        for (const [level, users] of Object.entries(this.config.permissionLevels || {})) {
            if (users.includes(playerName)) {
                return level;
            }
        }
        return 'visitor'; // Default to visitor
    }

    hasCommandPermission(playerName, command) {
        const playerLevel = this.getPlayerPermissionLevel(playerName);
        const allowedLevels = (this.config.commandPermissions && this.config.commandPermissions[command]) || [];
        return allowedLevels.includes(playerLevel);
    }

    setupWebServer() {
        this.app = express();
        this.app.use(cors());
        this.app.use(express.json());

        // Health check endpoint
        this.app.get('/health', (req, res) => {
            res.json({
                status: 'healthy',
                connected: this.connectedClients.size > 0,
                uptime: process.uptime(),
                animals: this.animalStats.size,
                connectedClients: this.connectedClients.size
            });
        });

        // API endpoints for zoo management
        this.app.get('/api/animals', (req, res) => {
            res.json(Array.from(this.animalStats.entries()));
        });

        this.app.post('/api/feed/:animal', (req, res) => {
            const animal = req.params.animal;
            this.feedAnimal(animal);
            res.json({ success: true, message: `Feeding ${animal}` });
        });

        // Create HTTP server and bind to all interfaces (0.0.0.0) for Docker
        this.server = require('http').createServer(this.app);
        
        this.server.listen(8080, '0.0.0.0', () => {
            console.log('🌐 Zoo management API running on 0.0.0.0:8080');
        });

        return this.server;
    }

    setupWebSocketServer() {
        // Create WebSocket server that shares the HTTP server
        this.wss = new WebSocket.Server({ 
            server: this.server,
            path: '/ws'
        });

        this.wss.on('connection', (ws, req) => {
            const clientId = req.url.split('/').pop() || 'unknown';
            console.log(`🤖 Minecraft client connected: ${clientId}`);
            
            this.connectedClients.set(clientId, ws);
            
            // Send welcome message
            this.sendCommandToClient(ws, '/say §a🤖 Zoo AI Caretaker is now online!');
            this.sendCommandToClient(ws, '/say §eType !help for available commands');

            ws.on('message', (data) => {
                try {
                    const event = JSON.parse(data);
                    this.handleMinecraftEvent(event, ws, clientId);
                } catch (error) {
                    console.error('Error parsing message:', error);
                }
            });

            ws.on('close', () => {
                console.log(`❌ Client disconnected: ${clientId}`);
                this.connectedClients.delete(clientId);
            });

            ws.on('error', (error) => {
                console.error(`WebSocket error for ${clientId}:`, error);
                this.connectedClients.delete(clientId);
            });
        });

        console.log('🔌 WebSocket server listening on port 8080/ws');
        console.log('📋 Players can connect using: /connect <server-ip>:8080/ws');
        console.log('💡 Replace <server-ip> with your server\'s IP address (e.g., 10.0.0.70:8080/ws)');
    }

    handleMinecraftEvent(event, ws, clientId) {
        switch(event.eventName) {
            case 'PlayerMessage':
                this.handlePlayerCommand(event, ws);
                break;
            case 'MobSpawned':
                this.trackAnimalSpawn(event);
                break;
            case 'MobDied':
                this.trackAnimalDeath(event);
                break;
            case 'BlockPlaced':
                this.handleBlockPlaced(event);
                break;
            default:
                // Log unknown events for debugging
                console.log('Unknown event:', event.eventName);
        }
    }

    handlePlayerCommand(event, ws) {
        const message = event.message.toLowerCase().trim();
        const player = event.sender;
        
        console.log(`📢 ${player}: ${message}`);

        if (message.startsWith('!')) {
            const [command, ...args] = message.slice(1).split(' ');
            
            // Check command permissions using new system
            if (!this.hasCommandPermission(player, command)) {
                const playerLevel = this.getPlayerPermissionLevel(player);
                this.sendMessageToClient(ws, `§c🔒 Access denied! Command !${command} requires higher permissions.`);
                this.sendMessageToClient(ws, `§e📋 Your level: §a${playerLevel}`);
                this.sendMessageToClient(ws, `§e💡 Type !help to see available commands`);
                console.log(`🚫 Permission denied: ${player} (${playerLevel}) tried to use !${command}`);
                return;
            }
            
            switch(command) {
                case 'help':
                    this.showHelp(player, ws);
                    break;
                case 'feed':
                    this.feedAnimal(args[0], player, ws);
                    break;
                case 'count':
                    this.countAnimals(player, ws);
                    break;
                case 'health':
                    this.healthCheck(player, ws);
                    break;
                case 'stats':
                    this.showZooStats(player, ws);
                    break;
                case 'clean':
                    this.cleanEnclosure(args[0], player, ws);
                    break;
                case 'schedule':
                    this.showSchedule(player, ws);
                    break;
                case 'emergency':
                    this.emergencyProtocol(player, ws);
                    break;
                case 'authorize':
                    this.authorizeUser(args[0], player, ws);
                    break;
                case 'perm':
                    this.managePermissions(args, player, ws);
                    break;
                default:
                    this.sendMessageToClient(ws, `§c❌ Unknown command: !${command}`);
                    this.sendMessageToClient(ws, `§e💡 Type !help to see available commands`);
            }
        }
    }

    sendCommandToClient(ws, command) {
        if (ws && ws.readyState === WebSocket.OPEN) {
            const message = {
                "body": {
                    "origin": {
                        "type": "player"
                    },
                    "commandLine": command,
                    "version": 1
                },
                "header": {
                    "requestId": this.generateRequestId(),
                    "messagePurpose": "commandRequest",
                    "version": 1,
                    "messageType": "commandRequest"
                }
            };
            ws.send(JSON.stringify(message));
        }
    }

    sendMessageToClient(ws, message) {
        this.sendCommandToClient(ws, `/say ${message}`);
    }

    broadcastMessage(message) {
        this.connectedClients.forEach((ws) => {
            this.sendMessageToClient(ws, message);
        });
    }

    broadcastCommand(command) {
        this.connectedClients.forEach((ws) => {
            this.sendCommandToClient(ws, command);
        });
    }

    generateRequestId() {
        return Math.random().toString(36).substr(2, 9);
    }

    feedAnimal(animal, player = null, ws = null) {
        if (!animal) {
            this.sendMessageToClient(ws, 'Please specify an animal to feed. Example: !feed lions');
            return;
        }

        const foodMap = {
            'lions': { food: 'raw_beef', amount: 32, emoji: '🦁' },
            'tigers': { food: 'raw_beef', amount: 32, emoji: '🐅' },
            'elephants': { food: 'hay_block', amount: 16, emoji: '🐘' },
            'giraffes': { food: 'hay_block', amount: 16, emoji: '🦒' },
            'penguins': { food: 'raw_fish', amount: 24, emoji: '🐧' },
            'dolphins': { food: 'raw_fish', amount: 24, emoji: '🐬' },
            'sharks': { food: 'raw_fish', amount: 32, emoji: '🦈' },
            'monkeys': { food: 'apple', amount: 16, emoji: '🐒' },
            'gorillas': { food: 'apple', amount: 20, emoji: '🦍' },
            'flamingos': { food: 'kelp', amount: 12, emoji: '🦩' },
            'eagles': { food: 'raw_chicken', amount: 16, emoji: '🦅' },
            'all': { food: 'mixed', amount: 0, emoji: '🍽️' }
        };

        const animalData = foodMap[animal.toLowerCase()];
        
        if (!animalData) {
            this.sendMessageToClient(ws, `Unknown animal: ${animal}. Available: ${Object.keys(foodMap).join(', ')}`);
            return;
        }

        if (animal.toLowerCase() === 'all') {
            this.feedAllAnimals(player, ws);
            this.sendMessageToClient(ws, 'Starting mass feeding protocol...');
            return;
        }

        // Check if recently fed (prevent spam)
        const lastFed = this.lastFeedingTime.get(animal);
        const now = Date.now();
        if (lastFed && (now - lastFed) < 300000) { // 5 minutes cooldown
            const timeLeft = Math.ceil((300000 - (now - lastFed)) / 60000);
            this.sendMessageToClient(ws, `⏰ ${animalData.emoji} ${animal} were recently fed. Wait ${timeLeft} more minutes.`);
            return;
        }

        // Dispense food
        this.sendCommandToClient(ws, `/give @a ${animalData.food} ${animalData.amount}`);
        const result = { success: true, message: `✅ ${animalData.emoji} Feeding ${animal} with ${animalData.amount} ${animalData.food}!` };
        
        if (player) {
            this.sendCommandToClient(ws, `/title @a subtitle "§e${player} is feeding the ${animal}"`);
            this.sendCommandToClient(ws, `/title @a title "§6🍽️ Feeding Time"`);
        }

        // Update feeding time
        this.lastFeedingTime.set(animal, now);
        
        // Log feeding activity
        console.log(`🍽️ Fed ${animal} at ${new Date().toISOString()}`);

        this.sendMessageToClient(ws, result.message);
    }

    feedAllAnimals(player, ws = null) {
        const animals = ['lions', 'tigers', 'elephants', 'penguins', 'dolphins'];
        this.sendMessageToClient(ws, '🍽️ Starting mass feeding protocol...');
        
        animals.forEach((animal, index) => {
            setTimeout(() => {
                this.feedAnimal(animal, null, ws);
            }, index * 2000); // 2 second delay between each feeding
        });

        if (player) {
            this.sendCommandToClient(ws, `/title @a subtitle "§e${player} initiated mass feeding"`);
            this.sendCommandToClient(ws, `/title @a title "§6🍽️ Zoo Feeding Time"`);
        }
    }

    countAnimals(player, ws = null) {
        // Simulate animal counting (in real implementation, this would query actual entities)
        const animalCounts = {
            'Lions': Math.floor(Math.random() * 8) + 2,
            'Tigers': Math.floor(Math.random() * 6) + 1,
            'Elephants': Math.floor(Math.random() * 4) + 2,
            'Penguins': Math.floor(Math.random() * 15) + 5,
            'Dolphins': Math.floor(Math.random() * 8) + 3,
            'Giraffes': Math.floor(Math.random() * 6) + 2,
            'Monkeys': Math.floor(Math.random() * 12) + 4
        };

        this.sendMessageToClient(ws, '📊 Animal Count Report:');
        Object.entries(animalCounts).forEach(([animal, count]) => {
            this.sendMessageToClient(ws, `${animal}: ${count}`);
        });

        const total = Object.values(animalCounts).reduce((sum, count) => sum + count, 0);
        this.sendMessageToClient(ws, `Total Animals: ${total}`);
    }

    healthCheck(player, ws = null) {
        this.sendMessageToClient(ws, '🏥 Performing health check...');
        
        // Simulate health check results
        const healthStatuses = [
            '✅ All lions are healthy and active',
            '✅ Tigers showing normal behavior',
            '⚠️ Elephant #3 needs dental checkup soon',
            '✅ Penguin colony temperature optimal',
            '✅ Dolphin tank water quality excellent',
            '⚠️ Giraffe enclosure needs cleaning',
            '✅ All primates social and healthy'
        ];

        healthStatuses.forEach((status, index) => {
            setTimeout(() => {
                this.sendMessageToClient(ws, status);
            }, index * 1000);
        });

        setTimeout(() => {
            this.sendMessageToClient(ws, '📋 Health check complete. 2 minor issues noted.');
        }, healthStatuses.length * 1000);
    }

    cleanEnclosure(area, player, ws = null) {
        if (!area) {
            this.sendMessageToClient(ws, 'Please specify area to clean: aquarium, savanna, arctic, aviary');
            return;
        }

        const cleaningMessages = {
            'aquarium': '🌊 Cleaning aquarium tanks and filters...',
            'savanna': '🦁 Cleaning savanna enclosures...',
            'arctic': '❄️ Cleaning arctic habitat...',
            'aviary': '🦅 Cleaning bird aviaries...',
            'all': 'Starting full zoo cleaning protocol...'
        };

        const message = cleaningMessages[area.toLowerCase()];
        if (!message) {
            this.sendMessageToClient(ws, `Unknown area: ${area}`);
            return;
        }

        this.sendMessageToClient(ws, message);
        
        // Simulate cleaning process
        setTimeout(() => {
            this.sendMessageToClient(ws, '✅ Cleaning completed!');
            if (player) {
                this.sendCommandToClient(ws, `/title @a subtitle "§e${player} cleaned the ${area}"`);
                this.sendCommandToClient(ws, `/title @a title "§a🧹 Cleaning Complete"`);
            }
        }, 3000);
    }

    showSchedule(player, ws = null) {
        this.sendMessageToClient(ws, '📅 Daily Zoo Schedule:');
        this.sendMessageToClient(ws, '08:00 - Morning feeding (all animals)');
        this.sendMessageToClient(ws, '10:00 - Health checks');
        this.sendMessageToClient(ws, '12:00 - Midday feeding (carnivores)');
        this.sendMessageToClient(ws, '14:00 - Enclosure cleaning');
        this.sendMessageToClient(ws, '16:00 - Afternoon feeding (herbivores)');
        this.sendMessageToClient(ws, '18:00 - Evening health check');
        this.sendMessageToClient(ws, '20:00 - Night feeding (nocturnal animals)');
    }

    showZooStats(player, ws = null) {
        const uptime = Math.floor(process.uptime() / 3600); // hours
        const feedingsToday = this.lastFeedingTime.size;
        
        this.sendMessageToClient(ws, '📊 Zoo Statistics:');
        this.sendMessageToClient(ws, `Server Uptime: ${uptime} hours`);
        this.sendMessageToClient(ws, `Feedings Today: ${feedingsToday}`);
        this.sendMessageToClient(ws, `AI Status: Online`);
        this.sendMessageToClient(ws, `Active Players: ${this.connectedClients.size}`);
        this.sendMessageToClient(ws, `Zoo Rating: ⭐⭐⭐⭐⭐`);
    }

    emergencyProtocol(player, ws = null) {
        this.sendMessageToClient(ws, '🚨 EMERGENCY PROTOCOL ACTIVATED');
        this.sendCommandToClient(ws, '/title @a title "🚨 EMERGENCY"');
        this.sendCommandToClient(ws, '/title @a subtitle "All staff report to stations"');
        
        // Emergency actions
        this.sendCommandToClient(ws, '/weather clear');
        this.sendCommandToClient(ws, '/time set day');
        this.sendMessageToClient(ws, '⚠️ Weather cleared, time set to day');
        this.sendMessageToClient(ws, '⚠️ All enclosures secured');
        this.sendMessageToClient(ws, '⚠️ Emergency supplies dispensed');
        
        // Give emergency supplies
        this.sendCommandToClient(ws, '/give @a golden_apple 5');
        this.sendCommandToClient(ws, '/give @a bread 10');
        
        console.log(`🚨 Emergency protocol activated by ${player}`);
    }

    authorizeUser(targetPlayer, requestingPlayer, ws = null) {
        // Only existing authorized users can authorize others
        if (!this.authorizedUsers.has(requestingPlayer)) {
            this.sendMessageToClient(ws, `§c🔒 Access denied! Only existing staff can authorize new users.`);
            return;
        }

        if (!targetPlayer) {
            this.sendMessageToClient(ws, `§c❌ Please specify a player name: !authorize <playername>`);
            return;
        }

        if (this.authorizedUsers.has(targetPlayer)) {
            this.sendMessageToClient(ws, `§e⚠️ ${targetPlayer} is already authorized as zoo staff.`);
            return;
        }

        this.authorizedUsers.add(targetPlayer);
        this.sendMessageToClient(ws, `§a✅ ${targetPlayer} has been granted zoo staff permissions!`);
        this.sendMessageToClient(ws, `§e📋 They can now use: !clean, !schedule, !emergency, !authorize`);
        
        console.log(`🔐 ${requestingPlayer} authorized ${targetPlayer} as zoo staff`);
        console.log(`🔐 Current authorized users: ${Array.from(this.authorizedUsers).join(', ')}`);
    }

    manageTNTAuth(action, targetPlayer, requestingPlayer, ws = null) {
        // Only authorized users can manage TNT permissions
        if (!this.authorizedUsers.has(requestingPlayer)) {
            this.sendMessageToClient(ws, `§c🔒 Access denied! Only authorized staff can manage TNT permissions.`);
            return;
        }

        if (!action || !targetPlayer) {
            this.sendMessageToClient(ws, `§c❌ Usage: !tnt-auth <add/remove> <playername>`);
            return;
        }

        if (action === 'add') {
            // Send command to Minecraft to authorize TNT usage
            this.sendCommandToClient(ws, `/say §a🧨 ${targetPlayer} has been authorized for TNT usage by ${requestingPlayer}`);
            this.sendMessageToClient(ws, `§a✅ TNT authorization granted to ${targetPlayer}`);
            this.sendMessageToClient(ws, `§e⚠️ They can now use TNT, fire charges, and flint & steel`);
            
            console.log(`🧨 TNT Authorization: ${requestingPlayer} authorized ${targetPlayer} for explosives`);
            
        } else if (action === 'remove') {
            // Send command to Minecraft to remove TNT authorization
            this.sendCommandToClient(ws, `/say §c🧨 TNT authorization removed from ${targetPlayer} by ${requestingPlayer}`);
            this.sendMessageToClient(ws, `§c❌ TNT authorization removed from ${targetPlayer}`);
            this.sendMessageToClient(ws, `§e⚠️ They can no longer use explosive items`);
            
            console.log(`🧨 TNT Authorization: ${requestingPlayer} removed TNT access from ${targetPlayer}`);
            
        } else {
            this.sendMessageToClient(ws, `§c❌ Invalid action. Use "add" or "remove"`);
        }
    }

    listTNTUsers(requestingPlayer, ws = null) {
        const playerLevel = this.getPlayerPermissionLevel(requestingPlayer);
        
        this.sendMessageToClient(ws, '§6🧨 TNT Authorization List:');
        
        // Get TNT authorized users (admins only for now)
        const tntUsers = (this.config.permissionLevels && this.config.permissionLevels.admin) || [];
        
        if (tntUsers.length === 0) {
            this.sendMessageToClient(ws, '§e📋 No users currently authorized for TNT usage');
        } else {
            tntUsers.forEach(user => {
                this.sendMessageToClient(ws, `§a✅ ${user} (admin)`);
            });
        }
        
        this.sendMessageToClient(ws, '§e💡 Use !tnt-auth to modify permissions');
        console.log(`📋 ${requestingPlayer} (${playerLevel}) viewed TNT authorization list`);
    }

    managePermissions(args, requestingPlayer, ws = null) {
        if (args.length < 2) {
            this.sendMessageToClient(ws, '§e💡 Usage: !perm <set/get/list> <player> [level]');
            this.sendMessageToClient(ws, '§e📋 Levels: admin, manager, builder, visitor');
            return;
        }

        const action = args[0];
        const targetPlayer = args[1];
        const newLevel = args[2];

        switch (action) {
            case 'set':
                if (!newLevel) {
                    this.sendMessageToClient(ws, '§c❌ Please specify permission level: admin, manager, builder, visitor');
                    return;
                }
                
                if (!['admin', 'manager', 'builder', 'visitor'].includes(newLevel)) {
                    this.sendMessageToClient(ws, '§c❌ Invalid permission level!');
                    return;
                }

                // Remove from all other levels first
                for (const level of Object.keys(this.config.permissionLevels)) {
                    const index = this.config.permissionLevels[level].indexOf(targetPlayer);
                    if (index > -1) {
                        this.config.permissionLevels[level].splice(index, 1);
                    }
                }

                // Add to new level (unless visitor - they're default)
                if (newLevel !== 'visitor') {
                    this.config.permissionLevels[newLevel].push(targetPlayer);
                }

                this.sendMessageToClient(ws, `§a✅ Set ${targetPlayer} permission to ${newLevel}`);
                this.sendMessageToClient(ws, `§e💡 Restart server to sync with behavior packs`);
                
                // Save config
                this.saveConfig();
                
                console.log(`🔐 ${requestingPlayer} set ${targetPlayer} permission to ${newLevel}`);
                break;

            case 'get':
                const level = this.getPlayerPermissionLevel(targetPlayer);
                this.sendMessageToClient(ws, `§e📋 ${targetPlayer} permission level: §a${level}`);
                break;

            case 'list':
                this.sendMessageToClient(ws, '§6📋 All Permission Assignments:');
                for (const [level, users] of Object.entries(this.config.permissionLevels)) {
                    if (users.length > 0) {
                        this.sendMessageToClient(ws, `§e${level}: §a${users.join(', ')}`);
                    }
                }
                break;

            default:
                this.sendMessageToClient(ws, '§c❌ Invalid action. Use: set, get, or list');
        }
    }

    saveConfig() {
        try {
            const configPath = path.join(__dirname, 'config.json');
            fs.writeFileSync(configPath, JSON.stringify(this.config, null, 2));
            console.log('💾 Configuration saved successfully');
        } catch (error) {
            console.error('❌ Failed to save configuration:', error);
        }
    }

    setupScheduledTasks() {
        // Automated feeding schedule
        cron.schedule('0 8,12,16,20 * * *', () => {
            this.sendMessageToClient(null, '§6🔔 Scheduled feeding time!');
            this.feedAllAnimals('AutoFeeder');
        });

        // Health check every 4 hours
        cron.schedule('0 */4 * * *', () => {
            this.sendMessageToClient(null, '§6🏥 Automated health check starting...');
            this.healthCheck('AutoSystem');
        });

        // Daily zoo stats
        cron.schedule('0 0 * * *', () => {
            this.sendMessageToClient(null, '§6📊 Daily zoo report generated');
            this.showZooStats('AutoSystem');
        });

        console.log('⏰ Scheduled tasks configured');
    }

    trackAnimalSpawn(event) {
        // Track new animal spawns for population monitoring
        console.log('🐾 Animal spawned:', event);
        this.sendMessageToClient(null, '§a🐾 New animal spotted in the zoo!');
    }

    trackAnimalDeath(event) {
        // Track animal deaths for health monitoring
        console.log('💀 Animal died:', event);
        this.sendMessageToClient(null, '§c⚠️ Animal casualty detected - investigating...');
    }

    handleBlockPlaced(event) {
        // React to specific block placements (feeding stations, etc.)
        if (event.block === 'redstone_block') {
            this.sendMessageToClient(null, '§e🔴 Feeding station activated!');
        }
    }

    showHelp(player, ws = null) {
        const playerLevel = this.getPlayerPermissionLevel(player);
        const availableCommands = [];
        
        // Check which commands this player can use
        for (const [command, allowedLevels] of Object.entries(this.config.commandPermissions || {})) {
            if (allowedLevels.includes(playerLevel)) {
                availableCommands.push(command);
            }
        }
        
        this.sendMessageToClient(ws, `§6🤖 Super Zoo AI Caretaker Help`);
        this.sendMessageToClient(ws, `§e📋 Your permission level: §a${playerLevel}`);
        this.sendMessageToClient(ws, `§e💡 Available commands:`);
        
        // Basic commands available to all
        if (availableCommands.includes('help')) {
            this.sendMessageToClient(ws, `§a!help §7- Show this help message`);
        }
        if (availableCommands.includes('feed')) {
            this.sendMessageToClient(ws, `§a!feed <animal> §7- Feed animals (lions, tigers, elephants, etc.)`);
        }
        if (availableCommands.includes('count')) {
            this.sendMessageToClient(ws, `§a!count §7- Count all animals in the zoo`);
        }
        if (availableCommands.includes('health')) {
            this.sendMessageToClient(ws, `§a!health §7- Check animal health status`);
        }
        if (availableCommands.includes('stats')) {
            this.sendMessageToClient(ws, `§a!stats §7- Show zoo statistics`);
        }
        
        // Staff commands
        if (availableCommands.includes('clean')) {
            this.sendMessageToClient(ws, `§e!clean <area> §7- Clean enclosures (aquarium, savanna, arctic, aviary)`);
        }
        if (availableCommands.includes('schedule')) {
            this.sendMessageToClient(ws, `§e!schedule §7- Show daily feeding schedule`);
        }
        
        // Admin commands
        if (availableCommands.includes('emergency')) {
            this.sendMessageToClient(ws, `§c!emergency §7- Activate emergency protocol`);
        }
        if (availableCommands.includes('authorize')) {
            this.sendMessageToClient(ws, `§c!authorize <player> §7- Grant staff permissions`);
        }
        if (availableCommands.includes('perm')) {
            this.sendMessageToClient(ws, `§c!perm <set/get/list> <player> [level] §7- Manage permissions`);
        }
        
        this.sendMessageToClient(ws, `§7Example: §a!feed lions §7or §a!clean savanna`);
        
        console.log(`📋 Help shown to ${player} (${playerLevel})`);
    }
}

// Start the Super Zoo Caretaker
console.log('🦁 Starting Super Zoo AI Caretaker...');
const caretaker = new SuperZooCaretaker();

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down Zoo AI Caretaker...');
    if (caretaker.wss) {
        caretaker.wss.close();
    }
    process.exit(0);
}); 