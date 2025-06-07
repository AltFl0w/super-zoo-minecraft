import { world, system, ItemStack, EquipmentSlot, TicksPerSecond } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

world.beforeEvents.worldInitialize.subscribe((data) => {
    data.blockComponentRegistry.registerCustomComponent('gunsaddon:weapons_bench', {
        onPlayerInteract: eventData => {
			const player = eventData.player;
			const playerEquippable = player.getComponent("equippable");
			const itemUsed = playerEquippable.getEquipment("Mainhand");
			weapons_bench(player);
        }
    });
});
function weapons_bench(player) {
    const gui = new ActionFormData();
    gui.title('gunsaddon.weapons_bench')
    gui.button('item.gunsaddon:glock_17', 'textures/items/glock_17')
	gui.button('item.gunsaddon:desert_eagle', 'textures/items/desert_eagle')
	gui.button('item.gunsaddon:micro_uzi', 'textures/items/micro_uzi')
	gui.button('item.gunsaddon:skorpion_vz61', 'textures/items/skorpion_vz61')
	gui.button('item.gunsaddon:remington_870', 'textures/items/remington_870')
	gui.button('item.gunsaddon:benelli_m4', 'textures/items/benelli_m4')
	gui.button('item.gunsaddon:barret_m82a1', 'textures/items/barret_m82a1')
	gui.button('item.gunsaddon:m202', 'textures/items/m202')
	gui.button('item.gunsaddon:m249', 'textures/items/m249')
	gui.button('item.gunsaddon:m32', 'textures/items/m32')
	gui.button('item.gunsaddon:m4a1', 'textures/items/m4a1')
	gui.button('item.gunsaddon:m16', 'textures/items/m16')
    gui.show(player).then(result => {
        if (result.selection === 0) { glock_17(player) }
		if (result.selection === 1) { desert_eagle(player) }
		if (result.selection === 2) { micro_uzi(player) }
		if (result.selection === 3) { skorpion_vz61(player) }
		if (result.selection === 4) { remington_870(player) }
		if (result.selection === 5) { benelli_m4(player) }
		if (result.selection === 6) { barret_m82a1(player) }
		if (result.selection === 7) { m202(player) }
		if (result.selection === 8) { m249(player) }
		if (result.selection === 9) { m32(player) }
		if (result.selection === 10) { m4a1(player) }
		if (result.selection === 11) { m16(player) }
    })
}
function m4a1(player) {
    const gui = new ActionFormData();
	gui.title('gunsaddon.FabricGun')
    gui.button('gunsaddon.fabricar', 'textures/items/m4a1')
	gui.button('', 'textures/entity/invisible')
	gui.button('24', 'textures/items/iron_ingot')
	gui.button('12', 'textures/items/gold_ingot')
	gui.button('10', 'textures/items/coal')
	gui.button('', 'textures/entity/invisible')
    gui.show(player).then(result => {
        if (result.selection == 0 || result.selection == 1 || result.selection == 2 || result.selection == 3 || result.selection == 4 || result.selection == 5) {
            player.runCommand('/execute at @s[hasitem={item=minecraft:coal,quantity=10..}] at @s[hasitem={item=minecraft:gold_ingot,quantity=12..}] at @s[hasitem={item=minecraft:iron_ingot,quantity=24..}] run function weapons_bench/m4a1');
        }
    })
}
function m16(player) {
    const gui = new ActionFormData();
	gui.title('gunsaddon.FabricGun')
    gui.button('gunsaddon.fabricar', 'textures/items/m16')
	gui.button('', 'textures/entity/invisible')
	gui.button('24', 'textures/items/iron_ingot')
	gui.button('12', 'textures/items/gold_ingot')
	gui.button('10', 'textures/items/coal')
	gui.button('', 'textures/entity/invisible')
    gui.show(player).then(result => {
        if (result.selection == 0 || result.selection == 1 || result.selection == 2 || result.selection == 3 || result.selection == 4 || result.selection == 5) {
            player.runCommand('/execute at @s[hasitem={item=minecraft:coal,quantity=10..}] at @s[hasitem={item=minecraft:gold_ingot,quantity=12..}] at @s[hasitem={item=minecraft:iron_ingot,quantity=24..}] run function weapons_bench/m16');
        }
    })
}
function m32(player) {
    const gui = new ActionFormData();
	gui.title('gunsaddon.FabricGun')
    gui.button('gunsaddon.fabricar', 'textures/items/m32')
	gui.button('', 'textures/entity/invisible')
	gui.button('16', 'textures/items/iron_ingot')
	gui.button('12', 'textures/items/gold_ingot')
	gui.button('8', 'textures/items/coal')
	gui.button('', 'textures/entity/invisible')
    gui.show(player).then(result => {
        if (result.selection == 0 || result.selection == 1 || result.selection == 2 || result.selection == 3 || result.selection == 4 || result.selection == 5) {
            player.runCommand('/execute at @s[hasitem={item=minecraft:coal,quantity=8..}] at @s[hasitem={item=minecraft:gold_ingot,quantity=12..}] at @s[hasitem={item=minecraft:iron_ingot,quantity=16..}] run function weapons_bench/m32');
        }
    })
}
function m249(player) {
    const gui = new ActionFormData();
	gui.title('gunsaddon.FabricGun')
    gui.button('gunsaddon.fabricar', 'textures/items/m202')
	gui.button('', 'textures/entity/invisible')
	gui.button('24', 'textures/items/iron_ingot')
	gui.button('12', 'textures/items/gold_ingot')
	gui.button('8', 'textures/items/coal')
	gui.button('', 'textures/entity/invisible')
    gui.show(player).then(result => {
        if (result.selection == 0 || result.selection == 1 || result.selection == 2 || result.selection == 3 || result.selection == 4 || result.selection == 5) {
            player.runCommand('/execute at @s[hasitem={item=minecraft:coal,quantity=8..}] at @s[hasitem={item=minecraft:gold_ingot,quantity=12..}] at @s[hasitem={item=minecraft:iron_ingot,quantity=24..}] run function weapons_bench/m249');
        }
    })
}
function m202(player) {
    const gui = new ActionFormData();
	gui.title('gunsaddon.FabricGun')
    gui.button('gunsaddon.fabricar', 'textures/items/m202')
	gui.button('', 'textures/entity/invisible')
	gui.button('30', 'textures/items/iron_ingot')
	gui.button('8', 'textures/items/gold_ingot')
	gui.button('12', 'textures/items/redstone_dust')
	gui.button('', 'textures/entity/invisible')
    gui.show(player).then(result => {
        if (result.selection == 0 || result.selection == 1 || result.selection == 2 || result.selection == 3 || result.selection == 4 || result.selection == 5) {
            player.runCommand('/execute at @s[hasitem={item=minecraft:redstone,quantity=12..}] at @s[hasitem={item=minecraft:gold_ingot,quantity=8..}] at @s[hasitem={item=minecraft:iron_ingot,quantity=30..}] run function weapons_bench/m202');
        }
    })
}
function barret_m82a1(player) {
    const gui = new ActionFormData();
	gui.title('gunsaddon.FabricGun')
    gui.button('gunsaddon.fabricar', 'textures/items/barret_m82a1')
	gui.button('', 'textures/entity/invisible')
	gui.button('16', 'textures/items/iron_ingot')
	gui.button('12', 'textures/items/gold_ingot')
	gui.button('8', 'textures/items/coal')
	gui.button('', 'textures/entity/invisible')
    gui.show(player).then(result => {
        if (result.selection == 0 || result.selection == 1 || result.selection == 2 || result.selection == 3 || result.selection == 4 || result.selection == 5) {
            player.runCommand('/execute at @s[hasitem={item=minecraft:coal,quantity=8..}] at @s[hasitem={item=minecraft:gold_ingot,quantity=12..}] at @s[hasitem={item=minecraft:iron_ingot,quantity=16..}] run function weapons_bench/barret_m82a1');
        }
    })
}
function benelli_m4(player) {
    const gui = new ActionFormData();
	gui.title('gunsaddon.FabricGun')
    gui.button('gunsaddon.fabricar', 'textures/items/benelli_m4')
	gui.button('', 'textures/entity/invisible')
	gui.button('16', 'textures/items/iron_ingot')
	gui.button('8', 'textures/items/gold_ingot')
	gui.button('4', 'textures/items/coal')
	gui.button('', 'textures/entity/invisible')
    gui.show(player).then(result => {
        if (result.selection == 0 || result.selection == 1 || result.selection == 2 || result.selection == 3 || result.selection == 4 || result.selection == 5) {
            player.runCommand('/execute at @s[hasitem={item=minecraft:coal,quantity=4..}] at @s[hasitem={item=minecraft:gold_ingot,quantity=8..}] at @s[hasitem={item=minecraft:iron_ingot,quantity=16..}] run function weapons_bench/benelli_m4');
        }
    })
}
function remington_870(player) {
    const gui = new ActionFormData();
	gui.title('gunsaddon.FabricGun')
    gui.button('gunsaddon.fabricar', 'textures/items/remington_870')
	gui.button('4', 'textures/items/copper_ingot')
	gui.button('12', 'textures/items/iron_ingot')
	gui.button('8', 'textures/items/gold_ingot')
	gui.button('4', 'textures/items/coal')
	gui.button('', 'textures/entity/invisible')
    gui.show(player).then(result => {
        if (result.selection == 0 || result.selection == 1 || result.selection == 2 || result.selection == 3 || result.selection == 4 || result.selection == 5) {
            player.runCommand('/execute at @s[hasitem={item=minecraft:copper_ingot,quantity=4..}] at @s[hasitem={item=minecraft:coal,quantity=4..}] at @s[hasitem={item=minecraft:gold_ingot,quantity=4..}] at @s[hasitem={item=minecraft:iron_ingot,quantity=12..}] run function weapons_bench/remington_870');
        }
    })
}
function skorpion_vz61(player) {
    const gui = new ActionFormData();
	gui.title('gunsaddon.FabricGun')
    gui.button('gunsaddon.fabricar', 'textures/items/skorpion_vz61')
	gui.button('', 'textures/entity/invisible')
	gui.button('12', 'textures/items/iron_ingot')
	gui.button('4', 'textures/items/gold_ingot')
	gui.button('4', 'textures/items/coal')
	gui.button('', 'textures/entity/invisible')
    gui.show(player).then(result => {
        if (result.selection == 0 || result.selection == 1 || result.selection == 2 || result.selection == 3 || result.selection == 4 || result.selection == 5) {
            player.runCommand('/execute at @s[hasitem={item=minecraft:coal,quantity=4..}] at @s[hasitem={item=minecraft:gold_ingot,quantity=4..}] at @s[hasitem={item=minecraft:iron_ingot,quantity=12..}] run function weapons_bench/skorpion_vz61');
        }
    })
}
function micro_uzi(player) {
    const gui = new ActionFormData();
	gui.title('gunsaddon.FabricGun')
    gui.button('gunsaddon.fabricar', 'textures/items/micro_uzi')
	gui.button('', 'textures/entity/invisible')
	gui.button('16', 'textures/items/iron_ingot')
	gui.button('4', 'textures/items/gold_ingot')
	gui.button('4', 'textures/items/coal')
	gui.button('', 'textures/entity/invisible')
    gui.show(player).then(result => {
        if (result.selection == 0 || result.selection == 1 || result.selection == 2 || result.selection == 3 || result.selection == 4 || result.selection == 5) {
            player.runCommand('/execute at @s[hasitem={item=minecraft:coal,quantity=4..}] at @s[hasitem={item=minecraft:gold_ingot,quantity=4..}] at @s[hasitem={item=minecraft:iron_ingot,quantity=16..}] run function weapons_bench/micro_uzi');
        }
    })
}
function desert_eagle(player) {
    const gui = new ActionFormData();
	gui.title('gunsaddon.FabricGun')
    gui.button('gunsaddon.fabricar', 'textures/items/desert_eagle')
	gui.button('', 'textures/entity/invisible')
	gui.button('12', 'textures/items/iron_ingot')
	gui.button('6', 'textures/items/gold_ingot')
	gui.button('4', 'textures/items/coal')
	gui.button('', 'textures/entity/invisible')
    gui.show(player).then(result => {
        if (result.selection == 0 || result.selection == 1 || result.selection == 2 || result.selection == 3 || result.selection == 4 || result.selection == 5) {
            player.runCommand('/execute at @s[hasitem={item=minecraft:coal,quantity=4..}] at @s[hasitem={item=minecraft:gold_ingot,quantity=6..}] at @s[hasitem={item=minecraft:iron_ingot,quantity=12..}] run function weapons_bench/desert_eagle');
        }
    })
}
function glock_17(player) {
    const gui = new ActionFormData();
	gui.title('gunsaddon.FabricGun')
    gui.button('gunsaddon.fabricar', 'textures/items/glock_17')
	gui.button('', 'textures/entity/invisible')
	gui.button('6', 'textures/items/iron_ingot')
	gui.button('12', 'textures/items/copper_ingot')
	gui.button('4', 'textures/items/coal')
	gui.button('', 'textures/entity/invisible')
    gui.show(player).then(result => {
        if (result.selection == 0 || result.selection == 1 || result.selection == 2 || result.selection == 3 || result.selection == 4 || result.selection == 5) {
            player.runCommand('/execute at @s[hasitem={item=minecraft:coal,quantity=4..}] at @s[hasitem={item=minecraft:iron_ingot,quantity=6..}] at @s[hasitem={item=minecraft:copper_ingot,quantity=12..}] run function weapons_bench/glock_17');
        }
    })
}