#!/bin/bash

# Super Zoo Server Startup Script
echo "🦁 Starting Super Zoo Server..."

# Set up environment
export LD_LIBRARY_PATH=.

# Create log directory if it doesn't exist
mkdir -p logs

# Function to handle graceful shutdown
cleanup() {
    echo "🛑 Shutting down Super Zoo Server..."
    if [ ! -z "$AI_PID" ]; then
        kill $AI_PID 2>/dev/null
    fi
    if [ ! -z "$SERVER_PID" ]; then
        kill $SERVER_PID 2>/dev/null
    fi
    exit 0
}

# Set up signal handlers
trap cleanup SIGTERM SIGINT

# Check if bedrock_server exists and is executable
if [ ! -f "./bedrock_server" ]; then
    echo "❌ Error: bedrock_server not found!"
    exit 1
fi

if [ ! -x "./bedrock_server" ]; then
    echo "❌ Error: bedrock_server is not executable!"
    chmod +x ./bedrock_server
fi

# Accept EULA automatically
echo "eula=true" > eula.txt

# Start AI Bot in background (with error handling)
echo "🤖 Starting Zoo AI Caretaker..."
if [ -d "/home/minecraft/zoo-ai-bot" ] && [ -f "/home/minecraft/zoo-ai-bot/zoo-caretaker.js" ]; then
    cd /home/minecraft/zoo-ai-bot
    node zoo-caretaker.js > ../logs/ai-bot.log 2>&1 &
    AI_PID=$!
    echo "AI Bot started with PID: $AI_PID"
else
    echo "⚠️ AI Bot files not found, skipping AI bot startup"
    AI_PID=""
fi

# Wait a moment for AI bot to initialize
sleep 3

# Start Minecraft Bedrock Server
echo "🎮 Starting Minecraft Bedrock Server..."
cd /home/minecraft

# Test if the server can start (run a quick test)
echo "🔍 Testing server executable..."
timeout 10s ./bedrock_server --help > /dev/null 2>&1
if [ $? -eq 124 ]; then
    echo "✅ Server executable appears to be working"
elif [ $? -ne 0 ]; then
    echo "⚠️ Server executable test failed, but continuing anyway..."
fi

# Start the server with better error handling
echo "🚀 Launching Bedrock server..."
./bedrock_server > logs/server.log 2>&1 &
SERVER_PID=$!
echo "Minecraft server started with PID: $SERVER_PID"

# Wait a moment to see if server starts successfully
sleep 5

# Check if server is still running
if ! kill -0 $SERVER_PID 2>/dev/null; then
    echo "❌ Server failed to start! Check logs/server.log for details"
    if [ -f "logs/server.log" ]; then
        echo "📋 Last few lines of server log:"
        tail -10 logs/server.log
    fi
    exit 1
fi

# Monitor both processes
echo "✅ Super Zoo Server is running!"
echo "🌐 Server accessible on port 19132"
echo "🤖 AI Bot websocket on port 8080"
echo "📋 Logs available in /logs directory"
echo ""
echo "🎮 For your kids to join:"
echo "   1. Open Minecraft Bedrock Edition"
echo "   2. Go to 'Play' > 'Servers' > 'Add Server'"
echo "   3. Enter Server Address: $(hostname -I | awk '{print $1}'):19132"
echo "   4. Or use 'localhost:19132' if playing on the same computer"
echo ""

# Keep the script running and monitor child processes
while true; do
    # Check if AI bot is still running (only if it was started)
    if [ ! -z "$AI_PID" ] && ! kill -0 $AI_PID 2>/dev/null; then
        echo "⚠️ AI Bot crashed, restarting..."
        cd /home/minecraft/zoo-ai-bot
        node zoo-caretaker.js > ../logs/ai-bot.log 2>&1 &
        AI_PID=$!
        echo "AI Bot restarted with PID: $AI_PID"
    fi
    
    # Check if Minecraft server is still running
    if ! kill -0 $SERVER_PID 2>/dev/null; then
        echo "⚠️ Minecraft server crashed, checking logs..."
        if [ -f "logs/server.log" ]; then
            echo "📋 Last few lines of server log:"
            tail -5 logs/server.log
        fi
        echo "🔄 Restarting server..."
        cd /home/minecraft
        ./bedrock_server > logs/server.log 2>&1 &
        SERVER_PID=$!
        echo "Minecraft server restarted with PID: $SERVER_PID"
    fi
    
    sleep 30
done 