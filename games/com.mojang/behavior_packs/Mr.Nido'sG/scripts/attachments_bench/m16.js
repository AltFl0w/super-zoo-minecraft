import { world, system, ItemStack, EquipmentSlot, TicksPerSecond } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

world.beforeEvents.worldInitialize.subscribe((data) => {
    data.blockComponentRegistry.registerCustomComponent('gunsaddon:attachments_bench', {
        onPlayerInteract: eventData => {
			const player = eventData.player;
			const playerEquippable = player.getComponent("equippable");
			const itemUsed = playerEquippable.getEquipment("Mainhand");
			if (itemUsed.typeId == 'gunsaddon:m16') {
				m16(player);
				player.runCommand('/playsound gun.weapon_deploy @s');
			}
			if (itemUsed.typeId == 'gunsaddon:double_micro_uzi') {
				double_micro_uzi(player);
				player.runCommand('/playsound gun.weapon_deploy @s');
			}
			if (itemUsed.typeId == 'gunsaddon:micro_uzi') {
				micro_uzi(player);
				player.runCommand('/playsound gun.weapon_deploy @s');
			}
			if (itemUsed.typeId == 'gunsaddon:benelli_m4') {
				benelli_m4(player);
				player.runCommand('/playsound gun.weapon_deploy @s');
			}
			if (itemUsed.typeId == 'gunsaddon:glock_17') {
				glock_17(player);
				player.runCommand('/playsound gun.weapon_deploy @s');
			}
			if (itemUsed.typeId == 'gunsaddon:desert_eagle') {
				desert_eagle(player);
				player.runCommand('/playsound gun.weapon_deploy @s');
			}
			if (itemUsed.typeId == 'gunsaddon:barret_m82a1') {
				barret_m82a1(player);
				player.runCommand('/playsound gun.weapon_deploy @s');
			}
			if (itemUsed.typeId == 'gunsaddon:m249') {
				m249(player);
				player.runCommand('/playsound gun.weapon_deploy @s');
			}
			if (itemUsed.typeId == 'gunsaddon:m4a1') {
				m4a1(player);
				player.runCommand('/playsound gun.weapon_deploy @s');
			}
			if (itemUsed.typeId == 'gunsaddon:double_glock_17') {
				double_glock_17(player);
				player.runCommand('/playsound gun.weapon_deploy @s');
			}
			if (itemUsed.typeId == 'gunsaddon:remington_870') {
				remington_870(player);
				player.runCommand('/playsound gun.weapon_deploy @s');
			}
			if (itemUsed.typeId == 'gunsaddon:m32') {
				m32(player);
				player.runCommand('/playsound gun.weapon_deploy @s');
			}
			if (itemUsed.typeId == 'gunsaddon:skorpion_vz61') {
				skorpion_vz61(player);
				player.runCommand('/playsound gun.weapon_deploy @s');
			}
        }
    });
});
function skorpion_vz61(player) {
	const equipment = player.getComponent('equippable');
	const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
    let form = new ModalFormData()
	let accesorio2 = [ "None", "Laser §4(Red)", "Laser §1(Blue)", "Laser §2(Green)" ]
    form.title("gunsaddon.accesorio");

	if(mainhand.getLore().includes('§7§rA2: Laser §4(Red)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 1)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §1(Blue)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 2)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §2(Green)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 3)
	}else {
		form.dropdown("gunsaddon.accesorio.2", accesorio2)
	}
    form.show(player).then(res => {
		let [a2] = res.formValues;
		let loreA2 = 'A2: None';

		if(a2 === 0){ loreA2 = '§7§rA2: None' }
		else if(a2 === 1){ loreA2 = '§7§rA2: Laser §4(Red)' }
		else if(a2 === 2){ loreA2 = '§7§rA2: Laser §1(Blue)' }
		else if(a2 === 3){ loreA2 = '§7§rA2: Laser §2(Green)' }

		const equipment = player.getComponent('equippable');
		const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
		let loreList = [loreA2];
		const DynPropM16 = mainhand.getDynamicProperty('Skorpion vz61');
		console.warn(DynPropM16);
		mainhand.setLore(loreList);
		equipment.setEquipment(EquipmentSlot.Mainhand,mainhand);
		player.runCommand('/playsound gun.weapon_deploy @s');
		if(a1 === 0 && a1 === 0 && a2 === 0 && a4 === 0 && a5 === 0){ 
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:skorpion_vz61');
		}
	})
}
function m32(player) {
	const equipment = player.getComponent('equippable');
	const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
    let form = new ModalFormData()
	let accesorio1 = [ "None", "EOTech 552 (4x)" ]
	let accesorio2 = [ "None", "Laser §4(Red)", "Laser §1(Blue)", "Laser §2(Green)" ]
    form.title("gunsaddon.accesorio");
	if(mainhand.getLore().includes('§7§rA1: EOTech 552 (4x)')){ form.dropdown("gunsaddon.accesorio.1", accesorio1, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.1", accesorio1)
	}
	
	if(mainhand.getLore().includes('§7§rA2: Laser §4(Red)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 1)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §1(Blue)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 2)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §2(Green)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 3)
	}else {
		form.dropdown("gunsaddon.accesorio.2", accesorio2)
	}
	
    form.show(player).then(res => {
		let [a1, a2] = res.formValues;
		let loreA1 = 'A1: None';
		let loreA2 = 'A2: None';
		if(a1 === 0){ loreA1 = '§7§rA1: None' }
		else if(a1 === 1){ loreA1 = '§7§rA1: EOTech 552 (4x)' }

		if(a2 === 0){ loreA2 = '§7§rA2: None' }
		else if(a2 === 1){ loreA2 = '§7§rA2: Laser §4(Red)' }
		else if(a2 === 2){ loreA2 = '§7§rA2: Laser §1(Blue)' }
		else if(a2 === 3){ loreA2 = '§7§rA2: Laser §2(Green)' }

		const equipment = player.getComponent('equippable');
		const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
		let loreList = [loreA1,loreA2];
		const DynPropM16 = mainhand.getDynamicProperty('M32');
		console.warn(DynPropM16);
		mainhand.setLore(loreList);
		equipment.setEquipment(EquipmentSlot.Mainhand,mainhand);
		player.runCommand('/playsound gun.weapon_deploy @s');
		if(a1 === 0 && a1 === 0 && a2 === 0 && a4 === 0 && a5 === 0){ 
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:m32');
		}
	})
}
function remington_870(player) {
	const equipment = player.getComponent('equippable');
	const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
    let form = new ModalFormData()
	let accesorio2 = [ "None", "Laser §4(Red)", "Laser §1(Blue)", "Laser §2(Green)" ]
	let accesorio3 = [ "None", "Bayonet" ]
	let flashlight = [ "None", "Flashlight" ]
    form.title("gunsaddon.accesorio");
	
	if(mainhand.getLore().includes('§7§rA2: Laser §4(Red)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 1)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §1(Blue)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 2)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §2(Green)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 3)
	}else {
		form.dropdown("gunsaddon.accesorio.2", accesorio2)
	}

	if(mainhand.getLore().includes('§7§rA3: Bayonet')){ form.dropdown("gunsaddon.accesorio.3", accesorio3, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.3", accesorio3)
	}

	if(mainhand.getLore().includes('§7§rA5: Flashlight')){ form.dropdown("gunsaddon.accesorio.5", flashlight, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.5", flashlight)
	}
	
	
    form.show(player).then(res => {
		let [a2, a3, a5] = res.formValues;
		let loreA2 = 'A2: None';
		let loreA3 = 'A3: None';
		let loreA5 = 'A5: None';
		
		if(a2 === 0){ loreA2 = '§7§rA2: None' }
		else if(a2 === 1){ loreA2 = '§7§rA2: Laser §4(Red)' }
		else if(a2 === 2){ loreA2 = '§7§rA2: Laser §1(Blue)' }
		else if(a2 === 3){ loreA2 = '§7§rA2: Laser §2(Green)' }
		
		if(a3 === 0){ 
			loreA3 = '§7§rA3: None';
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:remington_870');
		}
		else if(a3 === 1){ 
			loreA3 = '§7§rA3: Bayonet';
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:remington_870');
		}
		
		if(a5 === 0){ loreA5 = '§7§rA5: None' }
		else if(a5 === 1){ loreA5 = '§7§rA5: Flashlight' }

		const equipment = player.getComponent('equippable');
		const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
		let loreList = [loreA2,loreA3,loreA5];
		const DynPropM16 = mainhand.getDynamicProperty('Remington 870');
		console.warn(DynPropM16);
		mainhand.setLore(loreList);
		player.runCommand('/playsound gun.weapon_deploy @s');
		equipment.setEquipment(EquipmentSlot.Mainhand,mainhand);
		if(a1 === 0 && a1 === 0 && a2 === 0 && a3 === 0 && a4 === 0 && a5 === 0){ 
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:remington_870');
		}
	})
}
function m249(player) {
	const equipment = player.getComponent('equippable');
	const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
    let form = new ModalFormData()
	let accesorio1 = [ "None", "EOTech 552 (4x)" ]
	let accesorio2 = [ "None", "Laser §4(Red)", "Laser §1(Blue)", "Laser §2(Green)" ]
	let flashlight = [ "None", "Flashlight" ]
    form.title("gunsaddon.accesorio");

	if(mainhand.getLore().includes('§7§rA1: EOTech 552 (4x)')){ form.dropdown("gunsaddon.accesorio.1", accesorio1, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.1", accesorio1)
	}
	
	if(mainhand.getLore().includes('§7§rA2: Laser §4(Red)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 1)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §1(Blue)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 2)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §2(Green)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 3)
	}else {
		form.dropdown("gunsaddon.accesorio.2", accesorio2)
	}

	if(mainhand.getLore().includes('§7§rA5: Flashlight')){ form.dropdown("gunsaddon.accesorio.5", flashlight, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.5", flashlight)
	}

    form.show(player).then(res => {
		let [a1, a2, a5] = res.formValues;
		let loreA1 = 'A1: None';
		let loreA2 = 'A2: None';
		let loreA5 = 'A5: None';
		if(a1 === 0){ loreA1 = '§7§rA1: None' }
		else if(a1 === 1){ loreA1 = '§7§rA1: EOTech 552 (4x)' }

		if(a2 === 0){ loreA2 = '§7§rA2: None' }
		else if(a2 === 1){ loreA2 = '§7§rA2: Laser §4(Red)' }
		else if(a2 === 2){ loreA2 = '§7§rA2: Laser §1(Blue)' }
		else if(a2 === 3){ loreA2 = '§7§rA2: Laser §2(Green)' }
		
		if(a5 === 0){ loreA5 = '§7§rA5: None' }
		else if(a5 === 1){ loreA5 = '§7§rA5: Flashlight' }

		const equipment = player.getComponent('equippable');
		const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
		let loreList = [loreA1,loreA2,loreA5];
		const DynPropM16 = mainhand.getDynamicProperty('M249');
		console.warn(DynPropM16);
		mainhand.setLore(loreList);
		equipment.setEquipment(EquipmentSlot.Mainhand,mainhand);
		player.runCommand('/playsound gun.weapon_deploy @s');
		if(a1 === 0 && a1 === 0 && a2 === 0 && a4 === 0 && a5 === 0){ 
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:m249');
		}
	})
}
function desert_eagle(player) {
	const equipment = player.getComponent('equippable');
	const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
    let form = new ModalFormData()
	let accesorio1 = [ "None", "EOTech 552 (4x)" ]
	let accesorio2 = [ "None", "Laser §4(Red)", "Laser §1(Blue)", "Laser §2(Green)" ]
	let flashlight = [ "None", "Flashlight" ]
    form.title("gunsaddon.accesorio");
	if(mainhand.getLore().includes('§7§rA1: EOTech 552 (4x)')){ form.dropdown("gunsaddon.accesorio.1", accesorio1, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.1", accesorio1)
	}
	
	if(mainhand.getLore().includes('§7§rA2: Laser §4(Red)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 1)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §1(Blue)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 2)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §2(Green)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 3)
	}else {
		form.dropdown("gunsaddon.accesorio.2", accesorio2)
	}

	if(mainhand.getLore().includes('§7§rA5: Flashlight')){ form.dropdown("gunsaddon.accesorio.5", flashlight, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.5", flashlight)
	}
	
    form.show(player).then(res => {
		let [a1, a2, a5] = res.formValues;
		let loreA1 = 'A1: None';
		let loreA2 = 'A2: None';
		let loreA5 = 'A5: None';
		if(a1 === 0){ loreA1 = '§7§rA1: None' }
		else if(a1 === 1){ loreA1 = '§7§rA1: EOTech 552 (4x)' }

		if(a2 === 0){ loreA2 = '§7§rA2: None' }
		else if(a2 === 1){ loreA2 = '§7§rA2: Laser §4(Red)' }
		else if(a2 === 2){ loreA2 = '§7§rA2: Laser §1(Blue)' }
		else if(a2 === 3){ loreA2 = '§7§rA2: Laser §2(Green)' }
		
		if(a5 === 0){ loreA5 = '§7§rA5: None' }
		else if(a5 === 1){ loreA5 = '§7§rA5: Flashlight' }

		const equipment = player.getComponent('equippable');
		const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
		let loreList = [loreA1,loreA2,loreA5];
		const DynPropM16 = mainhand.getDynamicProperty('Desert Eagle');
		console.warn(DynPropM16);
		mainhand.setLore(loreList);
		equipment.setEquipment(EquipmentSlot.Mainhand,mainhand);
		player.runCommand('/playsound gun.weapon_deploy @s');
		if(a1 === 0 && a1 === 0 && a2 === 0 && a4 === 0 && a5 === 0){ 
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:desert_eagle');
		}
	})
}
function glock_17(player) {
	const equipment = player.getComponent('equippable');
	const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
    let form = new ModalFormData()
	let accesorio1 = [ "None", "EOTech 552 (4x)" ]
	let accesorio2 = [ "None", "Laser §4(Red)", "Laser §1(Blue)", "Laser §2(Green)" ]
	let accesorio3 = [ "None", "Silencer" ]
	let flashlight = [ "None", "Flashlight" ]
    form.title("gunsaddon.accesorio");
	if(mainhand.getLore().includes('§7§rA1: EOTech 552 (4x)')){ form.dropdown("gunsaddon.accesorio.1", accesorio1, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.1", accesorio1)
	}
	
	if(mainhand.getLore().includes('§7§rA2: Laser §4(Red)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 1)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §1(Blue)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 2)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §2(Green)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 3)
	}else {
		form.dropdown("gunsaddon.accesorio.2", accesorio2)
	}
	
	if(mainhand.getLore().includes('§7§rA3: Silencer')){ form.dropdown("gunsaddon.accesorio.3", accesorio3, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.3", accesorio3)
	}

	if(mainhand.getLore().includes('§7§rA5: Flashlight')){ form.dropdown("gunsaddon.accesorio.5", flashlight, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.5", flashlight)
	}
	
    form.show(player).then(res => {
		let [a1, a2, a3, a5] = res.formValues;
		let loreA1 = 'A1: None';
		let loreA2 = 'A2: None';
		let loreA3 = 'A3: None';
		let loreA5 = 'A5: None';
		if(a1 === 0){ loreA1 = '§7§rA1: None' }
		else if(a1 === 1){ loreA1 = '§7§rA1: EOTech 552 (4x)' }

		if(a2 === 0){ loreA2 = '§7§rA2: None' }
		else if(a2 === 1){ loreA2 = '§7§rA2: Laser §4(Red)' }
		else if(a2 === 2){ loreA2 = '§7§rA2: Laser §1(Blue)' }
		else if(a2 === 3){ loreA2 = '§7§rA2: Laser §2(Green)' }
		
		if(a3 === 0){ 
			loreA3 = '§7§rA3: None';
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:glock_17');
		}
		else if(a3 === 1){ 
			loreA3 = '§7§rA3: Silencer';
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:glock_17');
		}
		
		if(a5 === 0){ loreA5 = '§7§rA5: None' }
		else if(a5 === 1){ loreA5 = '§7§rA5: Flashlight' }

		const equipment = player.getComponent('equippable');
		const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
		let loreList = [loreA1,loreA2,loreA3,loreA5];
		const DynPropM16 = mainhand.getDynamicProperty('Glock 17');
		console.warn(DynPropM16);
		mainhand.setLore(loreList);
		equipment.setEquipment(EquipmentSlot.Mainhand,mainhand);
		player.runCommand('/playsound gun.weapon_deploy @s');
		if(a1 === 0 && a1 === 0 && a2 === 0 && a3 === 0 && a4 === 0 && a5 === 0){ 
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:glock_17');
		}
	})
}
function micro_uzi(player) {
	const equipment = player.getComponent('equippable');
	const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
    let form = new ModalFormData()
	let accesorio1 = [ "None", "EOTech 552 (4x)" ]
	let accesorio2 = [ "None", "Laser §4(Red)", "Laser §1(Blue)", "Laser §2(Green)" ]
	let accesorio3 = [ "None", "Silencer" ]
	let flashlight = [ "None", "Flashlight" ]
    form.title("gunsaddon.accesorio");
	if(mainhand.getLore().includes('§7§rA1: EOTech 552 (4x)')){ form.dropdown("gunsaddon.accesorio.1", accesorio1, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.1", accesorio1)
	}
	
	if(mainhand.getLore().includes('§7§rA2: Laser §4(Red)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 1)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §1(Blue)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 2)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §2(Green)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 3)
	}else {
		form.dropdown("gunsaddon.accesorio.2", accesorio2)
	}
	
	if(mainhand.getLore().includes('§7§rA3: Silencer')){ form.dropdown("gunsaddon.accesorio.3", accesorio3, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.3", accesorio3)
	}

	if(mainhand.getLore().includes('§7§rA5: Flashlight')){ form.dropdown("gunsaddon.accesorio.5", flashlight, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.5", flashlight)
	}
	
    form.show(player).then(res => {
		let [a1, a2, a3, a5] = res.formValues;
		let loreA1 = 'A1: None';
		let loreA2 = 'A2: None';
		let loreA3 = 'A3: None';
		let loreA5 = 'A5: None';
		if(a1 === 0){ loreA1 = '§7§rA1: None' }
		else if(a1 === 1){ loreA1 = '§7§rA1: EOTech 552 (4x)' }

		if(a2 === 0){ loreA2 = '§7§rA2: None' }
		else if(a2 === 1){ loreA2 = '§7§rA2: Laser §4(Red)' }
		else if(a2 === 2){ loreA2 = '§7§rA2: Laser §1(Blue)' }
		else if(a2 === 3){ loreA2 = '§7§rA2: Laser §2(Green)' }
		
		if(a3 === 0){ 
			loreA3 = '§7§rA3: None';
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:micro_uzi');
		}
		else if(a3 === 1){ 
			loreA3 = '§7§rA3: Silencer';
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:micro_uzi');
		}
		
		if(a5 === 0){ loreA5 = '§7§rA5: None' }
		else if(a5 === 1){ loreA5 = '§7§rA5: Flashlight' }

		const equipment = player.getComponent('equippable');
		const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
		let loreList = [loreA1,loreA2,loreA3,loreA5];
		const DynPropM16 = mainhand.getDynamicProperty('Micro Uzi');
		console.warn(DynPropM16);
		mainhand.setLore(loreList);
		equipment.setEquipment(EquipmentSlot.Mainhand,mainhand);
		player.runCommand('/playsound gun.weapon_deploy @s');
		if(a1 === 0 && a1 === 0 && a2 === 0 && a3 === 0 && a4 === 0 && a5 === 0){ 
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:micro_uzi');
		}
	})
}
function benelli_m4(player) {
	const equipment = player.getComponent('equippable');
	const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
    let form = new ModalFormData()
	let accesorio2 = [ "None", "Laser §4(Red)", "Laser §1(Blue)", "Laser §2(Green)" ]
	let accesorio3 = [ "None", "Bayonet" ]
	let flashlight = [ "None", "Flashlight" ]
    form.title("gunsaddon.accesorio");
	if(mainhand.getLore().includes('§7§rA2: Laser §4(Red)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 1)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §1(Blue)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 2)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §2(Green)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 3)
	}else {
		form.dropdown("gunsaddon.accesorio.2", accesorio2)
	}

	if(mainhand.getLore().includes('§7§rA3: Bayonet')){ form.dropdown("gunsaddon.accesorio.3", accesorio3, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.3", accesorio3)
	}

	if(mainhand.getLore().includes('§7§rA5: Flashlight')){ form.dropdown("gunsaddon.accesorio.5", flashlight, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.5", flashlight)
	}
	
    form.show(player).then(res => {
		let [a2, a3, a5] = res.formValues;
		let loreA2 = 'A2: None';
		let loreA3 = 'A3: None';
		let loreA5 = 'A5: None';
		
		if(a2 === 0){ loreA2 = '§7§rA2: None' }
		else if(a2 === 1){ loreA2 = '§7§rA2: Laser §4(Red)' }
		else if(a2 === 2){ loreA2 = '§7§rA2: Laser §1(Blue)' }
		else if(a2 === 3){ loreA2 = '§7§rA2: Laser §2(Green)' }
		
		if(a3 === 0){ 
			loreA3 = '§7§rA3: None';
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:benelli_m4');
		}
		else if(a3 === 1){ 
			loreA3 = '§7§rA3: Bayonet';
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:benelli_m4');
		}
		
		if(a5 === 0){ loreA5 = '§7§rA5: None' }
		else if(a5 === 1){ loreA5 = '§7§rA5: Flashlight' }

		const equipment = player.getComponent('equippable');
		const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
		let loreList = [loreA2,loreA3,loreA5];
		const DynPropM16 = mainhand.getDynamicProperty('Benelli M4');
		console.warn(DynPropM16);
		mainhand.setLore(loreList);
		equipment.setEquipment(EquipmentSlot.Mainhand,mainhand);
		player.runCommand('/playsound gun.weapon_deploy @s');
		if(a1 === 0 && a1 === 0 && a2 === 0 && a3 === 0 && a4 === 0 && a5 === 0){ 
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:benelli_m4');
		}
	})
}
function double_micro_uzi(player) {
	const equipment = player.getComponent('equippable');
	const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
    let form = new ModalFormData()
	let flashlight = [ "None", "Flashlight" ]
    form.title("gunsaddon.accesorio");

	if(mainhand.getLore().includes('§7§rA5: Flashlight')){ form.dropdown("gunsaddon.accesorio.5", flashlight, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.5", flashlight)
	}

    form.show(player).then(res => {
		let [a5] = res.formValues;
		let loreA5 = 'A5: None';
		if(a5 === 0){ loreA5 = '§7§rA5: None' }
		else if(a5 === 1){ loreA5 = '§7§rA5: Flashlight' }

		const equipment = player.getComponent('equippable');
		const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
		let loreList = [loreA5];
		const DynPropdouble_micro_uzi = mainhand.getDynamicProperty('Double Micro Uzi');
		console.warn(DynPropdouble_micro_uzi);
		mainhand.setLore(loreList);
		equipment.setEquipment(EquipmentSlot.Mainhand,mainhand);
		player.runCommand('/playsound gun.weapon_deploy @s');
		if(a5 === 0){ 
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:double_micro_uzi');
		}
	})
}
function double_glock_17(player) {
	const equipment = player.getComponent('equippable');
	const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
    let form = new ModalFormData()
	let flashlight = [ "None", "Flashlight" ]
    form.title("gunsaddon.accesorio");
	if(mainhand.getLore().includes('§7§rA5: Flashlight')){ form.dropdown("gunsaddon.accesorio.5", flashlight, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.5", flashlight)
	}
	
    form.show(player).then(res => {
		let [a5] = res.formValues;
		let loreA5 = 'A5: None';
		if(a5 === 0){ loreA5 = '§7§rA5: None' }
		else if(a5 === 1){ loreA5 = '§7§rA5: Flashlight' }

		const equipment = player.getComponent('equippable');
		const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
		let loreList = [loreA5];
		const DynPropdouble_glock_17 = mainhand.getDynamicProperty('Double Glock');
		console.warn(DynPropdouble_glock_17);
		mainhand.setLore(loreList);
		equipment.setEquipment(EquipmentSlot.Mainhand,mainhand);
		player.runCommand('/playsound gun.weapon_deploy @s');
		if(a5 === 0){ 
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:double_glock_17');
		}
	})
}
function m16(player) {
	const equipment = player.getComponent('equippable');
	const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
    let form = new ModalFormData()
	let accesorio1 = [ "None", "EOTech 552 (4x)", "TRS26 (7x)", "Sniper(10x)" ]
	let accesorio2 = [ "None", "Laser §4(Red)", "Laser §1(Blue)", "Laser §2(Green)" ]
	let accesorio3 = [ "None", "Silencer", "Bayonet" ]
	let accesorio4 = [ "None", "M203", "Shotgun" ]
	let flashlight = [ "None", "Flashlight" ]
	form.title("gunsaddon.accesorio");
	
	if(mainhand.getLore().includes('§7§rA1: EOTech 552 (4x)')){ form.dropdown("gunsaddon.accesorio.1", accesorio1, 1)
	}else
	if(mainhand.getLore().includes('§7§rA1: TRS26 (7x)')){ form.dropdown("gunsaddon.accesorio.1", accesorio1, 2)
	}else
	if(mainhand.getLore().includes('§7§rA1: Sniper(10x)')){ form.dropdown("gunsaddon.accesorio.1", accesorio1, 3)
	}else{
		form.dropdown("gunsaddon.accesorio.1", accesorio1)
	}
	
	if(mainhand.getLore().includes('§7§rA2: Laser §4(Red)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 1)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §1(Blue)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 2)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §2(Green)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 3)
	}else {
		form.dropdown("gunsaddon.accesorio.2", accesorio2)
	}
	
	if(mainhand.getLore().includes('§7§rA3: Silencer')){ form.dropdown("gunsaddon.accesorio.3", accesorio3, 1)
	}else
	if(mainhand.getLore().includes('§7§rA3: Bayonet')){ form.dropdown("gunsaddon.accesorio.3", accesorio3, 2)
	}else{
		form.dropdown("gunsaddon.accesorio.3", accesorio3)
	}
	
	if(mainhand.getLore().includes('§7§rA4: M203')){ form.dropdown("gunsaddon.accesorio.4", accesorio4, 1)
	}else
	if(mainhand.getLore().includes('§7§rA4: Shotgun')){ form.dropdown("gunsaddon.accesorio.4", accesorio4, 2)
	}else{
		form.dropdown("gunsaddon.accesorio.4", accesorio4)
	}

	if(mainhand.getLore().includes('§7§rA5: Flashlight')){ form.dropdown("gunsaddon.accesorio.5", flashlight, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.5", flashlight)
	}
	
    form.show(player).then(res => {
		let [a1, a2, a3, a4, a5] = res.formValues;
		let loreA1 = 'A1: None';
		let loreA2 = 'A2: None';
		let loreA3 = 'A3: None';
		let loreA4 = 'A4: None';
		let loreA5 = 'A5: None';
		if(a1 === 0){ loreA1 = '§7§rA1: None' }
		else if(a1 === 1){ loreA1 = '§7§rA1: EOTech 552 (4x)' }
		else if(a1 === 2){ loreA1 = '§7§rA1: TRS26 (7x)' }
		else if(a1 === 3){ loreA1 = '§7§rA1: Sniper(10x)' }

		if(a2 === 0){ loreA2 = '§7§rA2: None' }
		else if(a2 === 1){ loreA2 = '§7§rA2: Laser §4(Red)' }
		else if(a2 === 2){ loreA2 = '§7§rA2: Laser §1(Blue)' }
		else if(a2 === 3){ loreA2 = '§7§rA2: Laser §2(Green)' }
		
		if(a3 === 0){ 
			loreA3 = '§7§rA3: None';
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:m16');
		}
		else if(a3 === 1){ 
			loreA3 = '§7§rA3: Silencer';
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:m16');
		}
		else if(a3 === 2){ 
		loreA3 = '§7§rA3: Bayonet';
		player.runCommand('enchant @s sharpness 5'); 
		}
		if(a4 === 0){ loreA4 = '§7§rA4: None' }
		else if(a4 === 1){ loreA4 = '§7§rA4: M203' }
		else if(a4 === 2){ loreA4 = '§7§rA4: Shotgun' }
		
		if(a5 === 0){ loreA5 = '§7§rA5: None' }
		else if(a5 === 1){ loreA5 = '§7§rA5: Flashlight' }

		const equipment = player.getComponent('equippable');
		const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
		let loreList = [loreA1,loreA2,loreA3,loreA4,loreA5];
		const DynPropM16 = mainhand.getDynamicProperty('M16');
		console.warn(DynPropM16);
		mainhand.setLore(loreList);
		equipment.setEquipment(EquipmentSlot.Mainhand,mainhand);
		player.runCommand('/playsound gun.weapon_deploy @s');
		if(a1 === 0 && a1 === 0 && a2 === 0 && a3 === 0 && a4 === 0 && a5 === 0){ 
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:m16');
		}
	})
}
system.runInterval(() => {
  const gunsItems = [
    "gunsaddon:m16"
  ]
let players = world.getAllPlayers();
players.forEach((player) => {
const equipment = player.getComponent('equippable');
const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
if (mainhand.typeId == gunsItems) {
if(mainhand.getLore().includes('§7§rA1: EOTech 552 (4x)')){ player.runCommand('event entity @s guns:mira.eotech');
}else
if(mainhand.getLore().includes('§7§rA1: TRS26 (7x)')){ player.runCommand('event entity @s guns:mira.trs26');
}else
if(mainhand.getLore().includes('§7§rA1: Sniper(10x)')){ player.runCommand('event entity @s guns:mira.sniper');
}else{
	player.runCommand('event entity @s guns:mira.off');
}

if(mainhand.getLore().includes('§7§rA2: Laser §4(Red)')){ player.runCommand('event entity @s guns:laser.rojo');
}else
if(mainhand.getLore().includes('§7§rA2: Laser §1(Blue)')){ player.runCommand('event entity @s guns:laser.azul');
}else
if(mainhand.getLore().includes('§7§rA2: Laser §2(Green)')){ player.runCommand('event entity @s guns:laser.verde');
}else {
	player.runCommand('event entity @s guns:accesorio.2.off');
}

if(mainhand.getLore().includes('§7§rA3: Silencer')){ player.runCommand('event entity @s guns:silenciador');
}else
if(mainhand.getLore().includes('§7§rA3: Bayonet')){ player.runCommand('event entity @s guns:bayonet');
}else{
	player.runCommand('event entity @s guns:accesorio.3.off');
}

if(mainhand.getLore().includes('§7§rA4: M203')){ player.runCommand('event entity @s guns:m203_attachments');
}else
if(mainhand.getLore().includes('§7§rA4: Shotgun')){ player.runCommand('event entity @s guns:shotgun_attachment');
}else{
	player.runCommand('event entity @s guns:accesorio.4.off');
}

if(mainhand.getLore().includes('§7§rA5: Flashlight')){ player.runCommand('event entity @s guns:flashlight');
}else{
	player.runCommand('event entity @s guns:flashlight.off');
}

}
});
});
function barret_m82a1(player) {
	const equipment = player.getComponent('equippable');
	const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
    let form = new ModalFormData()
	let accesorio1 = [ "None", "Sniper(10x)" ]
    form.title("gunsaddon.accesorio");
	if(mainhand.getLore().includes('§7§rA1: Sniper(10x)')){ form.dropdown("gunsaddon.accesorio.1", accesorio1, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.1", accesorio1)
	}
	
    form.show(player).then(res => {
		let [a1] = res.formValues;
		let loreA1 = 'A5: None';
		if(a1 === 0){ loreA1 = '§7§rA1: None' }
		else if(a1 === 1){ loreA1 = '§7§rA1: Sniper(10x)' }

		const equipment = player.getComponent('equippable');
		const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
		let loreList = [loreA1];
		const DynPropbarret_m82a1 = mainhand.getDynamicProperty('Barret M82');
		console.warn(DynPropbarret_m82a1);
		mainhand.setLore(loreList);
		equipment.setEquipment(EquipmentSlot.Mainhand,mainhand);
		player.runCommand('/playsound gun.weapon_deploy @s');
		if(a1 === 0){ 
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:barret_m82a1');
		}
	})
}
function m4a1(player) {
	const equipment = player.getComponent('equippable');
	const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
    let form = new ModalFormData()
	let accesorio1 = [ "None", "EOTech 552 (4x)", "TRS26 (7x)", "Sniper(10x)" ]
	let accesorio2 = [ "None", "Laser §4(Red)", "Laser §1(Blue)", "Laser §2(Green)" ]
	let accesorio3 = [ "None", "Silencer", "Bayonet" ]
	let accesorio4 = [ "None", "M203", "Shotgun" ]
	let flashlight = [ "None", "Flashlight" ]
    form.title("gunsaddon.accesorio");
	if(mainhand.getLore().includes('§7§rA1: EOTech 552 (4x)')){ form.dropdown("gunsaddon.accesorio.1", accesorio1, 1)
	}else
	if(mainhand.getLore().includes('§7§rA1: TRS26 (7x)')){ form.dropdown("gunsaddon.accesorio.1", accesorio1, 2)
	}else
	if(mainhand.getLore().includes('§7§rA1: Sniper(10x)')){ form.dropdown("gunsaddon.accesorio.1", accesorio1, 3)
	}else{
		form.dropdown("gunsaddon.accesorio.1", accesorio1)
	}
	
	if(mainhand.getLore().includes('§7§rA2: Laser §4(Red)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 1)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §1(Blue)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 2)
	}else
	if(mainhand.getLore().includes('§7§rA2: Laser §2(Green)')){ form.dropdown("gunsaddon.accesorio.2", accesorio2, 3)
	}else {
		form.dropdown("gunsaddon.accesorio.2", accesorio2)
	}
	
	if(mainhand.getLore().includes('§7§rA3: Silencer')){ form.dropdown("gunsaddon.accesorio.3", accesorio3, 1)
	}else
	if(mainhand.getLore().includes('§7§rA3: Bayonet')){ form.dropdown("gunsaddon.accesorio.3", accesorio3, 2)
	}else{
		form.dropdown("gunsaddon.accesorio.3", accesorio3)
	}
	
	if(mainhand.getLore().includes('§7§rA4: M203')){ form.dropdown("gunsaddon.accesorio.4", accesorio4, 1)
	}else
	if(mainhand.getLore().includes('§7§rA4: Shotgun')){ form.dropdown("gunsaddon.accesorio.4", accesorio4, 2)
	}else{
		form.dropdown("gunsaddon.accesorio.4", accesorio4)
	}

	if(mainhand.getLore().includes('§7§rA5: Flashlight')){ form.dropdown("gunsaddon.accesorio.5", flashlight, 1)
	}else{
		form.dropdown("gunsaddon.accesorio.5", flashlight)
	}
	
    form.show(player).then(res => {
		let [a1, a2, a3, a4, a5] = res.formValues;
		let loreA1 = 'A1: None';
		let loreA2 = 'A2: None';
		let loreA3 = 'A3: None';
		let loreA4 = 'A4: None';
		let loreA5 = 'A5: None';
		if(a1 === 0){ loreA1 = '§7§rA1: None' }
		else if(a1 === 1){ loreA1 = '§7§rA1: EOTech 552 (4x)' }
		else if(a1 === 2){ loreA1 = '§7§rA1: TRS26 (7x)' }
		else if(a1 === 3){ loreA1 = '§7§rA1: Sniper(10x)' }

		if(a2 === 0){ loreA2 = '§7§rA2: None' }
		else if(a2 === 1){ loreA2 = '§7§rA2: Laser §4(Red)' }
		else if(a2 === 2){ loreA2 = '§7§rA2: Laser §1(Blue)' }
		else if(a2 === 3){ loreA2 = '§7§rA2: Laser §2(Green)' }
		
		if(a3 === 0){ 
			loreA3 = '§7§rA3: None';
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:m4a1');
		}
		else if(a3 === 1){ 
			loreA3 = '§7§rA3: Silencer';
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:m4a1');
		}
		else if(a3 === 2){ 
		loreA3 = '§7§rA3: Bayonet';
		player.runCommand('enchant @s sharpness 5'); 
		}
		if(a4 === 0){ loreA4 = '§7§rA4: None' }
		else if(a4 === 1){ loreA4 = '§7§rA4: M203' }
		else if(a4 === 2){ loreA4 = '§7§rA4: Shotgun' }
		
		if(a5 === 0){ loreA5 = '§7§rA5: None' }
		else if(a5 === 1){ loreA5 = '§7§rA5: Flashlight' }

		const equipment = player.getComponent('equippable');
		const mainhand = equipment.getEquipment(EquipmentSlot.Mainhand);
		let loreList = [loreA1,loreA2,loreA3,loreA4,loreA5];
		const DynPropm4a1 = mainhand.getDynamicProperty('M4A1');
		console.warn(DynPropm4a1);
		mainhand.setLore(loreList);
		equipment.setEquipment(EquipmentSlot.Mainhand,mainhand);
		player.runCommand('/playsound gun.weapon_deploy @s');
		if(a1 === 0 && a1 === 0 && a2 === 0 && a3 === 0 && a4 === 0 && a5 === 0){ 
			player.runCommand('replaceitem entity @s slot.weapon.mainhand 0 gunsaddon:m4a1');
		}
	})
}