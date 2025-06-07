# 🦁 Super Zoo Project Guide - Minecraft Bedrock Edition

## 📋 Project Overview
Create an immersive, cross-platform zoo experience in Minecraft Bedrock Edition with AI-powered caretakers, automated systems, and 100+ animals. Playable on tablets, Nintendo Switch, Xbox, PlayStation, and mobile devices.

---

## 🎯 Current Setup Analysis

### ✅ What You Already Have
- **World Name**: "Super Zoo" 
- **Platform**: Minecraft Bedrock Edition (cross-platform compatible)
- **Installed Packs**:
  - **WorldAnima**: 70+ realistic animals (lions, tigers, elephants, penguins, sharks, etc.)
  - **AquaticFau**: Marine life expansion
  - **MBcreature**: Additional creatures
  - **Multiple other animal packs**

### 🎮 Platform Compatibility
- ✅ Nintendo Switch
- ✅ iPad/Android tablets
- ✅ Xbox Series X/S, Xbox One
- ✅ PlayStation 4/5
- ✅ Windows 10/11 (Bedrock)
- ✅ iOS/Android mobile

---

## 🦁 Animal Collection Strategy

### 1️⃣ Maximize Current Packs
**WorldAnima Animals (70+)**:
- **Big Cats**: Lions, tigers, leopards, panthers, cheetahs
- **Elephants**: African & Asian elephants
- **Primates**: Gorillas, chimpanzees, capuchin monkeys
- **Marine Life**: Sharks, dolphins, whales, penguins
- **Birds**: Eagles, flamingos, ostriches, toucans
- **Safari Animals**: Giraffes, zebras, rhinos, hippos

### 2️⃣ Additional Pack Recommendations
- **Marketplace Safari Packs**: Official Mojang zoo content
- **Aquatic Expansion Packs**: More fish and marine life
- **Prehistoric Packs**: Dinosaurs for a prehistoric section
- **Mythical Creatures**: Dragons for fantasy zoo section

### 3️⃣ Custom Spawn Areas
- Design biome-specific habitats
- Use behavior packs to control spawn rates
- Create breeding programs with custom loot tables

---

## 🏗️ Zoo Infrastructure & Design

### 🏡 Enclosure Design
**Glass Barriers & Viewing Areas**:
- Reinforced glass walls (blast-resistant)
- Multi-level viewing platforms
- Underground tunnel systems
- Skybridge walkways

**Habitat Zones**:
- **Savanna Section**: Lions, elephants, giraffes
- **Arctic Zone**: Penguins, polar bears
- **Aquarium Complex**: Sharks, dolphins, tropical fish
- **Aviary**: Birds with flight space
- **Primate Island**: Monkeys and apes
- **Nocturnal House**: Bats, owls

### ⚙️ Automated Systems
**Redstone Contraptions**:
- Automated feeding dispensers
- Timed gate systems
- Water circulation for aquariums
- Lighting schedules (day/night cycles)
- Visitor transportation (minecart systems)

**Command Block Automation**:
- Scheduled feeding announcements
- Weather control for outdoor exhibits
- Teleportation systems for staff
- Automatic cleanup systems

---

## 🤖 AI Integration & Automation

### 1️⃣ Bedrock Websocket API Integration
**Official Microsoft AI Support**:
```javascript
// AI Zoo Caretaker Bot
const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:8080');

// Automated feeding schedule
ws.on('message', function(data) {
    const event = JSON.parse(data);
    
    if (event.eventName === 'PlayerMessage') {
        if (event.message.includes('!feed')) {
            const animal = event.message.split(' ')[1];
            sendCommand(`/give @p ${getFoodForAnimal(animal)}`);
            sendCommand(`/say Feeding ${animal} now!`);
        }
    }
});
```

### 2️⃣ AI Caretaker Features

The AI bot provides chat commands with a built-in permission system:

**Public Commands** (Anyone can use):
- `!help` - Show available commands
- `!feed <animal>` - Feed specific animals (lions, tigers, elephants, etc.)
- `!count` - Count all animals in the zoo
- `!health` - Check health status of all animals
- `!stats` - Show zoo statistics

**Staff Only Commands** (Requires authorization):
- `!clean <area>` - Clean enclosures (aquarium, savanna, arctic)
- `!schedule` - Show feeding schedule
- `!emergency` - Activate emergency protocols (⚠️ DANGEROUS!)
- `!authorize <player>` - Grant staff permissions to another player

**🔒 Permission Setup:**
1. Edit `zoo-ai-bot/config.json` and add your Minecraft username to the `authorizedUsers` array
2. Edit `behavior_packs/TNT_Security/scripts/main.js` and add your username to the `AUTHORIZED_USERS` array
3. Restart the Docker container to load the changes
4. In-game, existing staff can authorize new users with `!authorize <username>`

**🧨 TNT Security Commands** (Staff Only):
- `!tnt-auth add <player>` - Grant TNT/explosive permissions to a player
- `!tnt-auth remove <player>` - Remove TNT/explosive permissions from a player  
- `!tnt-list` - Show all users authorized for TNT usage

**Automated Schedules**:
- Morning feeding routines
- Evening enclosure cleaning
- Weekly health checkups
- Breeding program management

### 3️⃣ Smart Monitoring Systems
**Real-time Analytics**:
- Animal behavior tracking
- Visitor flow optimization
- Resource consumption monitoring
- Security breach detection

---

## 🛠️ Technical Setup Guide

### 🐳 Docker Deployment (Recommended for Server Transfer)

**Why Docker?**
- **Portable**: Works on any server (Linux, Windows, macOS)
- **Consistent**: Same environment everywhere
- **Easy Transfer**: Single container with everything included
- **Scalable**: Easy to backup, restore, and migrate

#### Docker Setup Files

**1. Create Dockerfile:**
```dockerfile
# Minecraft Bedrock Server with AI Bot
FROM ubuntu:22.04

# Install dependencies
RUN apt-get update && apt-get install -y \
    wget \
    unzip \
    curl \
    nodejs \
    npm \
    && rm -rf /var/lib/apt/lists/*

# Create minecraft user
RUN useradd -m -s /bin/bash minecraft
WORKDIR /home/minecraft

# Download Bedrock Server
RUN wget https://minecraft.azureedge.net/bin-linux/bedrock-server-1.20.81.01.zip \
    && unzip bedrock-server-1.20.81.01.zip \
    && rm bedrock-server-1.20.81.01.zip \
    && chown -R minecraft:minecraft /home/minecraft

# Copy world and packs
COPY --chown=minecraft:minecraft worlds/ ./worlds/
COPY --chown=minecraft:minecraft behavior_packs/ ./behavior_packs/
COPY --chown=minecraft:minecraft resource_packs/ ./resource_packs/

# Setup AI Bot
COPY --chown=minecraft:minecraft zoo-ai-bot/ ./zoo-ai-bot/
WORKDIR /home/minecraft/zoo-ai-bot
RUN npm install

# Back to main directory
WORKDIR /home/minecraft

# Copy server configuration
COPY --chown=minecraft:minecraft server.properties ./
COPY --chown=minecraft:minecraft permissions.json ./
COPY --chown=minecraft:minecraft allowlist.json ./

# Expose ports
EXPOSE 19132/udp 8080

# Switch to minecraft user
USER minecraft

# Start script
COPY --chown=minecraft:minecraft start.sh ./
RUN chmod +x start.sh

CMD ["./start.sh"]
```

**2. Create docker-compose.yml:**
```yaml
version: '3.8'

services:
  super-zoo-server:
    build: .
    container_name: super-zoo-minecraft
    ports:
      - "19132:19132/udp"  # Minecraft Bedrock
      - "8080:8080"        # AI Bot Websocket
    volumes:
      - ./worlds:/home/minecraft/worlds
      - ./logs:/home/minecraft/logs
      - ./backups:/home/minecraft/backups
    environment:
      - SERVER_NAME=Super Zoo Server
      - GAMEMODE=creative
      - DIFFICULTY=peaceful
      - MAX_PLAYERS=10
    restart: unless-stopped
    
  # Optional: Backup service
  backup-service:
    image: alpine:latest
    container_name: zoo-backup
    volumes:
      - ./worlds:/data/worlds:ro
      - ./backups:/backups
    command: |
      sh -c "
      while true; do
        tar -czf /backups/zoo-backup-$$(date +%Y%m%d-%H%M%S).tar.gz -C /data worlds
        find /backups -name '*.tar.gz' -mtime +7 -delete
        sleep 86400
      done"
    restart: unless-stopped
```

**3. Create start.sh script:**
```bash
#!/bin/bash

# Start AI Bot in background
cd /home/minecraft/zoo-ai-bot
node zoo-caretaker.js &

# Start Minecraft Server
cd /home/minecraft
./bedrock_server
```

**4. Create server.properties:**
```properties
server-name=Super Zoo Server
gamemode=creative
force-gamemode=false
difficulty=peaceful
allow-cheats=true
max-players=10
online-mode=true
allow-list=false
server-port=19132
server-portv6=19133
view-distance=32
tick-distance=4
player-idle-timeout=30
max-threads=8
level-name=Super Zoo
level-seed=
default-player-permission-level=member
texturepack-required=false
content-log-file-enabled=false
compression-threshold=1
compression-algorithm=zlib
server-authoritative-movement=server-auth
player-movement-score-threshold=20
player-movement-action-direction-threshold=0.85
player-movement-distance-threshold=0.3
player-movement-duration-threshold-in-ms=500
correct-player-movement=false
server-authoritative-block-breaking=false
chat-restriction=None
disable-player-interaction=false
client-side-chunk-generation-enabled=true
block-network-ids-are-hashes=true
disable-persona=false
disable-custom-skins=false
server-build-radius-ratio=Disabled
allow-websockets=true
websocket-port=8080
```

#### Deployment Commands

**Build and Deploy:**
```bash
# Clone your world data
cp -r /Users/brandontuttle/Dev/AI_Code/Minecraft/games/com.mojang/minecraftWorlds/sWcJIvWk2cM= ./worlds/Super\ Zoo/

# Copy behavior packs
cp -r /Users/brandontuttle/Dev/AI_Code/Minecraft/games/com.mojang/behavior_packs/* ./behavior_packs/

# Copy resource packs  
cp -r /Users/brandontuttle/Dev/AI_Code/Minecraft/games/com.mojang/resource_packs/* ./resource_packs/

# Build and start
docker-compose up -d --build

# View logs
docker-compose logs -f super-zoo-server

# Stop server
docker-compose down

# Backup manually
docker exec zoo-backup tar -czf /backups/manual-backup-$(date +%Y%m%d-%H%M%S).tar.gz -C /data worlds
```

### Step 1: Traditional Server Configuration (Alternative)
1. **Download Bedrock Dedicated Server**
   - Get latest version from Minecraft.net
   - Extract to dedicated folder
   - Configure `server.properties`

2. **World Integration**
   - Copy your Super Zoo world to server `/worlds/` folder
   - Update `level-name=Super Zoo` in server.properties
   - Ensure all behavior/resource packs are in server folders

### Step 2: AI Bot Setup
1. **Install Node.js** on server machine
2. **Create AI Bot Project**:
```bash
mkdir zoo-ai-bot
cd zoo-ai-bot
npm init -y
npm install ws minecraft-bedrock-protocol
```

**3. Create zoo-caretaker.js:**
```javascript
const WebSocket = require('ws');

class ZooCaretaker {
    constructor() {
        this.ws = new WebSocket('ws://localhost:8080');
        this.setupEventHandlers();
        this.feedingSchedule = this.createFeedingSchedule();
    }

    setupEventHandlers() {
        this.ws.on('open', () => {
            console.log('🤖 Zoo AI Caretaker connected!');
            this.sendCommand('/say Zoo AI Caretaker is now online!');
        });

        this.ws.on('message', (data) => {
            const event = JSON.parse(data);
            this.handleEvent(event);
        });
    }

    handleEvent(event) {
        switch(event.eventName) {
            case 'PlayerMessage':
                this.handlePlayerCommand(event);
                break;
            case 'BlockPlaced':
                this.handleBlockPlaced(event);
                break;
        }
    }

    handlePlayerCommand(event) {
        const message = event.message.toLowerCase();
        
        if (message.startsWith('!feed')) {
            const animal = message.split(' ')[1];
            this.feedAnimal(animal);
        } else if (message.startsWith('!count')) {
            this.countAnimals();
        } else if (message.startsWith('!health')) {
            this.healthCheck();
        }
    }

    feedAnimal(animal) {
        const foodMap = {
            'lions': 'raw_beef',
            'tigers': 'raw_beef', 
            'elephants': 'hay_block',
            'penguins': 'raw_fish',
            'dolphins': 'raw_fish'
        };
        
        const food = foodMap[animal] || 'wheat';
        this.sendCommand(`/give @a ${food} 64`);
        this.sendCommand(`/say Feeding ${animal} with ${food}!`);
    }

    sendCommand(command) {
        if (this.ws.readyState === WebSocket.OPEN) {
            this.ws.send(JSON.stringify({
                commandLine: command
            }));
        }
    }
}

// Start the caretaker
new ZooCaretaker();
```

3. **Enable Websocket in Bedrock**:
   - Add to `server.properties`: `allow-websockets=true`
   - Configure port: `websocket-port=8080`

### Step 3: Pack Management
1. **Behavior Packs** (server-side):
   - WorldAnima pack
   - Custom feeding schedules
   - Automated breeding rules

2. **Resource Packs** (client-side):
   - Animal texture packs
   - UI improvements
   - Sound enhancements

---

## 🎮 Multiplayer & Cross-Platform Setup

### Network Configuration
**Option 1: Local Network**
- Port forward 19132 (Bedrock default)
- Share local IP with friends
- Works for same WiFi network

**Option 2: Cloud Hosting**
- Use services like Aternos, Minehut, or Realms
- Automatic cross-platform compatibility
- No port forwarding needed

**Option 3: Playit.gg Tunnel**
- Free tunneling service
- Easy setup for home servers
- Works with all platforms

### Friend Invitation Process
1. **Share Server Details**:
   - IP address and port
   - Or Realms invitation code
   - Ensure all players have required resource packs

2. **Pack Distribution**:
   - Upload packs to file sharing service
   - Provide installation instructions
   - Test connectivity before main session

---

## 🎯 Phase Implementation Plan

### Phase 1: Foundation (Week 1)
- [ ] Set up dedicated server
- [ ] Install and test all animal packs
- [ ] Create basic enclosure designs
- [ ] Test cross-platform connectivity

### Phase 2: Infrastructure (Week 2)
- [ ] Build automated feeding systems
- [ ] Create visitor pathways
- [ ] Install security systems
- [ ] Add transportation networks

### Phase 3: AI Integration (Week 3)
- [ ] Deploy AI caretaker bot
- [ ] Configure voice commands
- [ ] Set up monitoring systems
- [ ] Test automated schedules

### Phase 4: Enhancement (Week 4)
- [ ] Add educational signs and information
- [ ] Create mini-games and activities
- [ ] Implement visitor feedback system
- [ ] Launch grand opening event

---

## 🔧 Troubleshooting & Tips

### Common Issues
**Pack Compatibility**:
- Ensure all players have same pack versions
- Check manifest.json for version conflicts
- Test packs individually before combining

**Performance Optimization**:
- Limit simultaneous animal spawns
- Use render distance settings appropriately
- Optimize redstone contraptions for mobile devices

**Cross-Platform Sync**:
- Verify all platforms can connect to server
- Test pack loading on each device type
- Have backup connection methods ready

### Best Practices
- **Regular Backups**: Save world frequently during development
- **Testing Protocol**: Test each feature on all target platforms
- **Documentation**: Keep detailed notes of custom configurations
- **Community Feedback**: Get input from intended players early

---

## 📚 Resources & References

### Official Documentation
- [Minecraft Bedrock Edition Add-Ons](https://learn.microsoft.com/en-us/minecraft/creator/)
- [Bedrock Dedicated Server Setup](https://www.minecraft.net/en-us/download/server/bedrock)
- [Websocket API Documentation](https://learn.microsoft.com/en-us/minecraft/creator/documents/websocketapi)

### Community Resources
- [Bedrock Wiki](https://wiki.bedrock.dev/)
- [MCPEDL](https://mcpedl.com/) - Pack downloads
- [Minecraft Commands](https://minecraft.fandom.com/wiki/Commands) - Command reference

### AI Integration Examples
- [Bedrock Bot Examples](https://github.com/minecraft-bedrock-protocol)
- [Websocket Integration Tutorials](https://learn.microsoft.com/en-us/minecraft/creator/documents/websocketapi)

---

## 🎉 Success Metrics

### Engagement Goals
- [ ] 5+ concurrent players across different platforms
- [ ] 100+ unique animals in zoo
- [ ] 10+ automated systems functioning
- [ ] AI responding to 90%+ of commands correctly

### Technical Milestones
- [ ] Zero cross-platform compatibility issues
- [ ] <5 second response time for AI commands
- [ ] 24/7 server uptime
- [ ] Automated backup system functioning

---

*Last Updated: January 2025*
*Project Status: Planning Phase*
*Next Review: After Phase 1 Completion* 