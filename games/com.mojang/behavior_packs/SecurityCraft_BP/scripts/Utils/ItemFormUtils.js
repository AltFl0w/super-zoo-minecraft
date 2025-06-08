import { system, ItemStack, EasingType } from "@minecraft/server";
import { ActionFormData, ModalFormData } from "@minecraft/server-ui";
import DataBase from "./DataBase";
import { WarnMessage } from "./Tools";
const db = DataBase;
let intervalId;
class ItemFormUtils {
    constructor(player, item, entity, block) {
        this.player = player;
        this.item = item;
        this.entity = entity;
        this.block = block;
    }
    spawnStack(dimension, location, type) {
        const stack = new ItemStack(type);
        dimension.spawnItem(stack, location);
    }
    getType(player, type) {
        try {
            const scbs = db.getIds();
            const typesList = [];
            const types = [];
            for (let i = 0; i < scbs.length; i++) {
                const value = db.get(scbs[i]).toString();
                const mine = value.includes(player.id) && value.startsWith(type + ':');
                if (mine) {
                    const names = value.split(':')[3];
                    typesList.push(names);
                    types.push(value);
                }
            }
            return { typesList, types };
        }
        catch (e) {
            console.warn(e.stack, e);
        }
    }
    turretModule() {
        const { player } = this;
        const { dimension, location } = player;
        const form = new ActionFormData();
        form.title("Turret Module");
        form.button("Turret On");
        form.button("Turret Off");
        form.button("Attack Players");
        form.button("Attack Monsters");
        form.button("Attack Both");
        form.button("Remove All");
        form.show(player).then(scb => {
            if (scb.canceled)
                return;
            const turrets = dimension.getEntities({
                type: 'scb:turret',
                tags: [`${player.id}:${player.name}`]
            });
            turrets.forEach(turret => {
                switch (scb.selection) {
                    case 0:
                        turret.triggerEvent('scb:on');
                        break;
                    case 1:
                        turret.triggerEvent('scb:off');
                        break;
                    case 2:
                        turret.triggerEvent('scb:only_players');
                        break;
                    case 3:
                        turret.triggerEvent('scb:only_monsters');
                        break;
                    case 4:
                        turret.triggerEvent('scb:attack_all');
                        break;
                    case 5:
                        turret.dimension.spawnItem(new ItemStack('scb:turret_item'), location);
                        turret.remove();
                        break;
                }
            });
        });
    }
    mineModule() {
        const { player } = this;
        const form = new ActionFormData();
        form.title("Mine Module");
        form.button("Explode");
        form.button('Explode All');
        form.button('Remove');
        form.button('Remove All');
        form.show(player).then(scb => {
            if (scb.canceled)
                return;
            const { dimension, location: plrLoc } = player;
            const getType = this.getType(player, 'mine');
            if (getType?.types.length === 0) {
                WarnMessage(player, 'No mines found!', false);
                return;
            }
            switch (scb.selection) {
                case 0:
                    {
                        const modal = new ModalFormData();
                        modal.title('Mine Module');
                        modal.dropdown('Select the Mine', getType?.typesList);
                        modal.show(player).then(scb => {
                            if (scb.canceled)
                                return;
                            const mine = getType?.types[scb.formValues[0]];
                            const location = mine.split(':')[4];
                            const loc = {
                                x: parseInt(location.split(' ')[0]),
                                y: parseInt(location.split(' ')[1]),
                                z: parseInt(location.split(' ')[2])
                            };
                            const block = dimension.getBlock(loc);
                            db.deleteOwner(loc, player, block);
                            dimension.createExplosion(loc, 4, {
                                causesFire: true
                            });
                            block.setType('air');
                        });
                    }
                    break;
                case 1:
                    {
                        getType?.types.forEach(mine => {
                            const location = mine.split(':')[4];
                            const loc = {
                                x: parseInt(location.split(' ')[0]),
                                y: parseInt(location.split(' ')[1]),
                                z: parseInt(location.split(' ')[2])
                            };
                            const block = dimension.getBlock(loc);
                            db.deleteOwner(loc, player, block);
                            dimension.createExplosion(loc, 4, {
                                causesFire: true
                            });
                        });
                    }
                    break;
                case 2:
                    {
                        const modal = new ModalFormData();
                        modal.title('Mine Module');
                        modal.dropdown('Select the Mine', getType?.typesList);
                        modal.show(player).then(scb => {
                            if (scb.canceled)
                                return;
                            const mine = getType?.types[scb.formValues[0]];
                            const location = mine.split(':')[4];
                            const loc = {
                                x: parseInt(location.split(' ')[0]),
                                y: parseInt(location.split(' ')[1]),
                                z: parseInt(location.split(' ')[2])
                            };
                            const block = dimension.getBlock(loc);
                            db.deleteOwner(loc, player, block);
                        });
                    }
                    break;
                case 3: {
                    getType?.types.forEach(mine => {
                        const location = mine.split(':')[4];
                        const loc = {
                            x: parseInt(location.split(' ')[0]),
                            y: parseInt(location.split(' ')[1]),
                            z: parseInt(location.split(' ')[2])
                        };
                        const block = dimension.getBlock(loc);
                        db.deleteOwner(loc, player, block);
                    });
                }
            }
        });
    }
    cameraModule() {
        const { player } = this;
        const isInCam = player.hasTag('in_camera');
        const form = new ActionFormData();
        form.title("Tablet");
        form.button("Camera");
        isInCam ? form.button('Return') : form.button('Remove');
        isInCam ? null : form.button('Remove All');
        form.show(player).then(scb => {
            player.removeTag('in_camera');
            if (scb.canceled)
                return;
            const { dimension, location: plrLoc } = player;
            const getType = this.getType(player, 'security_camera');
            if (getType?.types.length === 0) {
                WarnMessage(player, 'No cameras found!', false);
                return;
            }
            switch (scb.selection) {
                case 0:
                    {
                        const modal = new ModalFormData();
                        modal.title('Camera');
                        modal.dropdown('Select the camera', getType?.typesList);
                        modal.show(player).then(scb => {
                            player.removeTag('in_camera');
                            if (scb.canceled)
                                return;
                            const mine = getType?.types[scb.formValues[0]];
                            const location = mine.split(':')[4];
                            const loc = {
                                x: parseInt(location.split(' ')[0]) + 0.5,
                                y: parseInt(location.split(' ')[1]),
                                z: parseInt(location.split(' ')[2]) + 0.5
                            };
                            const block = dimension.getBlock(loc);
                            player.addTag('in_camera');
                            intervalId = system.runInterval(() => {
                                if (player.hasTag('in_camera')) {
                                    player.camera.setCamera('minecraft:free', {
                                        easeOptions: {
                                            easeTime: 0.2,
                                            easeType: EasingType.Linear
                                        },
                                        location: {
                                            x: loc.x,
                                            y: loc.y + 1,
                                            z: loc.z
                                        },
                                        rotation: player.getRotation()
                                    });
                                    player.inputPermissions.movementEnabled = false;
                                }
                                else {
                                    system.clearRun(intervalId);
                                    player.camera.clear();
                                    player.inputPermissions.movementEnabled = true;
                                }
                            });
                        });
                    }
                    break;
                case 1:
                    {
                        if (!player.hasTag('in_camera')) {
                            const modal = new ModalFormData();
                            modal.title('Tablet');
                            modal.dropdown('Select the camera', getType?.typesList);
                            modal.show(player).then(scb => {
                                if (scb.canceled)
                                    return;
                                const mine = getType?.types[scb.formValues[0]];
                                const location = mine.split(':')[4];
                                const loc = {
                                    x: parseInt(location.split(' ')[0]),
                                    y: parseInt(location.split(' ')[1]),
                                    z: parseInt(location.split(' ')[2])
                                };
                                const block = dimension.getBlock(loc);
                                db.deleteOwner(loc, player, block);
                            });
                        }
                        else {
                            player.removeTag('in_camera');
                        }
                    }
                    break;
                case 2: {
                    getType?.types.forEach(cam => {
                        const location = cam.split(':')[4];
                        const loc = {
                            x: parseInt(location.split(' ')[0]),
                            y: parseInt(location.split(' ')[1]),
                            z: parseInt(location.split(' ')[2])
                        };
                        const block = dimension.getBlock(loc);
                        db.deleteOwner(loc, player, block);
                    });
                }
            }
        });
    }
    setName() {
        const { player, block } = this;
        if (!block)
            return;
        const form = new ModalFormData();
        form.textField('Set a name', '');
        form.show(player).then(scb => {
            if (scb.canceled) {
                block.dimension.spawnItem(new ItemStack(block.typeId), block.location);
                block.setType('air');
            }
            else {
                const scbName = scb.formValues[0];
                const type = block.typeId.split(':')[1];
                db.setOwner(block.location, player, type, scbName);
                if (block.typeId === 'scb:mine') {
                    const active = block.permutation.withState('scb:active', true);
                    block.setPermutation(active);
                }
            }
        });
    }
}
export default ItemFormUtils;
