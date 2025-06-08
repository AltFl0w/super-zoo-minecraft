import { world, Entity, Player, ItemStack, system } from "@minecraft/server";
import EntityFormUtils from "./EntityFormUtils";
import DataBase from "./DataBase";
import doorManager from "./ScbDoor";

const form = EntityFormUtils;
const db = DataBase;

class EntityUtils {
    private entity: Entity;
    private player?: Player;
    private item?: ItemStack | undefined;

    constructor(entity: Entity, player?: Player, item?: ItemStack | undefined) {
        this.entity = entity;
        this.player = player;
        this.item = item;
    }

    turret() {
        const { player, entity, item } = this;
        const tags = entity?.getTags();
        const tamedToPlayer = tags?.some(e => e.includes(player.id));
        if (entity?.typeId !== "scb:turret") return;
        if (tamedToPlayer) {
            const entityForms = new form(player, entity, item);
            entityForms.turret();
        }
    }

    turretPush() {
        const { entity } = this;
        if (entity?.typeId !== "scb:turret") return;
        if (!entity.hasTag('turretTarget')) return;
        entity?.removeTag('turretTarget');
        const target = entity?.target;
        const view = entity?.getViewDirection();
        target?.applyImpulse({ x: view.x / 8, y: view.y * 0, z: view.z / 8 })
    }

    setPassword() {
        const { entity, player, item } = this;
        if (entity.typeId.includes('keypad')) {
            const entityForms = new form(player, entity, undefined);
            entityForms.setPassword();
        }
    }

    putPassword() {
        const { entity, player, item } = this;
        if (entity.typeId.includes('keypad')) {
            const entityForms = new form(player, entity, item);
            entityForms.putPassword();
        }
    }

    trophySystem() {
        const { entity } = this;
        const { dimension, location: loc } = entity;
        if (entity.typeId !== 'scb:trophy_system') return;
        const projectiles = dimension.getEntities({
            location: loc,
            maxDistance: 6
        }).filter(projectile => projectile.hasComponent('minecraft:projectile'));
        projectiles.forEach(projectile => {
            const { dimension: dim, location: loca } = projectile;
            dim.spawnParticle('minecraft:critical_hit_emitter', loca);
            dim.playSound('random.break', loca, { volume: 2 });
            projectile.remove();
        });
    }

    scannerAccess() {
        const { entity } = this;
        const scanner = entity.getBlockFromViewDirection({
            includeTypes: [ "scb:scanner" ], maxDistance: 3 
        });
        if (scanner?.block) {
            const { location: loc, dimension } = scanner.block;
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
            const owner = db.getOwner(loc, entity.id);
            if (owner && !entity.hasTag('scanner_cooldown')) {
                entity.addTag('scanner_cooldown');
                doors.forEach(door => {
                    doorManager.interactWithDoor(door);
                });
                system.runTimeout(() => {
                    entity.removeTag('scanner_cooldown');
                    doors.forEach(door => {
                        doorManager.interactWithDoor(door);
                    });
                }, 40);
            }
        }
    }
}

export default EntityUtils;