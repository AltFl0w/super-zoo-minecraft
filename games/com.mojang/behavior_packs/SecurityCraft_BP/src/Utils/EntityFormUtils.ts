import { world, system, Entity, Player, Block, ItemStack, EasingType } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";

class EntityFormUtils {
    private player: Player;
    private entity: Entity;
    private item: ItemStack | undefined;

    constructor(player: Player, entity: Entity, item: ItemStack | undefined) {
        this.player = player;
        this.item = item;
        this.entity = entity;
    }

    turret() {
        const { player, entity } = this;
        const { dimension, location } = player;
        const form = new ActionFormData();
        form.title("Turret");
        form.button("Turret On");
        form.button("Turret Off");
        form.button("Attack Players");
        form.button("Attack Monsters");
        form.button("Attack Both");
        form.button("Remove");
        form.show(player).then(scb => {
            if (scb.canceled) return;
            switch (scb.selection) {
                case 0:
                    entity.triggerEvent('scb:on');
                    break;
                case 1:
                    entity.triggerEvent('scb:off');
                    break;
                case 2:
                    entity.triggerEvent('scb:only_players');
                    break;
                case 3:
                    entity.triggerEvent('scb:only_monsters');
                    break;
                case 4:
                    entity.triggerEvent('scb:attack_all');
                    break;
                case 5:
                    entity.dimension.spawnItem(new ItemStack('scb:turret_item'), location);
                    entity.remove();
                    break;
            }
        });
    }

    setPassword() {
        const { player, entity } = this;
        const { dimension, location } = entity;
        const tags = entity.getTags();
        const hasPassword = tags.some(key => key.includes('password:'));
        if (hasPassword) return;
        const modal = new ModalFormData();
        modal.title('Keypad');
        modal.textField('Set a new password/key code', 'Example: password1234');
        modal.show(player).then(scb => {
            if (scb.canceled) return;
            const password = scb.formValues[0];
            entity?.addTag('password:' + password);
            entity?.addTag('scb:locked');
            player.sendMessage(`The password §2${password}§r has been set successfully.`);
        });
    }

    putPassword() {
        const { player, entity } = this;
        const { dimension, location } = entity;
        if (entity.hasTag('scb:locked')) {
            const modal = new ModalFormData();
            modal.title('Keypad');
            modal.textField('Put the current password', '');
            modal.show(player).then(scb => {
                if (scb.canceled) return;
                const tags = entity.getTags();
                const currentPassword = tags.find(key => key.includes('password:')).split(':')[1];
                const password = scb.formValues[0];
                const isValid = currentPassword === password;
                if (isValid) {
                    entity?.removeTag('scb:locked');
                    entity?.triggerEvent('scb:add_inventory');
                    player.sendMessage('§2Unlocked!')
                    system.runTimeout(() => {
                        entity?.addTag('scb:locked');
                        entity?.triggerEvent('scb:remove_inventory');
                    }, 100);
                }
                else {
                    player.sendMessage('§cInvalid password!');
                }
            });
        }
    }
}

export default EntityFormUtils;