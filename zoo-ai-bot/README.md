# Super Zoo AI Caretaker

An AI-powered caretaker bot for your Minecraft Bedrock Edition zoo server with advanced permission controls.

## Features

- 🤖 **AI-Powered Automation**: Automated feeding, health checks, and zoo management
- 🔒 **Permission System**: Restrict dangerous commands to authorized staff only
- 📊 **Real-time Monitoring**: Track animal health, feeding schedules, and zoo statistics
- 🚨 **Emergency Protocols**: Quick response systems for zoo emergencies
- 🌐 **Web API**: External control via REST endpoints
- ⏰ **Scheduled Tasks**: Automated daily routines

## Permission System

### Command Categories

**Public Commands** (Anyone can use):
- `!help` - Show available commands
- `!feed <animal>` - Feed specific animals
- `!count` - Count all animals in the zoo
- `!health` - Check animal health status
- `!stats` - Show zoo statistics

**Staff Only Commands** (Requires authorization):
- `!clean <area>` - Clean enclosures
- `!schedule` - Show feeding schedule
- `!emergency` - Activate emergency protocols (⚠️ DANGEROUS!)
- `!authorize <player>` - Grant staff permissions to another player

### Setting Up Authorized Users

1. **Edit the config file**: Open `config.json` and add Minecraft usernames to the `authorizedUsers` array:

```json
{
    "authorizedUsers": [
        "YourMinecraftUsername",
        "ZooManager",
        "HeadKeeper",
        "TrustedStaff"
    ]
}
```

2. **In-game authorization**: Existing staff can authorize new users with:
```
!authorize NewStaffMember
```

3. **Restart the bot** to load config changes (or use the in-game command for immediate effect)

### Security Features

- ❌ **Access Denied**: Unauthorized users get clear error messages
- 📝 **Audit Logging**: All permission attempts are logged to console
- 🔐 **Chain of Trust**: Only existing staff can authorize new staff
- ⚠️ **Emergency Lockdown**: Emergency protocols require highest permissions

## Emergency Protocol

The `!emergency` command is the most restricted and powerful command. It:

- 🌤️ Clears weather and sets time to day
- 🔒 Secures all animal enclosures
- 🚑 Gives emergency supplies to all players
- 📢 Broadcasts emergency alerts
- 📋 Logs the incident for review

**⚠️ WARNING**: Only grant emergency access to your most trusted staff!

## Configuration Options

Edit `config.json` to customize:

- `authorizedUsers`: List of usernames with staff permissions
- `restrictedCommands`: Commands that require authorization
- `feedingSchedule`: Automated feeding times
- `emergencyProtocols`: What actions emergency mode takes
- `animalTypes`: Supported animal types for feeding

## Installation

1. Ensure your Minecraft Bedrock server has WebSocket API enabled
2. Install Node.js dependencies: `npm install`
3. Configure authorized users in `config.json`
4. Start the bot: `node zoo-caretaker.js`

## API Endpoints

- `GET /health` - Bot health status
- `GET /api/animals` - Animal statistics
- `POST /api/feed/:animal` - Feed specific animal type

## Troubleshooting

**"Access denied" errors**: 
- Check that the username is exactly correct in `config.json`
- Usernames are case-sensitive
- Restart the bot after config changes

**Bot not responding**:
- Verify WebSocket connection to Minecraft server
- Check server logs for connection errors
- Ensure port 19132 is accessible

## Support

For issues or feature requests, check the console logs for detailed error information. 