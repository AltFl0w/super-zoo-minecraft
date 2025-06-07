import { world, system, ItemStack, EquipmentSlot, TicksPerSecond } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

world.beforeEvents.worldInitialize.subscribe((data) => {
    data.blockComponentRegistry.registerCustomComponent('gunsaddon:bullets_box', {
        onPlayerInteract: eventData => {
			const player = eventData.player;
			const playerEquippable = player.getComponent("equippable");
			const itemUsed = playerEquippable.getEquipment("Mainhand");
			bullets_box(player);
        }
    });
});
function bullets_box(player) {
	player.runCommand(`/scoreboard objectives add ammo_s dummy`);
    let form = new ModalFormData()
	let guns = [ 
		"gunsaddon.cartucho", 
		"gunsaddon.glock_17" , 
		"gunsaddon.desert_eagle" , 
		"gunsaddon.micro_uzi", 
		"gunsaddon.skorpion_vz61", 
		"gunsaddon.m4a1", 
		"gunsaddon.m16", 
		"gunsaddon.m249", 
		"gunsaddon.barret_m82a1", 
		"gunsaddon.m202", 
		"gunsaddon.grenade_bullet"
	]
    form.title("gunsaddon.ammo");
	form.dropdown("gunsaddon.guns", guns)
	form.slider("Amount", 1, 64, 1)
    form.show(player).then(res => {
		let [guns_data, ammo_data] = res.formValues;
		let multi_ammo;
		if(guns_data === 0){
			guns_data = 'gunsaddon:cartucho';
			multi_ammo = 8;
		}
		if(guns_data === 1){
			guns_data = 'gunsaddon:glock_17_ammo';
			multi_ammo = 2;
		}
		if(guns_data === 2){
			guns_data = 'gunsaddon:desert_eagle_ammo';
			multi_ammo = 2;
		}
		if(guns_data === 3){
			guns_data = 'gunsaddon:micro_uzi_ammo';
			multi_ammo = 2;
		}
		if(guns_data === 4){
			guns_data = 'gunsaddon:skorpion_vz61_ammo';
			multi_ammo = 2;
		}
		if(guns_data === 5){
			guns_data = 'gunsaddon:m4a1_ammo';
			multi_ammo = 2;
		}
		if(guns_data === 6){
			guns_data = 'gunsaddon:m16_ammo';
			multi_ammo = 2;
		}
		if(guns_data === 7){
			guns_data = 'gunsaddon:m249_ammo';
			multi_ammo = 1;
		}
		if(guns_data === 8){
			guns_data = 'gunsaddon:barret_m82a1_ammo';
			multi_ammo = 1;
		}
		if(guns_data === 9){
			guns_data = 'gunsaddon:m202_ammo';
			multi_ammo = 1;
		}
		if(guns_data === 10){
			guns_data = 'gunsaddon:grenade_bullet';
			multi_ammo = 3;
		}
		player.runCommand(`/execute at @s[hasitem={item=minecraft:iron_ingot,quantity=${ammo_data}..}] at @s[hasitem={item=minecraft:gunpowder,quantity=${ammo_data}..}] run scoreboard players set @s ammo_s 1`);
		player.runCommand(`/give @s[scores={ammo_s=1}] ${guns_data} ${ammo_data*multi_ammo}`);
		player.runCommand(`/clear @s[scores={ammo_s=1}] minecraft:iron_ingot 0 ${ammo_data}`);
		player.runCommand(`/clear @s[scores={ammo_s=1}] minecraft:gunpowder 0 ${ammo_data}`);
		player.runCommand(`/msg @s[scores={ammo_s=0}] You need an iron ingot and gunpowder.`);
		player.runCommand(`/scoreboard players set @s[scores={ammo_s=1}] ammo_s 0`);
	})
}