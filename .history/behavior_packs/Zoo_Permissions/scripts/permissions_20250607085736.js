import { world, system, ItemStack, BlockPermutation } from '@minecraft/server';

// 4-Tier Permission System
const PERMISSION_LEVELS = {
    ADMIN: 'admin',
    MANAGER: 'manager', 
    BUILDER: 'builder',
    VISITOR: 'visitor'
};

// User permission assignments
const USER_PERMISSIONS = {
    // ADMINS - Full server control
    'YourMinecraftUsername': PERMISSION_LEVELS.ADMIN,
    'ServerOwner': PERMISSION_LEVELS.ADMIN,
    
    // MANAGERS - Zoo operations
    'ZooManager1': PERMISSION_LEVELS.MANAGER,
    'HeadKeeper': PERMISSION_LEVELS.MANAGER,
    
    // BUILDERS - Construction only
    'Architect1': PERMISSION_LEVELS.BUILDER,
    'Constructor1': PERMISSION_LEVELS.BUILDER,
    
    // Default for new users
    // All others default to VISITOR
};

// Allowed building materials for BUILDERS
const BUILDER_ALLOWED_BLOCKS = [
    'minecraft:stone',
    'minecraft:cobblestone', 
    'minecraft:stone_bricks',
    'minecraft:oak_planks',
    'minecraft:spruce_planks',
    'minecraft:birch_planks',
    'minecraft:glass',
    'minecraft:iron_bars',
    'minecraft:fence',
    'minecraft:oak_fence',
    'minecraft:spruce_fence',
    'minecraft:gate',
    'minecraft:oak_fence_gate',
    'minecraft:concrete',
    'minecraft:wool',
    'minecraft:terracotta',
    'minecraft:stairs',
    'minecraft:slab'
];

// Restricted areas (coordinates can be configured)
const RESTRICTED_AREAS = {
    'staff_only': {
        name: 'Staff Only Area',
        minX: -100, maxX: -50,
        minY: 60, maxY: 80,
        minZ: -100, maxZ: -50,
        allowedLevels: [PERMISSION_LEVELS.ADMIN, PERMISSION_LEVELS.MANAGER]
    },
    'animal_enclosures': {
        name: 'Animal Enclosures',
        minX: 0, maxX: 100,
        minY: 60, maxY: 80, 
        minZ: 0, maxZ: 100,
        allowedLevels: [PERMISSION_LEVELS.ADMIN, PERMISSION_LEVELS.MANAGER]
    },
    'construction_zone': {
        name: 'Construction Zone',
        minX: 200, maxX: 300,
        minY: 60, maxY: 80,
        minZ: 200, maxZ: 300,
        allowedLevels: [PERMISSION_LEVELS.ADMIN, PERMISSION_LEVELS.MANAGER, PERMISSION_LEVELS.BUILDER]
    }
};

// Items restricted by permission level
const RESTRICTED_ITEMS = {
    [PERMISSION_LEVELS.VISITOR]: [
        'minecraft:diamond_pickaxe', 'minecraft:iron_pickaxe', 'minecraft:stone_pickaxe',
        'minecraft:diamond_axe', 'minecraft:iron_axe', 'minecraft:stone_axe',
        'minecraft:diamond_shovel', 'minecraft:iron_shovel', 'minecraft:stone_shovel',
        'minecraft:tnt', 'minecraft:fire_charge', 'minecraft:flint_and_steel',
        'minecraft:lava_bucket', 'minecraft:water_bucket'
    ],
    [PERMISSION_LEVELS.BUILDER]: [
        'minecraft:tnt', 'minecraft:fire_charge', 'minecraft:flint_and_steel',
        'minecraft:lava_bucket', 'minecraft:command_block'
    ],
    [PERMISSION_LEVELS.MANAGER]: [
        'minecraft:command_block'
    ]
};

// Get user permission level
function getPermissionLevel(playerName) {
    return USER_PERMISSIONS[playerName] || PERMISSION_LEVELS.VISITOR;
}

// Check if user has permission level or higher
function hasPermission(playerName, requiredLevel) {
    const userLevel = getPermissionLevel(playerName);
    const levels = Object.values(PERMISSION_LEVELS);
    const userIndex = levels.indexOf(userLevel);
    const requiredIndex = levels.indexOf(requiredLevel);
    return userIndex <= requiredIndex; // Lower index = higher permission
}

// Check if player is in restricted area
function isInRestrictedArea(player) {
    const pos = player.location;
    
    for (const [areaId, area] of Object.entries(RESTRICTED_AREAS)) {
        if (pos.x >= area.minX && pos.x <= area.maxX &&
            pos.y >= area.minY && pos.y <= area.maxY &&
            pos.z >= area.minZ && pos.z <= area.maxZ) {
            
            const playerLevel = getPermissionLevel(player.name);
            if (!area.allowedLevels.includes(playerLevel)) {
                return { restricted: true, area: area.name };
            }
        }
    }
    return { restricted: false };
}

// Initialize permission system
system.runInterval(() => {
    for (const player of world.getAllPlayers()) {
        // Check restricted areas
        const areaCheck = isInRestrictedArea(player);
        if (areaCheck.restricted) {
            // Teleport player back to spawn/safe area
            player.sendMessage(`§c🚫 Access denied to ${areaCheck.area}!`);
            player.sendMessage(`§e💡 Contact staff for access permissions`);
            // You might want to teleport them to a safe location
            // player.teleport({x: 0, y: 70, z: 0});
        }
        
        // Check inventory for restricted items
        checkPlayerInventory(player);
    }
}, 40); // Check every 2 seconds

// Block placement event
world.beforeEvents.playerPlaceBlock.subscribe((event) => {
    const player = event.player;
    const block = event.block;
    const playerLevel = getPermissionLevel(player.name);
    
    // VISITORS cannot place any blocks
    if (playerLevel === PERMISSION_LEVELS.VISITOR) {
        event.cancel = true;
        player.sendMessage('§c🚫 Visitors cannot build in the zoo!');
        player.sendMessage('§e💡 Enjoy exploring our exhibits instead');
        return;
    }
    
    // BUILDERS can only place approved materials
    if (playerLevel === PERMISSION_LEVELS.BUILDER) {
        if (!BUILDER_ALLOWED_BLOCKS.includes(block.typeId)) {
            event.cancel = true;
            player.sendMessage(`§c🚫 Builders cannot place ${block.typeId}!`);
            player.sendMessage('§e💡 Stick to construction materials only');
            return;
        }
    }
    
    // Log building activity
    console.log(`🏗️ ${player.name} (${playerLevel}) placed ${block.typeId} at ${block.location.x}, ${block.location.y}, ${block.location.z}`);
});

// Block breaking event
world.beforeEvents.playerBreakBlock.subscribe((event) => {
    const player = event.player;
    const block = event.block;
    const playerLevel = getPermissionLevel(player.name);
    
    // VISITORS cannot break any blocks
    if (playerLevel === PERMISSION_LEVELS.VISITOR) {
        event.cancel = true;
        player.sendMessage('§c🚫 Visitors cannot modify zoo structures!');
        player.sendMessage('§e💡 Please respect our exhibits');
        return;
    }
    
    // BUILDERS cannot break blocks (construction only)
    if (playerLevel === PERMISSION_LEVELS.BUILDER) {
        event.cancel = true;
        player.sendMessage('§c🚫 Builders cannot remove existing structures!');
        player.sendMessage('§e💡 Contact a manager for demolition approval');
        return;
    }
    
    // Log breaking activity
    console.log(`🔨 ${player.name} (${playerLevel}) broke ${block.typeId} at ${block.location.x}, ${block.location.y}, ${block.location.z}`);
});

// Item use event
world.beforeEvents.itemUse.subscribe((event) => {
    const player = event.source;
    const item = event.itemStack;
    const playerLevel = getPermissionLevel(player.name);
    
    // Check if item is restricted for this permission level
    const restrictedItems = RESTRICTED_ITEMS[playerLevel] || [];
    if (restrictedItems.includes(item.typeId)) {
        event.cancel = true;
        player.sendMessage(`§c🚫 ${item.typeId} restricted for ${playerLevel} level!`);
        player.sendMessage('§e💡 Contact staff for tool access');
        
        // Notify higher-level staff
        notifyStaff(`§c⚠️ ${player.name} (${playerLevel}) attempted to use ${item.typeId}`, playerLevel);
    }
});

// Check player inventory for restricted items
function checkPlayerInventory(player) {
    const playerLevel = getPermissionLevel(player.name);
    const restrictedItems = RESTRICTED_ITEMS[playerLevel] || [];
    
    if (restrictedItems.length === 0) return;
    
    const inventory = player.getComponent('minecraft:inventory');
    if (!inventory) return;
    
    const container = inventory.container;
    if (!container) return;
    
    let removedItems = [];
    
    for (let i = 0; i < container.size; i++) {
        const item = container.getItem(i);
        if (!item) continue;
        
        if (restrictedItems.includes(item.typeId)) {
            container.setItem(i, undefined);
            removedItems.push(item.typeId);
        }
    }
    
    if (removedItems.length > 0) {
        player.sendMessage(`§c🚫 Restricted items removed: ${removedItems.join(', ')}`);
        player.sendMessage(`§e💡 Your permission level: ${playerLevel}`);
        
        // Notify staff
        notifyStaff(`§c📋 Removed restricted items from ${player.name} (${playerLevel}): ${removedItems.join(', ')}`, playerLevel);
    }
}

// Notify staff of security events
function notifyStaff(message, excludeLevel = null) {
    for (const player of world.getAllPlayers()) {
        const playerLevel = getPermissionLevel(player.name);
        if (playerLevel !== excludeLevel && 
            (playerLevel === PERMISSION_LEVELS.ADMIN || playerLevel === PERMISSION_LEVELS.MANAGER)) {
            player.sendMessage(message);
        }
    }
}

// Chat commands for permission management
world.beforeEvents.chatSend.subscribe((event) => {
    const player = event.sender;
    const message = event.message.toLowerCase().trim();
    
    if (!player) return;
    
    // Permission management commands (ADMIN only)
    if (message.startsWith('!perm')) {
        event.cancel = true;
        
        if (getPermissionLevel(player.name) !== PERMISSION_LEVELS.ADMIN) {
            player.sendMessage('§c🚫 Only admins can manage permissions!');
            return;
        }
        
        const args = message.split(' ');
        if (args.length < 3) {
            player.sendMessage('§e💡 Usage: !perm <set/get/list> <player> [level]');
            player.sendMessage('§e📋 Levels: admin, manager, builder, visitor');
            return;
        }
        
        const action = args[1];
        const targetPlayer = args[2];
        
        if (action === 'set') {
            const newLevel = args[3];
            if (!Object.values(PERMISSION_LEVELS).includes(newLevel)) {
                player.sendMessage('§c❌ Invalid permission level!');
                return;
            }
            
            USER_PERMISSIONS[targetPlayer] = newLevel;
            player.sendMessage(`§a✅ Set ${targetPlayer} permission to ${newLevel}`);
            notifyStaff(`§a📋 ${player.name} set ${targetPlayer} permission to ${newLevel}`);
            
        } else if (action === 'get') {
            const level = getPermissionLevel(targetPlayer);
            player.sendMessage(`§e📋 ${targetPlayer} permission level: ${level}`);
            
        } else if (action === 'list') {
            player.sendMessage('§6📋 Permission Levels:');
            for (const [username, level] of Object.entries(USER_PERMISSIONS)) {
                player.sendMessage(`§e${username}: §a${level}`);
            }
        }
    }
    
    // Check permission level command
    if (message === '!myperms' || message === '!permissions') {
        event.cancel = true;
        const level = getPermissionLevel(player.name);
        player.sendMessage(`§6🎫 Your permission level: §a${level}`);
        
        // Show what they can do
        switch(level) {
            case PERMISSION_LEVELS.ADMIN:
                player.sendMessage('§a✅ Full server access - All commands and areas');
                break;
            case PERMISSION_LEVELS.MANAGER:
                player.sendMessage('§a✅ Zoo operations - Animal care, cleaning, staff areas');
                break;
            case PERMISSION_LEVELS.BUILDER:
                player.sendMessage('§a✅ Construction - Build with approved materials only');
                player.sendMessage('§c❌ Cannot break existing structures');
                break;
            case PERMISSION_LEVELS.VISITOR:
                player.sendMessage('§a✅ Exploration - Enjoy the zoo exhibits');
                player.sendMessage('§c❌ Cannot build or modify structures');
                break;
        }
    }
});

// Initialize system
system.run(() => {
    console.log('🎫 Zoo Permission System initialized');
    console.log('📋 Permission levels: Admin, Manager, Builder, Visitor');
    
    // Welcome message for all players
    for (const player of world.getAllPlayers()) {
        const level = getPermissionLevel(player.name);
        player.sendMessage('§6🎫 Zoo Permission System Active');
        player.sendMessage(`§e📋 Your access level: §a${level}`);
        player.sendMessage('§e💡 Type !myperms to see your permissions');
    }
}); 