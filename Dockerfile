# Minecraft Bedrock Server with AI Bot for Super Zoo
FROM ubuntu:22.04

# Prevent interactive prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

# Install dependencies including libraries needed for Bedrock server
RUN apt-get update && apt-get install -y \
    wget \
    unzip \
    curl \
    nodejs \
    npm \
    ca-certificates \
    dnsutils \
    libc6 \
    libstdc++6 \
    libssl3 \
    libcurl4 \
    zlib1g \
    && rm -rf /var/lib/apt/lists/*

# Create minecraft user
RUN useradd -m -s /bin/bash minecraft
WORKDIR /home/minecraft

# Download Bedrock Server (latest stable version - 1.21.83.1)
# Using multiple fallback methods to handle DNS resolution issues
RUN (curl -L --retry 3 --retry-delay 2 \
    -H "User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36" \
    -o bedrock-server.zip \
    "https://www.minecraft.net/bedrockdedicatedserver/bin-linux/bedrock-server-1.21.83.1.zip" \
    || wget --retry-connrefused --waitretry=2 --timeout=30 \
    --user-agent="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36" \
    -O bedrock-server.zip \
    "https://www.minecraft.net/bedrockdedicatedserver/bin-linux/bedrock-server-1.21.83.1.zip" \
    || curl -L --retry 3 --retry-delay 2 \
    -H "User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36" \
    -o bedrock-server.zip \
    "https://minecraft.azureedge.net/bin-linux/bedrock-server-1.21.83.1.zip") \
    && unzip bedrock-server.zip \
    && rm bedrock-server.zip \
    && chmod +x bedrock_server \
    && chown -R minecraft:minecraft /home/minecraft

# Create necessary directories
RUN mkdir -p worlds behavior_packs resource_packs zoo-ai-bot logs backups

# Copy the Super Zoo world
COPY worlds/Super_Zoo/ ./worlds/Super_Zoo/

# Set up AI Bot
WORKDIR /home/minecraft/zoo-ai-bot
COPY zoo-ai-bot/package*.json ./
RUN npm install
COPY zoo-ai-bot/ ./
RUN chown -R minecraft:minecraft /home/minecraft/zoo-ai-bot

# Back to main directory
WORKDIR /home/minecraft

# Copy server configuration files
COPY server.properties ./server.properties
COPY permissions.json ./permissions.json
COPY allowlist.json ./allowlist.json
COPY start.sh ./start.sh

# Make start script executable
RUN chmod +x start.sh

# Set ownership
RUN chown -R minecraft:minecraft /home/minecraft

# Switch to minecraft user
USER minecraft

# Expose ports
EXPOSE 19132/udp 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

# Start the server
CMD ["./start.sh"] 