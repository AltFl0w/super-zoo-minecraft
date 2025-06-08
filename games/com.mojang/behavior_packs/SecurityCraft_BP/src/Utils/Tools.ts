import { Player } from "@minecraft/server";

function WarnMessage(player: Player, text: string, color = true) {
    const textColor = color ? '§b' : '§c';
    player.onScreenDisplay.setActionBar(textColor + text);
}

export { WarnMessage };