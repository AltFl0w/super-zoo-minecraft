import { BlockComponentPlayerInteractEvent, Player, system, world } from "@minecraft/server";
import { settingsList } from "../Lists/SettingsList";
import { SettingsUtil, SoundsUtil } from "../Utilities";

//exported to Customcomponents/Components.js



/**
 * @param {BlockComponentPlayerInteractEvent} eventData 
 */
function onInteract(eventData) {
    const player = eventData.player;
    if(player === undefined) { return; }
    player.sendMessage(settingsList.CraftingRecipes.restrictedMessageText);
    SettingsUtil.sendDownloadMessage(player);
    SoundsUtil.playErrorSound(player);
}

export { onInteract };