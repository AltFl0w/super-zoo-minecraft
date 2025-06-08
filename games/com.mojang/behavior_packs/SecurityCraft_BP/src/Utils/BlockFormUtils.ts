import { world, system, Player, Block, ItemStack, EasingType, BlockVolume } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import DataBase from "./DataBase";
import doorManager from "./ScbDoor";

const db = DataBase;

class BlockFormUtils {
    private player: Player;
    private block: Block;

    constructor(player: Player, block: Block) {
        this.player = player;
        this.block = block;
    }

    setPassword() {
        const { player, block } = this;
        const { dimension, location: loc } = block;
        if (block.typeId !== 'scb:keypad') return;
        const hasPassword = db.get(`${loc.x} ${loc.y} ${loc.z}:password`);
        if (hasPassword) return;
        const modal = new ModalFormData();
        modal.title('Keypad');
        modal.textField('Set a new password/key code', 'Example: password1234');
        modal.show(player).then(scb => {
            if (scb.canceled) return;
            const password = scb.formValues[0];
            db.set(`${loc.x} ${loc.y} ${loc.z}:locked`, true);
            db.set(`${loc.x} ${loc.y} ${loc.z}:password`, password);
            player.sendMessage(`The password §2${password}§r has been set successfully.`);
        });
    }

    putPassword() {
        const { player, block } = this;
        const { dimension, location: loc } = block;
        if (block.typeId !== 'scb:keypad') return;
        const locked = db.get(`${loc.x} ${loc.y} ${loc.z}:locked`);
        if (locked) {
            const modal = new ModalFormData();
            modal.title('Keypad');
            modal.textField('Put the current password', '');
            modal.show(player).then(scb => {
                if (scb.canceled) return;
                const currentPassword = db.get(`${loc.x} ${loc.y} ${loc.z}:password`);
                const password = scb.formValues[0];
                const isValid = currentPassword === password;
                if (isValid) {
                    db.set(`${loc.x} ${loc.y} ${loc.z}:locked`, false);
                    block.setPermutation(block.permutation.withState('scb:switch', 1));
                    player.sendMessage('§2Unlocked!');
                    const doors = [
                        dimension.getBlock({ x: loc.x - 1, y: loc.y, z: loc.z }),
                        dimension.getBlock({ x: loc.x + 1, y: loc.y, z: loc.z }),
                        dimension.getBlock({ x: loc.x, y: loc.y, z: loc.z - 1 }),
                        dimension.getBlock({ x: loc.x, y: loc.y, z: loc.z + 1 }),
                        dimension.getBlock({ x: loc.x, y: loc.y - 1, z: loc.z }),
                        dimension.getBlock({ x: loc.x, y: loc.y + 1, z: loc.z }),
                        dimension.getBlock({ x: loc.x - 2, y: loc.y, z: loc.z }),
                        dimension.getBlock({ x: loc.x + 2, y: loc.y, z: loc.z }),
                        dimension.getBlock({ x: loc.x, y: loc.y, z: loc.z - 2 }),
                        dimension.getBlock({ x: loc.x, y: loc.y, z: loc.z + 2 }),
                        dimension.getBlock({ x: loc.x, y: loc.y - 2, z: loc.z }),
                        dimension.getBlock({ x: loc.x, y: loc.y + 2, z: loc.z }),
                    ];
                    doors.forEach(door => {
                        doorManager.interactWithDoor(door);
                    });
                    system.runTimeout(() => {
                        const removed = db.get(`${loc.x} ${loc.y} ${loc.z}:password`);
                        if (!removed) return;
                        block?.setPermutation(block?.permutation.withState('scb:switch', 0));
                        doors.forEach(door => {
                            doorManager.interactWithDoor(door);
                        });
                        block ? db.set(`${loc.x} ${loc.y} ${loc.z}:locked`, true) : null;
                    }, 40);
                }
                else {
                    player.sendMessage('§cInvalid password!');
                }
            });
        }
    }
}

export default BlockFormUtils;