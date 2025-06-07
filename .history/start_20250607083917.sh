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

# Start AI Bot in background
echo "🤖 Starting Zoo AI Caretaker..."
cd /home/minecraft/zoo-ai-bot
node zoo-caretaker.js > ../logs/ai-bot.log 2>&1 &
AI_PID=$!
echo "AI Bot started with PID: $AI_PID"

# Wait a moment for AI bot to initialize
sleep 3

# Start Minecraft Bedrock Server
echo "🎮 Starting Minecraft Bedrock Server..."
cd /home/minecraft

# Accept EULA automatically
echo "eula=true" > eula.txt

# Start the server
./bedrock_server > logs/server.log 2>&1 &
SERVER_PID=$!
echo "Minecraft server started with PID: $SERVER_PID"

# Monitor both processes
echo "✅ Super Zoo Server is running!"
echo "🌐 Server accessible on port 19132"
echo "🤖 AI Bot websocket on port 8080"
echo "📋 Logs available in /logs directory"

# Keep the script running and monitor child processes
while true; do
    # Check if AI bot is still running
    if ! kill -0 $AI_PID 2>/dev/null; then
        echo "⚠️ AI Bot crashed, restarting..."
        cd /home/minecraft/zoo-ai-bot
        node zoo-caretaker.js > ../logs/ai-bot.log 2>&1 &
        AI_PID=$!
        echo "AI Bot restarted with PID: $AI_PID"
    fi
    
    # Check if Minecraft server is still running
    if ! kill -0 $SERVER_PID 2>/dev/null; then
        echo "⚠️ Minecraft server crashed, restarting..."
        cd /home/minecraft
        ./bedrock_server > logs/server.log 2>&1 &
        SERVER_PID=$!
        echo "Minecraft server restarted with PID: $SERVER_PID"
    fi
    
    sleep 30
done 