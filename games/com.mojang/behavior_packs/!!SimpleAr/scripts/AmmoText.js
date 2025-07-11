import { Player } from "@minecraft/server";
import { Global } from './Global.js';
import { ItemUtil, FirearmUtil} from './Utilities.js';
import { MagazineTags } from './Lists/MagazinesList.js';
/**
 * 
 * @param {Player} player 
 */
function renewAmmoCount(player) {
    if(!FirearmUtil.isHoldingFirearm(player)) { return; }
    const isReloading = Boolean(player.getDynamicProperty(Global.PlayerDynamicProperties.animation.is_reloading));
    if(isReloading) { return; }
    const firearmItemStack = ItemUtil.getSelectedItemStack(player);
    const firearm = FirearmUtil.getFirearmObjectFromItemStack(firearmItemStack);
    if(firearmItemStack === null) { return; }
    const firearmId = Number(firearmItemStack.getDynamicProperty(Global.ItemDynamicProperties.id));

    const magazineItemStack = ItemUtil.getPlayerOffhandContainerSlot(player)?.getItem();
    const magazineObject = FirearmUtil.getMagazineObjectFromItemStack(magazineItemStack??null);
    const maxAmmo = magazineObject?.maxAmmo;

    const ammoCount = FirearmUtil.getWorldAmmoUsingId(firearmId);
    const isMagazineEmpty = Boolean(firearmItemStack.getDynamicProperty(Global.ItemDynamicProperties.isMagazineEmpty));
    //const magazineTag     = String(firearmItemStack.getDynamicProperty(Global.ItemDynamicProperties.magazineTag));
    if(ammoCount === null || isMagazineEmpty === undefined) { return; }
    if(isMagazineEmpty) {
        player.onScreenDisplay.setActionBar(`Ammo: §l§e<§r§eOut of Ammo§e§l>`);
    }
    else if(magazineObject === null) {
        player.onScreenDisplay.setActionBar(`Ammo: §l§e<§r§cNo Magazine§e§l>`);
    }
    else if(firearm?.ammoType !== magazineObject.ammoType) {
        player.onScreenDisplay.setActionBar(`Ammo: §l§e<§r§eWrong Magazine Type§e§l>`);
    }
    else if(ammoCount && maxAmmo) {
        player.onScreenDisplay.setActionBar(`Ammo: §l§e<§r§a${ammoCount}/${maxAmmo}§e§l>`);
    }
}

export { renewAmmoCount };