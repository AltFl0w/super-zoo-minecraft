function WarnMessage(player, text, color = true) {
    const textColor = color ? '§b' : '§c';
    player.onScreenDisplay.setActionBar(textColor + text);
}
export { WarnMessage };
