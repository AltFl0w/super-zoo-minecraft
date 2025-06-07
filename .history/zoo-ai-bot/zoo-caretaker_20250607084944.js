const WebSocket = require('ws');
const express = require('express');
const cors = require('cors');
const cron = require('node-cron');

class SuperZooCaretaker {
    constructor() {
        this.ws = null;
        this.isConnected = false;
        this.animalStats = new Map();
        this.feedingSchedule = new Map();
        this.lastFeedingTime = new Map();
        
        // Permission system - Add authorized users here
        this.authorizedUsers = new Set([
            'YourMinecraftUsername',  // Replace with actual usernames
            'AdminUser1',
            'AdminUser2'
            // Add more usernames as needed
        ]);
        
        // Commands that require special permissions
        this.restrictedCommands = new Set([
            'emergency',
            'clean',
            'schedule'
        ]);
        
        this.setupWebServer();
        this.connectToMinecraft();
        this.setupScheduledTasks();
        
        console.log('🦁 Super Zoo AI Caretaker initializing...');
        console.log(`🔐 Authorized users: ${Array.from(this.authorizedUsers).join(', ')}`);
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
            
            // Check if command requires special permissions
            if (this.restrictedCommands.has(command)) {
                if (!this.authorizedUsers.has(player)) {
                    this.sendMessage(`§c🔒 Access denied! Only authorized zoo staff can use !${command}`);
                    this.sendMessage(`§e💡 Available commands: !help, !feed, !count, !health, !stats`);
                    console.log(`🚫 Unauthorized access attempt: ${player} tried to use !${command}`);
                    return;
                }
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
                default:
                    this.sendMessage(`§c❌ Unknown command: ${command}. Type !help for available commands.`);
            }
        }
    }

    showHelp(player) {
        const isAuthorized = this.authorizedUsers.has(player);
        
        const basicCommands = [
            '§6🦁 Super Zoo AI Caretaker Commands:',
            '§e!feed <animal> §7- Feed specific animals (lions, tigers, elephants, etc.)',
            '§e!count §7- Count all animals in the zoo',
            '§e!health §7- Check health status of all animals',
            '§e!stats §7- Show zoo statistics',
            '§e!help §7- Show this help message'
        ];
        
        const staffCommands = [
            '§c🔒 Staff Only Commands:',
            '§e!clean <area> §7- Clean enclosures (aquarium, savanna, arctic)',
            '§e!schedule §7- Show feeding schedule',
            '§e!emergency §7- Activate emergency protocols (DANGER!)',
            '§e!authorize <player> §7- Grant staff permissions to a player'
        ];
        
        basicCommands.forEach(msg => this.sendMessage(msg));
        
        if (isAuthorized) {
            this.sendMessage('');
            staffCommands.forEach(msg => this.sendMessage(msg));
            this.sendMessage('§a✅ You have staff permissions');
        } else {
            this.sendMessage('§e💡 Contact zoo staff for additional permissions');
        }
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