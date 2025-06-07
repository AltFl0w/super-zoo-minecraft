# 🦁 Super Zoo Minecraft Server

A fully containerized Minecraft Bedrock Edition server with AI-powered zoo management, designed for cross-platform play on tablets, Nintendo Switch, Xbox, PlayStation, and mobile devices.

## 🎮 Features

- **Cross-Platform Compatible**: Play on any Bedrock Edition device
- **AI Zoo Caretaker**: Automated feeding, health checks, and enclosure management
- **70+ Animals**: Lions, tigers, elephants, penguins, dolphins, and more
- **Web Dashboard**: Monitor server status and manage zoo operations
- **Automated Backups**: Daily world backups with configurable retention
- **Docker Deployment**: Easy setup and deployment to any server

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose installed
- Your existing Super Zoo world data

### 1. Setup
```bash
# Clone or download the project files
# Run the deployment script
chmod +x deploy.sh
./deploy.sh
```

### 2. Configure
Edit the configuration files:
- `config/allowlist.json` - Add your Xbox Live gamertag
- `config/permissions.json` - Add your XUID for operator permissions
- `config/server.properties` - Adjust server settings if needed

### 3. Deploy
```bash
# Build and start the server
docker-compose up -d --build

# Monitor logs
docker-compose logs -f super-zoo-server
```

### 4. Connect
- **Minecraft**: Connect to `your-server-ip:19132`
- **Web Dashboard**: Visit `http://your-server-ip:8081`
- **AI Bot API**: Access `http://your-server-ip:8080`

## 🤖 AI Caretaker Commands

In-game chat commands for zoo management:

| Command | Description |
|---------|-------------|
| `!help` | Show all available commands |
| `!feed <animal>` | Feed specific animals (lions, tigers, elephants, etc.) |
| `!feed all` | Feed all animals in the zoo |
| `!count` | Count all animals in the zoo |
| `!health` | Check health status of all animals |
| `!clean <area>` | Clean enclosures (aquarium, savanna, arctic, aviary) |
| `!schedule` | Show daily feeding schedule |
| `!stats` | Show zoo statistics and server info |
| `!emergency` | Activate emergency protocols |

### Example Usage
```
!feed lions
!health
!clean aquarium
!count
```

## 📊 Web Dashboard

Access the web dashboard at `http://your-server-ip:8081` to:
- Monitor server status and uptime
- View animal statistics
- Track feeding schedules
- Check health reports
- Quick action buttons for common tasks

## 🐳 Docker Services

The deployment includes three services:

### super-zoo-server
- Main Minecraft Bedrock server
- AI caretaker bot
- Ports: 19132 (Minecraft), 8080 (API)

### backup-service
- Automated daily backups
- Configurable retention period
- Backup files stored in `./data/backups`

### zoo-dashboard
- Web interface for monitoring
- Port: 8081
- Real-time server statistics

## 📁 Directory Structure

```
super-zoo-server/
├── Dockerfile                 # Main container definition
├── docker-compose.yml        # Service orchestration
├── start.sh                  # Server startup script
├── deploy.sh                 # Deployment setup script
├── server.properties         # Minecraft server config
├── permissions.json          # Operator permissions
├── allowlist.json            # Player allowlist
├── zoo-ai-bot/               # AI caretaker source code
│   ├── package.json
│   └── zoo-caretaker.js
├── data/                     # Persistent data (mounted volumes)
│   ├── worlds/               # World save files
│   ├── logs/                 # Server logs
│   └── backups/              # Automated backups
├── config/                   # Configuration files
├── behavior_packs/           # Minecraft behavior packs
├── resource_packs/           # Minecraft resource packs
└── dashboard/                # Web dashboard files
```

## 🔧 Configuration

### Environment Variables
Edit `.env` file to customize:
```env
SERVER_NAME=Super Zoo Server
GAMEMODE=creative
DIFFICULTY=peaceful
MAX_PLAYERS=10
BACKUP_INTERVAL=86400
RETENTION_DAYS=7
```

### Server Properties
Key settings in `config/server.properties`:
- `level-name=Super Zoo` - World name
- `max-players=10` - Player limit
- `gamemode=creative` - Game mode
- `allow-websockets=true` - Enable AI bot

## 🦁 Animal Packs Included

- **WorldAnima**: 70+ realistic animals
- **AquaticFau**: Marine life expansion
- **MBcreature**: Additional creatures
- Lions, tigers, elephants, giraffes
- Penguins, dolphins, sharks, whales
- Monkeys, gorillas, eagles, flamingos
- And many more!

## 📱 Cross-Platform Play

Compatible with:
- **Nintendo Switch** - Minecraft Bedrock Edition
- **iPad/iPhone** - Minecraft Pocket Edition
- **Android Tablets/Phones** - Minecraft Pocket Edition
- **Xbox Series X/S, Xbox One** - Minecraft Bedrock Edition
- **PlayStation 4/5** - Minecraft Bedrock Edition
- **Windows 10/11** - Minecraft Bedrock Edition

## 🛠️ Management Commands

### Docker Operations
```bash
# Start server
docker-compose up -d

# Stop server
docker-compose down

# View logs
docker-compose logs -f super-zoo-server

# Restart AI bot only
docker-compose restart super-zoo-server

# Update and rebuild
docker-compose down
docker-compose up -d --build
```

### Backup Management
```bash
# Manual backup
docker exec zoo-backup tar -czf /backups/manual-backup-$(date +%Y%m%d-%H%M%S).tar.gz -C /data worlds

# Restore from backup
docker-compose down
tar -xzf backup-file.tar.gz -C ./data/
docker-compose up -d
```

## 🔍 Troubleshooting

### Common Issues

**Server won't start:**
- Check Docker logs: `docker-compose logs super-zoo-server`
- Verify port 19132 is available
- Ensure world data is in correct location

**AI bot not responding:**
- Check websocket connection in logs
- Verify `allow-websockets=true` in server.properties
- Restart container: `docker-compose restart super-zoo-server`

**Can't connect from device:**
- Ensure server IP and port 19132 are accessible
- Check firewall settings
- Verify Xbox Live authentication if using online-mode

### Log Locations
- Server logs: `./data/logs/server.log`
- AI bot logs: `./data/logs/ai-bot.log`
- Docker logs: `docker-compose logs`

## 🚀 Deployment to Cloud

### AWS/DigitalOcean/etc.
1. Create a server instance
2. Install Docker and Docker Compose
3. Copy project files to server
4. Run deployment script
5. Configure firewall for ports 19132, 8080, 8081
6. Update DNS/IP in client connections

### Port Forwarding (Home Server)
- Forward port 19132 (UDP) for Minecraft
- Forward port 8081 (TCP) for web dashboard
- Optional: Forward port 8080 (TCP) for API access

## 📞 Support

For issues or questions:
1. Check the troubleshooting section
2. Review Docker logs
3. Verify configuration files
4. Test with a fresh world if needed

## 🎉 Enjoy Your Zoo!

Your Super Zoo server is now ready for cross-platform adventures! Connect with friends on any device and let the AI caretaker help manage your amazing animal collection.

Happy zoo keeping! 🦁🐅🐘🐧🦒🐬 