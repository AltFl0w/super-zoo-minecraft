import { world, Player, ItemStack, Block, Entity, Vector3, EntityInventoryComponent, Container, system, EntityProjectileComponent, PlayerPlaceBlockBeforeEvent } from "@minecraft/server";
import { WarnMessage } from "./Tools";
import DataBase from "./DataBase";
import ItemFormUtils from "./ItemFormUtils";
import doorManager from "./ScbDoor";
import pistonsConfig from "config";

const db = DataBase;
const form = ItemFormUtils;

class BlockUtils {
    private block: Block;
    private player?: Player | Entity;
    private scb?: PlayerPlaceBlockBeforeEvent;
    private inv: Container;
    private item: ItemStack | undefined;

    constructor(block: Block, player?: Player | Entity, scb?: PlayerPlaceBlockBeforeEvent) {
        this.block = block;
        this.player = player;
        this.scb = scb;
        this.inv = player?.getComponent('inventory')?.container;
        this.item = this.inv?.getItem((player as Player)?.selectedSlotIndex);
    }

    // Mine Config
    setMine() {
        const { player, block } = this;
        if (block.typeId !== 'scb:mine') return;
        const itemForms = new form(player as Player, undefined, undefined, block);
        itemForms.setName();
    }

    // Camera Config
    setCamera() {
        const { player, block } = this;
        if (block.typeId !== 'scb:security_camera') return;
        const itemForms = new form(player as Player, undefined, undefined, block);
        itemForms.setName();
    }

    // Explode Mine
    explodeMine() {
        const { player, block } = this;
        const { dimension, location } = block;
        if (block.typeId !== 'scb:mine') return;
        if (player instanceof Player) {
            db.deleteOwner(location, player, block);;
            dimension.createExplosion(location, 4, {
                causesFire: true
            });
        }
    }

    // Set inventory chest
    setReinforcedChest() {
        const { player, block } = this;
        const { dimension, location: loc } = block;
        if (!block.typeId.includes('scb:reinforced_chest')) return;
        if (block.typeId === 'scb:reinforced_chest') {
            const chest = dimension.spawnEntity('scb:reinforced_chest', {
                x: loc.x + 0.5,
                y: loc.y,
                z: loc.z + 0.5
            });
            chest.getComponent('tameable').tame(player as Player);
            chest.nameTag = (player as Player).name + "'s Chest";
        }
        else {
            const chest = dimension.spawnEntity('scb:reinforced_chest_keypad', {
                x: loc.x + 0.5,
                y: loc.y,
                z: loc.z + 0.5
            });
            chest.nameTag = (player as Player).name + "'s Chest";
        }
    }

    // Set scanner reinforced
    setScanner() {
        const { player, block } = this;
        const { dimension, location: loc } = block;
        if (block.typeId !== ('scb:scanner')) return;
        const type = block.typeId.split(':')[1];
        db.setOwner(block.location, player as Player, type);
    }

    // Set keypad reinforced
    setKeypad() {
        const { player, block } = this;
        const { dimension, location: loc } = block;
        if (block.typeId !== ('scb:keypad')) return;
        const type = block.typeId.split(':')[1];
        db.setOwner(block.location, player as Player, type);
        db.set(`${loc.x} ${loc.y} ${loc.z}:password`, false);
    }

    // Set reinforced door

    setReinforcedDoor() {
        const { player, block } = this;
        const { dimension, location: loc } = block;
        if (block.typeId !== ('scb:reinforced_door')) return;
        const type = block.typeId.split(':')[1];
        const top = { x: loc.x, y: loc.y + 1, z: loc.z };
        db.setOwner(loc, player as Player, type);
    }

    // Trophy System

    setTrophySystem() {
        const { player, block } = this;
        const { dimension, location: loc } = block;
        if (block.typeId !== 'scb:trophy_system') return;
        const type = block.typeId.split(':')[1];
        const hide = block.permutation.withState('scb:visible', 1);
        block.setPermutation(hide);
        db.setOwner(block.location, player as Player, type);
        dimension.spawnEntity('scb:trophy_system', {
            x: loc.x + 0.5,
            y: loc.y,
            z: loc.z + 0.5
        });
    }

    // Keycard reader

    setKeycardReader() {
        const { player, block } = this;
        const { dimension, location: loc } = block;
        if (block.typeId !== 'scb:keycard_reader') return;
        const type = block.typeId.split(':')[1];
        db.setOwner(block.location, player as Player, type);
        db.set(`${loc.x} ${loc.y} ${loc.z}:reader_active`, false);
    }

    getNewCard() {
        const { player, block } = this;
        const { dimension, location: loc } = block;
        if (block.typeId !== 'scb:keycard_reader') return;
        if (this.item?.typeId === 'scb:keycard') {
            const lore0 = this.item?.getLore().length === 0;
            if (!lore0) return;
            const isOwner = db.getOwner(loc, player.id);
            if (!isOwner) return;
            this.item?.setLore([`Owner: ${(player as Player).name}`]);
            this.item?.setDynamicProperty('scb:owner', player.id);
            this.inv.setItem((player as Player).selectedSlotIndex, this.item);
        }
    }

    cardAccess() {
        const { player, block } = this;
        const { dimension, location: loc } = block;
        const active = db.get(`${loc.x} ${loc.y} ${loc.z}:reader_active`) as boolean;
        if (active) return;
        if (block.typeId !== 'scb:keycard_reader') return;
        if (this.item?.typeId === 'scb:keycard') {
            const hasLore = this.item.getLore().length > 0;
            if (!hasLore) return;
            const owner = this.item.getDynamicProperty('scb:owner') as string;
            const isOwner = db.getOwner(loc, owner);
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
            if (isOwner) {
                db.set(`${loc.x} ${loc.y} ${loc.z}:reader_active`, true);
                (player as Player).sendMessage('§2Unlocked!');
                block.setPermutation(block.permutation.withState('scb:active', 1));
                doors.forEach(door => {
                    doorManager.interactWithDoor(door);
                });
                system.runTimeout(() => {
                    db.set(`${loc.x} ${loc.y} ${loc.z}:reader_active`, false);
                    block.setPermutation(block.permutation.withState('scb:active', 0));
                    doors.forEach(door => {
                        doorManager.interactWithDoor(door);
                    });
                }, 40);
            }
            else {
                (player as Player).sendMessage('§cAccess denied!');
            }
        }
    }

    removePiston() {
        const { block, scb } = this;
        const { location: blockLoc } = block;
        const blockid = block.typeId;
        if (!this.item?.typeId.includes("piston")) return;
        if (!pistonsConfig.active) return;
        const distance = pistonsConfig.distance;
        for (let x = -distance; x <= distance; x++) {
          for (let y = -distance; y <= distance; y++) {
            for (let z = -distance; z <= distance; z++) {
              const currentLocation = {
                x: blockLoc.x + x,
                y: blockLoc.y + y,
                z: blockLoc.z + z,
              };
              const reinforced = world
                .getDynamicPropertyIds()
                .find((e) =>
                  e.includes(
                    `${currentLocation.x} ${currentLocation.y} ${currentLocation.z}`
                  )
                );
              if (reinforced === "" || reinforced === undefined) continue;
              scb.cancel = true;
            }
          }
        }
      }

    waila() {
        const { player, block, item } = this;
        const { dimension, location: loc } = block;
        const info = db.get(`${loc.x} ${loc.y} ${loc.z}`)?.toString();
        if (item || item?.typeId === 'scb:remover') return;
        if (info) {
                const [type,,owner,,loca] = info.split(':');
                const format = `§bBlock: ${block.typeId}\n§cOwner: ${owner}\n§dLocation: ${loca}`;
                player.onScreenDisplay.setActionBar(format);
            }
        }
    }

export default BlockUtils;