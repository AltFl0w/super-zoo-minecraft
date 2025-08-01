const WebSocket = require('ws');
const express = require('express');
const cors = require('cors');
const cron = require('node-cron');
const fs = require('fs');
const path = require('path');

class SuperZooCaretaker {
    constructor() {
        this.ws = null;
        this.isConnected = false;
        this.animalStats = new Map();
        this.feedingSchedule = new Map();
        this.lastFeedingTime = new Map();
        
        // Load configuration
        this.loadConfig();
        
        this.setupWebServer();
        this.connectToMinecraft();
        this.setupScheduledTasks();
        
        console.log('🦁 Super Zoo AI Caretaker initializing...');
        console.log(`🔐 Authorized users: ${Array.from(this.authorizedUsers).join(', ')}`);
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
                }
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
        const allowedLevels = this.config.commandPermissions?.[command] || [];
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
                connected: this.isConnected,
                uptime: process.uptime(),
                animals: this.animalStats.size
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

        this.app.listen(8080, () => {
            console.log('🌐 Zoo management API running on port 8080');
        });
    }

    connectToMinecraft() {
        try {
            this.ws = new WebSocket('ws://localhost:19132/ws');
            
            this.ws.on('open', () => {
                console.log('🤖 Connected to Minecraft Bedrock Server!');
                this.isConnected = true;
                this.sendCommand('/say §a🤖 Zoo AI Caretaker is now online!');
                this.sendCommand('/say §eType !help for available commands');
            });

            this.ws.on('message', (data) => {
                try {
                    const event = JSON.parse(data);
                    this.handleMinecraftEvent(event);
                } catch (error) {
                    console.error('Error parsing message:', error);
                }
            });

            this.ws.on('close', () => {
                console.log('❌ Disconnected from Minecraft server');
                this.isConnected = false;
                // Attempt to reconnect after 5 seconds
                setTimeout(() => this.connectToMinecraft(), 5000);
            });

            this.ws.on('error', (error) => {
                console.error('WebSocket error:', error);
                this.isConnected = false;
            });

        } catch (error) {
            console.error('Failed to connect to Minecraft:', error);
            // Retry connection after 10 seconds
            setTimeout(() => this.connectToMinecraft(), 10000);
        }
    }

    handleMinecraftEvent(event) {
        switch(event.eventName) {
            case 'PlayerMessage':
                this.handlePlayerCommand(event);
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

    handlePlayerCommand(event) {
        const message = event.message.toLowerCase().trim();
        const player = event.sender;
        
        console.log(`📢 ${player}: ${message}`);

        if (message.startsWith('!')) {
            const [command, ...args] = message.slice(1).split(' ');
            
            // Check command permissions using new system
            if (!this.hasCommandPermission(player, command)) {
                const playerLevel = this.getPlayerPermissionLevel(player);
                this.sendMessage(`§c🔒 Access denied! Command !${command} requires higher permissions.`);
                this.sendMessage(`§e📋 Your level: §a${playerLevel}`);
                this.sendMessage(`§e💡 Type !help to see available commands`);
                console.log(`🚫 Permission denied: ${player} (${playerLevel}) tried to use !${command}`);
                return;
            }
            
            switch(command) {
                case 'help':
                    this.showHelp(player);
                    break;
                case 'feed':
                    this.feedAnimal(args[0], player);
                    break;
                case 'count':
                    this.countAnimals(player);
                    break;
                case 'health':
                    this.healthCheck(player);
                    break;
                case 'clean':
                    this.cleanEnclosure(args[0], player);
                    break;
                case 'schedule':
                    this.showSchedule(player);
                    break;
                case 'stats':
                    this.showZooStats(player);
                    break;
                case 'emergency':
                    this.emergencyProtocol(player);
                    break;
                case 'authorize':
                    this.authorizeUser(args[0], player);
                    break;
                case 'tnt-auth':
                    this.manageTNTAuth(args[0], args[1], player);
                    break;
                case 'tnt-list':
                    this.listTNTUsers(player);
                    break;
                case 'perm':
                    this.managePermissions(args, player);
                    break;
                default:
                    this.sendMessage(`§c❌ Unknown command: ${command}. Type !help for available commands.`);
            }
        }
    }

    showHelp(player) {
        const playerLevel = this.getPlayerPermissionLevel(player);
        
        this.sendMessage(`§6🦁 Super Zoo AI Caretaker Commands:`);
        this.sendMessage(`§e📋 Your permission level: §a${playerLevel}`);
        this.sendMessage('');
        
        // Show commands based on permission level
        const allCommands = {
            'help': '§e!help §7- Show this help message',
            'feed': '§e!feed <animal> §7- Feed specific animals (lions, tigers, elephants, etc.)',
            'count': '§e!count §7- Count all animals in the zoo', 
            'health': '§e!health §7- Check health status of all animals',
            'stats': '§e!stats §7- Show zoo statistics',
            'clean': '§e!clean <area> §7- Clean enclosures (aquarium, savanna, arctic)',
            'schedule': '§e!schedule §7- Show feeding schedule',
            'emergency': '§e!emergency §7- Activate emergency protocols (⚠️ DANGER!)',
            'authorize': '§e!authorize <player> §7- Grant staff permissions to a player',
            'tnt-auth': '§e!tnt-auth <add/remove> <player> §7- Manage TNT permissions',
            'tnt-list': '§e!tnt-list §7- List users authorized for TNT/explosives',
            'perm': '§e!perm <set/get/list> <player> [level] §7- Manage user permissions'
        };
        
        // Show available commands for this user
        let availableCommands = [];
        let restrictedCommands = [];
        
        for (const [command, description] of Object.entries(allCommands)) {
            if (this.hasCommandPermission(player, command)) {
                availableCommands.push(description);
            } else {
                restrictedCommands.push(command);
            }
        }
        
        // Display available commands
        if (availableCommands.length > 0) {
            this.sendMessage('§a✅ Available Commands:');
            availableCommands.forEach(cmd => this.sendMessage(cmd));
        }
        
        // Show restricted commands info
        if (restrictedCommands.length > 0) {
            this.sendMessage('');
            this.sendMessage(`§c🔒 Restricted Commands (${restrictedCommands.length}): ${restrictedCommands.join(', ')}`);
            this.sendMessage('§e💡 Contact staff for higher permissions');
        }
        
        // Show permission level descriptions
        this.sendMessage('');
        this.sendMessage('§6📋 Permission Levels:');
        this.sendMessage('§c👑 Admin §7- Full server control');
        this.sendMessage('§e🎯 Manager §7- Zoo operations & animal care');
        this.sendMessage('§a🔨 Builder §7- Construction with approved materials');
        this.sendMessage('§b👥 Visitor §7- Explore and enjoy the zoo');
    }

    feedAnimal(animal, player = null) {
        if (!animal) {
            this.sendMessage('§c❌ Please specify an animal to feed. Example: !feed lions');
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
            this.sendMessage(`§c❌ Unknown animal: ${animal}. Available: ${Object.keys(foodMap).join(', ')}`);
            return;
        }

        if (animal.toLowerCase() === 'all') {
            this.feedAllAnimals(player);
            return;
        }

        // Check if recently fed (prevent spam)
        const lastFed = this.lastFeedingTime.get(animal);
        const now = Date.now();
        if (lastFed && (now - lastFed) < 300000) { // 5 minutes cooldown
            const timeLeft = Math.ceil((300000 - (now - lastFed)) / 60000);
            this.sendMessage(`§e⏰ ${animalData.emoji} ${animal} were recently fed. Wait ${timeLeft} more minutes.`);
            return;
        }

        // Dispense food
        this.sendCommand(`/give @a ${animalData.food} ${animalData.amount}`);
        this.sendMessage(`§a✅ ${animalData.emoji} Feeding ${animal} with ${animalData.amount} ${animalData.food}!`);
        
        if (player) {
            this.sendCommand(`/title @a subtitle "§e${player} is feeding the ${animal}"`);
            this.sendCommand(`/title @a title "§6🍽️ Feeding Time"`);
        }

        // Update feeding time
        this.lastFeedingTime.set(animal, now);
        
        // Log feeding activity
        console.log(`🍽️ Fed ${animal} at ${new Date().toISOString()}`);
    }

    feedAllAnimals(player) {
        const animals = ['lions', 'tigers', 'elephants', 'penguins', 'dolphins'];
        this.sendMessage('§6🍽️ Starting mass feeding protocol...');
        
        animals.forEach((animal, index) => {
            setTimeout(() => {
                this.feedAnimal(animal, null);
            }, index * 2000); // 2 second delay between each feeding
        });

        if (player) {
            this.sendCommand(`/title @a subtitle "§e${player} initiated mass feeding"`);
            this.sendCommand(`/title @a title "§6🍽️ Zoo Feeding Time"`);
        }
    }

    countAnimals(player) {
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

        this.sendMessage('§6📊 Animal Count Report:');
        Object.entries(animalCounts).forEach(([animal, count]) => {
            this.sendMessage(`§e${animal}: §a${count}`);
        });

        const total = Object.values(animalCounts).reduce((sum, count) => sum + count, 0);
        this.sendMessage(`§6Total Animals: §a${total}`);
    }

    healthCheck(player) {
        this.sendMessage('§6🏥 Performing health check...');
        
        // Simulate health check results
        const healthStatuses = [
            '§a✅ All lions are healthy and active',
            '§a✅ Tigers showing normal behavior',
            '§e⚠️ Elephant #3 needs dental checkup soon',
            '§a✅ Penguin colony temperature optimal',
            '§a✅ Dolphin tank water quality excellent',
            '§e⚠️ Giraffe enclosure needs cleaning',
            '§a✅ All primates social and healthy'
        ];

        healthStatuses.forEach((status, index) => {
            setTimeout(() => {
                this.sendMessage(status);
            }, index * 1000);
        });

        setTimeout(() => {
            this.sendMessage('§6📋 Health check complete. 2 minor issues noted.');
        }, healthStatuses.length * 1000);
    }

    cleanEnclosure(area, player) {
        if (!area) {
            this.sendMessage('§c❌ Please specify area to clean: aquarium, savanna, arctic, aviary');
            return;
        }

        const cleaningMessages = {
            'aquarium': '§b🌊 Cleaning aquarium tanks and filters...',
            'savanna': '§e🦁 Cleaning savanna enclosures...',
            'arctic': '§f❄️ Cleaning arctic habitat...',
            'aviary': '§a🦅 Cleaning bird aviaries...',
            'all': '§6🧹 Starting full zoo cleaning protocol...'
        };

        const message = cleaningMessages[area.toLowerCase()];
        if (!message) {
            this.sendMessage(`§c❌ Unknown area: ${area}`);
            return;
        }

        this.sendMessage(message);
        
        // Simulate cleaning process
        setTimeout(() => {
            this.sendMessage(`§a✅ ${area} cleaning completed!`);
            if (player) {
                this.sendCommand(`/title @a subtitle "§e${player} cleaned the ${area}"`);
                this.sendCommand(`/title @a title "§a🧹 Cleaning Complete"`);
            }
        }, 3000);
    }

    showSchedule(player) {
        this.sendMessage('§6📅 Daily Zoo Schedule:');
        this.sendMessage('§e08:00 - Morning feeding (all animals)');
        this.sendMessage('§e10:00 - Health checks');
        this.sendMessage('§e12:00 - Midday feeding (carnivores)');
        this.sendMessage('§e14:00 - Enclosure cleaning');
        this.sendMessage('§e16:00 - Afternoon feeding (herbivores)');
        this.sendMessage('§e18:00 - Evening health check');
        this.sendMessage('§e20:00 - Night feeding (nocturnal animals)');
    }

    showZooStats(player) {
        const uptime = Math.floor(process.uptime() / 3600); // hours
        const feedingsToday = this.lastFeedingTime.size;
        
        this.sendMessage('§6📊 Zoo Statistics:');
        this.sendMessage(`§eServer Uptime: §a${uptime} hours`);
        this.sendMessage(`§eFeedings Today: §a${feedingsToday}`);
        this.sendMessage(`§eAI Status: §a${this.isConnected ? 'Online' : 'Offline'}`);
        this.sendMessage(`§eActive Players: §a${1}`); // Would be dynamic in real implementation
        this.sendMessage(`§eZoo Rating: §a⭐⭐⭐⭐⭐`);
    }

    emergencyProtocol(player) {
        this.sendMessage('§c🚨 EMERGENCY PROTOCOL ACTIVATED');
        this.sendCommand('/title @a title "§c🚨 EMERGENCY"');
        this.sendCommand('/title @a subtitle "§eAll staff report to stations"');
        
        // Emergency actions
        this.sendCommand('/weather clear');
        this.sendCommand('/time set day');
        this.sendMessage('§e⚠️ Weather cleared, time set to day');
        this.sendMessage('§e⚠️ All enclosures secured');
        this.sendMessage('§e⚠️ Emergency supplies dispensed');
        
        // Give emergency supplies
        this.sendCommand('/give @a golden_apple 5');
        this.sendCommand('/give @a bread 10');
        
        console.log(`🚨 Emergency protocol activated by ${player}`);
    }

    authorizeUser(targetPlayer, requestingPlayer) {
        // Only existing authorized users can authorize others
        if (!this.authorizedUsers.has(requestingPlayer)) {
            this.sendMessage(`§c🔒 Access denied! Only existing staff can authorize new users.`);
            return;
        }

        if (!targetPlayer) {
            this.sendMessage(`§c❌ Please specify a player name: !authorize <playername>`);
            return;
        }

        if (this.authorizedUsers.has(targetPlayer)) {
            this.sendMessage(`§e⚠️ ${targetPlayer} is already authorized as zoo staff.`);
            return;
        }

        this.authorizedUsers.add(targetPlayer);
        this.sendMessage(`§a✅ ${targetPlayer} has been granted zoo staff permissions!`);
        this.sendMessage(`§e📋 They can now use: !clean, !schedule, !emergency, !authorize`);
        
        console.log(`🔐 ${requestingPlayer} authorized ${targetPlayer} as zoo staff`);
        console.log(`🔐 Current authorized users: ${Array.from(this.authorizedUsers).join(', ')}`);
    }

    manageTNTAuth(action, targetPlayer, requestingPlayer) {
        // Only authorized users can manage TNT permissions
        if (!this.authorizedUsers.has(requestingPlayer)) {
            this.sendMessage(`§c🔒 Access denied! Only authorized staff can manage TNT permissions.`);
            return;
        }

        if (!action || !targetPlayer) {
            this.sendMessage(`§c❌ Usage: !tnt-auth <add/remove> <playername>`);
            return;
        }

        if (action === 'add') {
            // Send command to Minecraft to authorize TNT usage
            this.sendCommand(`/say §a🧨 ${targetPlayer} has been authorized for TNT usage by ${requestingPlayer}`);
            this.sendMessage(`§a✅ TNT authorization granted to ${targetPlayer}`);
            this.sendMessage(`§e⚠️ They can now use TNT, fire charges, and flint & steel`);
            
            console.log(`🧨 TNT Authorization: ${requestingPlayer} authorized ${targetPlayer} for explosives`);
            
        } else if (action === 'remove') {
            // Send command to Minecraft to remove TNT authorization
            this.sendCommand(`/say §c🧨 TNT authorization removed from ${targetPlayer} by ${requestingPlayer}`);
            this.sendMessage(`§c❌ TNT authorization removed from ${targetPlayer}`);
            this.sendMessage(`§e⚠️ They can no longer use explosive items`);
            
            console.log(`🧨 TNT Authorization: ${requestingPlayer} removed TNT access from ${targetPlayer}`);
            
        } else {
            this.sendMessage(`§c❌ Invalid action. Use "add" or "remove"`);
        }
    }

    listTNTUsers(requestingPlayer) {
        const playerLevel = this.getPlayerPermissionLevel(requestingPlayer);
        
        this.sendMessage('§6🧨 TNT Authorization List:');
        
        // Get TNT authorized users (admins only for now)
        const tntUsers = this.config.permissionLevels?.admin || [];
        
        if (tntUsers.length === 0) {
            this.sendMessage('§e📋 No users currently authorized for TNT usage');
        } else {
            tntUsers.forEach(user => {
                this.sendMessage(`§a✅ ${user} (admin)`);
            });
        }
        
        this.sendMessage('§e💡 Use !tnt-auth to modify permissions');
        console.log(`📋 ${requestingPlayer} (${playerLevel}) viewed TNT authorization list`);
    }

    managePermissions(args, requestingPlayer) {
        if (args.length < 2) {
            this.sendMessage('§e💡 Usage: !perm <set/get/list> <player> [level]');
            this.sendMessage('§e📋 Levels: admin, manager, builder, visitor');
            return;
        }

        const action = args[0];
        const targetPlayer = args[1];
        const newLevel = args[2];

        switch (action) {
            case 'set':
                if (!newLevel) {
                    this.sendMessage('§c❌ Please specify permission level: admin, manager, builder, visitor');
                    return;
                }
                
                if (!['admin', 'manager', 'builder', 'visitor'].includes(newLevel)) {
                    this.sendMessage('§c❌ Invalid permission level!');
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

                this.sendMessage(`§a✅ Set ${targetPlayer} permission to ${newLevel}`);
                this.sendMessage(`§e💡 Restart server to sync with behavior packs`);
                
                // Save config
                this.saveConfig();
                
                console.log(`🔐 ${requestingPlayer} set ${targetPlayer} permission to ${newLevel}`);
                break;

            case 'get':
                const level = this.getPlayerPermissionLevel(targetPlayer);
                this.sendMessage(`§e📋 ${targetPlayer} permission level: §a${level}`);
                break;

            case 'list':
                this.sendMessage('§6📋 All Permission Assignments:');
                for (const [level, users] of Object.entries(this.config.permissionLevels)) {
                    if (users.length > 0) {
                        this.sendMessage(`§e${level}: §a${users.join(', ')}`);
                    }
                }
                break;

            default:
                this.sendMessage('§c❌ Invalid action. Use: set, get, or list');
        }
    }

    saveConfig() {
        try {
            const configPath = path.join(__dirname, 'config.json');
            fs.writeFileSync(configPath, JSON.stringify(this.config, null, 4));
            console.log('💾 Configuration saved to config.json');
        } catch (error) {
            console.error('❌ Error saving config:', error);
        }
    }

    setupScheduledTasks() {
        // Automated feeding schedule
        cron.schedule('0 8,12,16,20 * * *', () => {
            this.sendMessage('§6🔔 Scheduled feeding time!');
            this.feedAllAnimals('AutoFeeder');
        });

        // Health check every 4 hours
        cron.schedule('0 */4 * * *', () => {
            this.sendMessage('§6🏥 Automated health check starting...');
            this.healthCheck('AutoSystem');
        });

        // Daily zoo stats
        cron.schedule('0 0 * * *', () => {
            this.sendMessage('§6📊 Daily zoo report generated');
            this.showZooStats('AutoSystem');
        });

        console.log('⏰ Scheduled tasks configured');
    }

    trackAnimalSpawn(event) {
        // Track when new animals spawn
        console.log('🐾 New animal spawned:', event);
    }

    trackAnimalDeath(event) {
        // Track animal deaths for health monitoring
        console.log('💀 Animal died:', event);
        this.sendMessage('§c⚠️ Animal casualty detected - investigating...');
    }

    handleBlockPlaced(event) {
        // React to specific block placements (feeding stations, etc.)
        if (event.block === 'redstone_block') {
            this.sendMessage('§e🔴 Feeding station activated!');
        }
    }

    sendCommand(command) {
        if (this.ws && this.isConnected) {
            try {
                this.ws.send(JSON.stringify({
                    commandLine: command
                }));
            } catch (error) {
                console.error('Error sending command:', error);
            }
        }
    }

    sendMessage(message) {
        this.sendCommand(`/say ${message}`);
    }
}

// Start the Super Zoo Caretaker
const caretaker = new SuperZooCaretaker();

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('🛑 Shutting down Zoo Caretaker...');
    if (caretaker.ws) {
        caretaker.sendMessage('§c🤖 Zoo AI Caretaker going offline...');
        caretaker.ws.close();
    }
    process.exit(0);
});

console.log('🦁 Super Zoo AI Caretaker started successfully!'); 