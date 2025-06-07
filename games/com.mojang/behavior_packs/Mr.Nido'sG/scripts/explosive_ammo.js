import { world, system, BlockPermutation, Dimension, GameMode } from "@minecraft/server";

world.beforeEvents.worldInitialize.subscribe((data) => {
    data.blockComponentRegistry.registerCustomComponent('gunsaddon:explosive_ammo_box0', {
        onPlayerInteract: eventData => {
			const block = eventData.block;
			const player = eventData.player;
			const playerEquippable = player.getComponent("equippable");
			const itemUsed = playerEquippable.getEquipment("Mainhand");
			if (itemUsed.typeId == 'gunsaddon:m16') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box1"));
				m16(player);
			}
			if (itemUsed.typeId == 'gunsaddon:benelli_m4') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box1"));
				benelli_m4(player);
			}
			if (itemUsed.typeId == 'gunsaddon:barret_m82a1') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box1"));
				barret_m82a1(player);
			}
			if (itemUsed.typeId == 'gunsaddon:m249') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box1"));
				m249(player);
			}
			if (itemUsed.typeId == 'gunsaddon:m4a1') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box1"));
				m4a1(player);
			}
			if (itemUsed.typeId == 'gunsaddon:remington_870') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box1"));
				remington_870(player);
			}
        }
    });
    data.blockComponentRegistry.registerCustomComponent('gunsaddon:explosive_ammo_box1', {
        onPlayerInteract: eventData => {
			const block = eventData.block;
			const player = eventData.player;
			const playerEquippable = player.getComponent("equippable");
			const itemUsed = playerEquippable.getEquipment("Mainhand");
			if (itemUsed.typeId == 'gunsaddon:m16') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box2"));
				m16(player);
			}
			if (itemUsed.typeId == 'gunsaddon:benelli_m4') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box2"));
				benelli_m4(player);
			}
			if (itemUsed.typeId == 'gunsaddon:barret_m82a1') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box2"));
				barret_m82a1(player);
			}
			if (itemUsed.typeId == 'gunsaddon:m249') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box2"));
				m249(player);
			}
			if (itemUsed.typeId == 'gunsaddon:m4a1') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box2"));
				m4a1(player);
			}
			if (itemUsed.typeId == 'gunsaddon:remington_870') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box2"));
				remington_870(player);
			}
        }
    });
    data.blockComponentRegistry.registerCustomComponent('gunsaddon:explosive_ammo_box2', {
        onPlayerInteract: eventData => {
			const block = eventData.block;
			const player = eventData.player;
			const playerEquippable = player.getComponent("equippable");
			const itemUsed = playerEquippable.getEquipment("Mainhand");
			if (itemUsed.typeId == 'gunsaddon:m16') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box3"));
				m16(player);
			}
			if (itemUsed.typeId == 'gunsaddon:benelli_m4') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box3"));
				benelli_m4(player);
			}
			if (itemUsed.typeId == 'gunsaddon:barret_m82a1') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box3"));
				barret_m82a1(player);
			}
			if (itemUsed.typeId == 'gunsaddon:m249') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box3"));
				m249(player);
			}
			if (itemUsed.typeId == 'gunsaddon:m4a1') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box3"));
				m4a1(player);
			}
			if (itemUsed.typeId == 'gunsaddon:remington_870') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box3"));
				remington_870(player);
			}
        }
    });
    data.blockComponentRegistry.registerCustomComponent('gunsaddon:explosive_ammo_box3', {
        onPlayerInteract: eventData => {
			const block = eventData.block;
			const player = eventData.player;
			const playerEquippable = player.getComponent("equippable");
			const itemUsed = playerEquippable.getEquipment("Mainhand");
			if (itemUsed.typeId == 'gunsaddon:m16') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box4"));
				m16(player);
			}
			if (itemUsed.typeId == 'gunsaddon:benelli_m4') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box4"));
				benelli_m4(player);
			}
			if (itemUsed.typeId == 'gunsaddon:barret_m82a1') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box4"));
				barret_m82a1(player);
			}
			if (itemUsed.typeId == 'gunsaddon:m249') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box4"));
				m249(player);
			}
			if (itemUsed.typeId == 'gunsaddon:m4a1') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box4"));
				m4a1(player);
			}
			if (itemUsed.typeId == 'gunsaddon:remington_870') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box4"));
				remington_870(player);
			}
        }
    });
    data.blockComponentRegistry.registerCustomComponent('gunsaddon:explosive_ammo_box4', {
        onPlayerInteract: eventData => {
			const block = eventData.block;
			const player = eventData.player;
			const playerEquippable = player.getComponent("equippable");
			const itemUsed = playerEquippable.getEquipment("Mainhand");
			if (itemUsed.typeId == 'gunsaddon:m16') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box5"));
				m16(player);
			}
			if (itemUsed.typeId == 'gunsaddon:benelli_m4') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box5"));
				benelli_m4(player);
			}
			if (itemUsed.typeId == 'gunsaddon:barret_m82a1') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box5"));
				barret_m82a1(player);
			}
			if (itemUsed.typeId == 'gunsaddon:m249') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box5"));
				m249(player);
			}
			if (itemUsed.typeId == 'gunsaddon:m4a1') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box5"));
				m4a1(player);
			}
			if (itemUsed.typeId == 'gunsaddon:remington_870') {
				block.setPermutation(BlockPermutation.resolve("gunsaddon:explosive_ammo_box5"));
				remington_870(player);
			}
        }
    });
    data.blockComponentRegistry.registerCustomComponent('gunsaddon:explosive_ammo_box5', {
        onPlayerInteract: eventData => {
			const block = eventData.block;
			const player = eventData.player;
			const playerEquippable = player.getComponent("equippable");
			const itemUsed = playerEquippable.getEquipment("Mainhand");
			if (itemUsed.typeId == 'gunsaddon:m16') {
				block.setPermutation(BlockPermutation.resolve("minecraft:air"));
				m16(player);
			}
			if (itemUsed.typeId == 'gunsaddon:benelli_m4') {
				block.setPermutation(BlockPermutation.resolve("minecraft:air"));
				benelli_m4(player);
			}
			if (itemUsed.typeId == 'gunsaddon:barret_m82a1') {
				block.setPermutation(BlockPermutation.resolve("minecraft:air"));
				barret_m82a1(player);
			}
			if (itemUsed.typeId == 'gunsaddon:m249') {
				block.setPermutation(BlockPermutation.resolve("minecraft:air"));
				m249(player);
			}
			if (itemUsed.typeId == 'gunsaddon:m4a1') {
				block.setPermutation(BlockPermutation.resolve("minecraft:air"));
				m4a1(player);
			}
			if (itemUsed.typeId == 'gunsaddon:remington_870') {
				block.setPermutation(BlockPermutation.resolve("minecraft:air"));
				remington_870(player);
			}
        }
    });
});
function m16(player) {
   player.runCommand('/playsound gun.weapon_deploy @s');
   player.runCommand('/scoreboard players set @s m16_explosive 1');
   player.runCommand('/scoreboard players set @s m16_fire 0');
   player.runCommand('/scoreboard players set @s m16 50');
}
function benelli_m4(player) {
   player.runCommand('/playsound gun.weapon_deploy @s');
   player.runCommand('/scoreboard players set @s benelli_m4_explosive 1');
   player.runCommand('/scoreboard players set @s benelli_m4_fire 0');
   player.runCommand('/scoreboard players set @s benelli_m4 10');
}
function barret_m82a1(player) {
   player.runCommand('/playsound gun.weapon_deploy @s');
   player.runCommand('/scoreboard players set @s barret_m82a1_explosive 1');
   player.runCommand('/scoreboard players set @s barret_m82a1_fire 0');
   player.runCommand('/scoreboard players set @s barret_m82a1 10');
}
function m249(player) {
   player.runCommand('/playsound gun.weapon_deploy @s');
   player.runCommand('/scoreboard players set @s m249_explosive 1');
   player.runCommand('/scoreboard players set @s m249_fire 0');
   player.runCommand('/scoreboard players set @s m249 100');
}
function m4a1(player) {
   player.runCommand('/playsound gun.weapon_deploy @s');
   player.runCommand('/scoreboard players set @s m4a1_explosive 1');
   player.runCommand('/scoreboard players set @s m4a1_fire 0');
   player.runCommand('/scoreboard players set @s m4a1 30');
}
function remington_870(player) {
   player.runCommand('/playsound gun.weapon_deploy @s');
   player.runCommand('/scoreboard players set @s remington_870_explosive 1');
   player.runCommand('/scoreboard players set @s remington_870_fire 0');
   player.runCommand('/scoreboard players set @s remington_870 8');
}