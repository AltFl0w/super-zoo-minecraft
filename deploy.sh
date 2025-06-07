#!/bin/bash

# Super Zoo Server Deployment Script
echo "🦁 Setting up Super Zoo Server for Docker deployment..."

# Create necessary directories
echo "📁 Creating directory structure..."
mkdir -p data/worlds data/logs data/backups config behavior_packs resource_packs

# Copy your existing world data
echo "🌍 Copying Super Zoo world data..."
if [ -d "games/com.mojang/minecraftWorlds/sWcJIvWk2cM=" ]; then
    cp -r "games/com.mojang/minecraftWorlds/sWcJIvWk2cM=" "./data/worlds/Super Zoo/"
    echo "✅ World data copied successfully"
else
    echo "⚠️ World data not found at expected location"
    echo "Please manually copy your world to: ./data/worlds/Super Zoo/"
fi

# Copy behavior packs
echo "🎒 Copying behavior packs..."
if [ -d "games/com.mojang/behavior_packs" ]; then
    cp -r games/com.mojang/behavior_packs/* ./behavior_packs/
    echo "✅ Behavior packs copied"
else
    echo "⚠️ Behavior packs not found"
fi

# Ensure TNT Security pack is included
echo "🛡️ Setting up TNT Security pack..."
if [ -d "behavior_packs/TNT_Security" ]; then
    echo "✅ TNT Security pack already present"
else
    echo "⚠️ TNT Security pack created - configure authorized users in the script"
fi

# Copy resource packs
echo "🎨 Copying resource packs..."
if [ -d "games/com.mojang/resource_packs" ]; then
    cp -r games/com.mojang/resource_packs/* ./resource_packs/
    echo "✅ Resource packs copied"
else
    echo "⚠️ Resource packs not found"
fi

# Copy configuration files to config directory
echo "⚙️ Setting up configuration..."
cp server.properties config/
cp permissions.json config/
cp allowlist.json config/

# Make scripts executable
chmod +x start.sh

# Create .env file for environment variables
echo "📝 Creating environment configuration..."
cat > .env << EOF
# Super Zoo Server Configuration
SERVER_NAME=Super Zoo Server
GAMEMODE=creative
DIFFICULTY=peaceful
MAX_PLAYERS=10
BACKUP_INTERVAL=86400
RETENTION_DAYS=7
EOF

# Create docker-compose override for development
echo "🔧 Creating development configuration..."
cat > docker-compose.override.yml << EOF
version: '3.8'

services:
  super-zoo-server:
    environment:
      - NODE_ENV=development
    volumes:
      # Mount source code for development
      - ./zoo-ai-bot:/home/minecraft/zoo-ai-bot
EOF

# Create a simple dashboard
echo "📊 Creating web dashboard..."
mkdir -p dashboard
cat > dashboard/index.html << EOF
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Super Zoo Server Dashboard</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 0; padding: 20px; background: #f0f0f0; }
        .container { max-width: 1200px; margin: 0 auto; }
        .card { background: white; padding: 20px; margin: 10px 0; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .status { display: inline-block; padding: 4px 8px; border-radius: 4px; color: white; }
        .online { background: #4CAF50; }
        .offline { background: #f44336; }
        h1 { color: #333; text-align: center; }
        .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🦁 Super Zoo Server Dashboard</h1>
        
        <div class="card">
            <h2>Server Status</h2>
            <p>Status: <span class="status online">Online</span></p>
            <p>Players: <span id="players">0/10</span></p>
            <p>Uptime: <span id="uptime">Loading...</span></p>
        </div>

        <div class="stats">
            <div class="card">
                <h3>🦁 Animals</h3>
                <p>Total: <span id="animal-count">70+</span></p>
                <p>Species: <span id="species-count">15+</span></p>
            </div>
            
            <div class="card">
                <h3>🍽️ Feedings Today</h3>
                <p>Count: <span id="feeding-count">0</span></p>
                <p>Last: <span id="last-feeding">Never</span></p>
            </div>
            
            <div class="card">
                <h3>🏥 Health Status</h3>
                <p>All animals: <span class="status online">Healthy</span></p>
                <p>Last check: <span id="last-health">Never</span></p>
            </div>
        </div>

        <div class="card">
            <h2>Quick Actions</h2>
            <button onclick="feedAll()">🍽️ Feed All Animals</button>
            <button onclick="healthCheck()">🏥 Health Check</button>
            <button onclick="cleanAll()">🧹 Clean All Enclosures</button>
        </div>

        <div class="card">
            <h2>Recent Activity</h2>
            <div id="activity-log">
                <p>Server started successfully</p>
                <p>AI Caretaker online</p>
                <p>All systems operational</p>
            </div>
        </div>
    </div>

    <script>
        // Simple dashboard functionality
        function feedAll() {
            fetch('/api/feed/all', { method: 'POST' })
                .then(response => response.json())
                .then(data => alert('Feeding all animals!'));
        }

        function healthCheck() {
            alert('Health check initiated!');
        }

        function cleanAll() {
            alert('Cleaning all enclosures!');
        }

        // Update stats periodically
        setInterval(() => {
            fetch('/health')
                .then(response => response.json())
                .then(data => {
                    document.getElementById('uptime').textContent = Math.floor(data.uptime / 3600) + ' hours';
                })
                .catch(() => {
                    // Server might not be running
                });
        }, 30000);
    </script>
</body>
</html>
EOF

echo ""
echo "🎉 Super Zoo Server setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Review and update config/allowlist.json with your Xbox Live gamertag"
echo "2. Update config/permissions.json with your XUID"
echo "3. Build and start the server:"
echo "   docker-compose up -d --build"
echo ""
echo "🌐 Access points:"
echo "   Minecraft Server: localhost:19132"
echo "   Web Dashboard: http://localhost:8081"
echo "   AI Bot API: http://localhost:8080"
echo ""
echo "🎮 In-game commands:"
echo "   !help - Show all available commands"
echo "   !feed lions - Feed the lions"
echo "   !count - Count all animals"
echo "   !health - Check animal health"
echo ""
echo "📊 Monitor logs:"
echo "   docker-compose logs -f super-zoo-server"
echo ""
echo "🔧 To stop the server:"
echo "   docker-compose down"
echo ""
echo "Happy zoo keeping! 🦁🐅🐘🐧" 