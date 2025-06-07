import { world, system, ItemStack } from '@minecraft/server';

// Authorized users who can use TNT (sync with AI bot config)
const AUTHORIZED_USERS = [
    'YourMinecraftUsername',
    'AdminUser1', 
    'AdminUser2'
    // Add more usernames as needed
];

// TNT-related items and blocks to restrict
const RESTRICTED_ITEMS = [
    'minecraft:tnt',
    'minecraft:tnt_minecart',
    'minecraft:fire_charge',
    'minecraft:flint_and_steel'
];

// Initialize the security system
system.runInterval(() => {
    // Check all players for restricted items
    for (const player of world.getAllPlayers()) {
        checkPlayerInventory(player);
    }
}, 20); // Check every second (20 ticks)

// Event: Block placement prevention
world.beforeEvents.itemUse.subscribe((event) => {
    const player = event.source;
    const item = event.itemStack;
    
    if (!player || !item) return;
    
    // Check if player is trying to use restricted items
    if (RESTRICTED_ITEMS.includes(item.typeId)) {
        if (!isAuthorized(player.name)) {
            event.cancel = true;
            player.sendMessage('§c🚫 TNT/Explosives restricted to zoo staff only!');
            player.sendMessage('§e💡 Contact an admin for explosive permissions');
            
            // Log the attempt
            console.log(`🚫 TNT Security: ${player.name} attempted to use ${item.typeId}`);
            
            // Notify all authorized users
            notifyStaff(`§c⚠️ ${player.name} attempted to use explosives!`);
        }
    }
});

// Event: Block placement prevention
world.beforeEvents.playerPlaceBlock.subscribe((event) => {
    const player = event.player;
    const block = event.block;
    
    if (!player) return;
    
    // Check if player is trying to place TNT
    if (block.typeId === 'minecraft:tnt') {
        if (!isAuthorized(player.name)) {
            event.cancel = true;
            player.sendMessage('§c🚫 TNT placement restricted to zoo staff only!');
            player.sendMessage('§e💡 Contact an admin for explosive permissions');
            
            // Log the attempt
            console.log(`🚫 TNT Security: ${player.name} attempted to place TNT`);
            
            // Notify all authorized users
            notifyStaff(`§c⚠️ ${player.name} attempted to place TNT!`);
        }
    }
});

// Event: Prevent TNT from being given via commands (if not authorized)
world.beforeEvents.chatSend.subscribe((event) => {
    const player = event.sender;
    const message = event.message.toLowerCase();
    
    if (!player) return;
    
    // Check for give commands with TNT
    if (message.includes('/give') && 
        (message.includes('tnt') || message.includes('fire_charge') || message.includes('flint_and_steel'))) {
        
        if (!isAuthorized(player.name)) {
            event.cancel = true;
            player.sendMessage('§c🚫 Cannot give explosive items - restricted to zoo staff!');
            
            // Log the attempt
            console.log(`🚫 TNT Security: ${player.name} attempted give command: ${message}`);
            
            // Notify all authorized users
            notifyStaff(`§c⚠️ ${player.name} attempted explosive give command!`);
        }
    }
});

// Function to check if a player is authorized
function isAuthorized(playerName) {
    return AUTHORIZED_USERS.includes(playerName);
}

// Function to check player inventory and remove unauthorized items
function checkPlayerInventory(player) {
    if (isAuthorized(player.name)) return; // Skip authorized users
    
    const inventory = player.getComponent('minecraft:inventory');
    if (!inventory) return;
    
    const container = inventory.container;
    if (!container) return;
    
    let removedItems = [];
    
    // Check each inventory slot
    for (let i = 0; i < container.size; i++) {
        const item = container.getItem(i);
        if (!item) continue;
        
        if (RESTRICTED_ITEMS.includes(item.typeId)) {
            // Remove the restricted item
            container.setItem(i, undefined);
            removedItems.push(item.typeId);
            
            // Log the removal
            console.log(`🚫 TNT Security: Removed ${item.typeId} from ${player.name}'s inventory`);
        }
    }
    
    // Notify player if items were removed
    if (removedItems.length > 0) {
        player.sendMessage('§c🚫 Explosive items removed from inventory!');
        player.sendMessage('§e💡 Only zoo staff can carry explosives');
        
        // Notify staff
        notifyStaff(`§c⚠️ Removed explosives from ${player.name}: ${removedItems.join(', ')}`);
    }
}

// Function to notify all authorized staff members
function notifyStaff(message) {
    for (const player of world.getAllPlayers()) {
        if (isAuthorized(player.name)) {
            player.sendMessage(message);
        }
    }
}

// Chat command to add/remove authorized users (only for existing authorized users)
world.beforeEvents.chatSend.subscribe((event) => {
    const player = event.sender;
    const message = event.message.toLowerCase().trim();
    
    if (!player) return;
    
    if (message.startsWith('!tnt-auth')) {
        event.cancel = true;
        
        if (!isAuthorized(player.name)) {
            player.sendMessage('§c🚫 Only authorized staff can manage TNT permissions!');
            return;
        }
        
        const args = message.split(' ');
        if (args.length < 3) {
            player.sendMessage('§e💡 Usage: !tnt-auth <add/remove> <playername>');
            return;
        }
        
        const action = args[1];
        const targetPlayer = args[2];
        
        if (action === 'add') {
            if (!AUTHORIZED_USERS.includes(targetPlayer)) {
                AUTHORIZED_USERS.push(targetPlayer);
                player.sendMessage(`§a✅ Added ${targetPlayer} to TNT authorized users`);
                notifyStaff(`§a📋 ${player.name} authorized ${targetPlayer} for TNT usage`);
            } else {
                player.sendMessage(`§e⚠️ ${targetPlayer} is already authorized`);
            }
        } else if (action === 'remove') {
            const index = AUTHORIZED_USERS.indexOf(targetPlayer);
            if (index > -1) {
                AUTHORIZED_USERS.splice(index, 1);
                player.sendMessage(`§c❌ Removed ${targetPlayer} from TNT authorized users`);
                notifyStaff(`§c📋 ${player.name} removed TNT authorization from ${targetPlayer}`);
            } else {
                player.sendMessage(`§e⚠️ ${targetPlayer} is not in authorized list`);
            }
        } else {
            player.sendMessage('§c❌ Invalid action. Use "add" or "remove"');
        }
    }
    
    if (message === '!tnt-list') {
        event.cancel = true;
        
        if (!isAuthorized(player.name)) {
            player.sendMessage('§c🚫 Only authorized staff can view TNT permissions!');
            return;
        }
        
        player.sendMessage('§6🧨 TNT Authorized Users:');
        AUTHORIZED_USERS.forEach(user => {
            player.sendMessage(`§e- ${user}`);
        });
    }
});

// Initialize message
system.run(() => {
    console.log('🛡️ TNT Security System initialized');
    console.log(`🔐 Authorized TNT users: ${AUTHORIZED_USERS.join(', ')}`);
    
    // Notify all players that TNT security is active
    for (const player of world.getAllPlayers()) {
        player.sendMessage('§6🛡️ TNT Security System Active');
        player.sendMessage('§e💡 Explosives restricted to authorized zoo staff');
    }
}); 