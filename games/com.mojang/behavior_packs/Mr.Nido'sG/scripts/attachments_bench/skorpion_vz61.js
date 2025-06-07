import { world, system, ItemStack, EquipmentSlot, TicksPerSecond } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

system.runInterval(() => {
  const gunsItems = [
    "gunsaddon:skorpion_vz61"
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