import { world, Player, ItemStack, Block, Entity, Vector3, EntityInventoryComponent, Container, system } from "@minecraft/server";
import { WarnMessage } from "./Tools";
import DataBase from "./DataBase";
import ItemFormUtils from "./ItemFormUtils";

const db = DataBase;
const form = ItemFormUtils;

class ItemUtils {
    private item: ItemStack | undefined;
    private player: Player;
    private block: Block | undefined;
    private inv: Container;

    constructor(item: ItemStack | undefined, player: Player, block: Block | undefined) {
        this.item = item;
        this.player = player;
        this.block = block;
        this.inv = player.getComponent('inventory')?.container;
    }
    // Reforzar bloques (Mismo sistema debe usarse para cosas del security)
    reinforceBlock() {
        const { item, player, block } = this;
        const { location, dimension } = block;
        if (item?.typeId !== 'scb:reinforcer' || block.typeId.includes('scb:')) return;
        const owner = db.getOwner(location, player.id);
        if (owner) return;
        db.setOwner(location, player, 'block');
        player.playSound('armor.equip_chain', { pitch: 0.6 });
    }
    // Remover bloques reforzados (Mismo sistema debe usarse para cosas del security)
    removeReinforcedBlock() {
        const { item, player, block } = this;
        const { location, dimension } = block;
        if (item?.typeId !== 'scb:remover') return;
        const owner = db.getOwner(location, player.id);
        if (!owner) return;
        db.deleteOwner(location, player, block);
        db.set(`${location.x} ${location.y} ${location.z}:password`, false);
        db.set(`${location.x} ${location.y} ${location.z}:locked`, false);
        player.playSound('block.stonecutter.use');
    }
    // Remove SCB Blocks
    removeScbBlocks() {
        const { player, block, inv } = this;
        const { location, dimension } = block;
        const item = inv.getItem(player.selectedSlotIndex);
        if (item?.typeId !== 'scb:remover') return;
        const owner = db.getOwner(location, player.id);
        if (!owner) return;
        db.deleteOwner(location, player, block);
        db.set(`${location.x} ${location.y} ${location.z}:password`, false);
        db.set(`${location.x} ${location.y} ${location.z}:locked`, false);
        player.playSound('block.stonecutter.use');
    }
    // Place turret
    placeTurret() {
        const { player, item, inv, block } = this;
        const { location, dimension } = block;
        const pos = {
            x: location.x,
            y: location.y + 1,
            z: location.z
        };
        if (item?.typeId !== 'scb:turret_item') return;
        this.setItemStack();
        this.setTamed('scb:turret', player);
    }
    // Turret Module
    turretModule() {
        const { item, player } = this;
        if (item?.typeId !== 'scb:turret_module') return;
        const itemForms = new form(player, item, undefined, undefined);
        itemForms.turretModule();
    }

    // Mine Module
    mineModule() {
        const { item, player } = this;
        if (item?.typeId !== 'scb:mine_module') return;
        const itemForms = new form(player, item, undefined, undefined);
        itemForms.mineModule();
    }

    // Camera Module

    cameraModule() {
        const { item, player } = this;
        if (item?.typeId !== 'scb:tablet') return;
        const itemForms = new form(player, item, undefined, undefined);
        itemForms.cameraModule();
    }

    // Place scb thing tamed
    setTamed(entityId: string, player: Player) {
        const { block } = this;
        const { location, dimension } = block;
        const pos = {
            x: location.x + 0.5,
            y: location.y + 1,
            z: location.z + 0.5
        } as Vector3;
        const entity = dimension.spawnEntity(entityId, pos);
        const tameable = entity.getComponent('tameable');
        const tag = `${player.id}:${player.name}`;
        entity.addTag(tag);
        tameable.tame(player);
    }

    setItemStack() {
        const { player, item, inv } = this;
        const { selectedSlotIndex } = player;
        if (item.amount > 1) {
            inv.setItem(selectedSlotIndex, new ItemStack(item.typeId, item.amount - 1));
        }
        else {
            inv.setItem(selectedSlotIndex, undefined);
        }
    }

    transferContainer() {
        const { player, item } = this;
        const { dimension } = player;
        const chest = player.getEntitiesFromViewDirection({ maxDistance: 8 })[0]?.entity;
        if (!chest?.typeId.includes('reinforced_chest')) return;
        if (item?.typeId !== 'scb:universal_chest_transferer') return;
        const container = chest?.getComponent('inventory')?.container;
        const reinforcedChest = dimension.getBlock(chest.location);
        db.deleteOwnerUniversal(chest.location, reinforcedChest);
        const loc = { x: chest.location.x, y: chest.location.y + 1, z: chest.location.z };
        const loc2 = { x: chest.location.x, y: chest.location.y + 1, z: chest.location.z };
        dimension.setBlockType(loc, 'chest');
        const chestBlock = dimension.getBlock(loc);
        const chestInventory = chestBlock?.getComponent('inventory')?.container;
        for (let i = 0; i < container?.size; i++) {
            if (i > 26) {
                dimension.setBlockType(loc, 'chest');
                const chestBlock2 = dimension.getBlock(loc2);
                const chestInventory2 = chestBlock2?.getComponent('inventory')?.container;
                container.transferItem(i, chestInventory2);
            }
            else {
                container.transferItem(i, chestInventory);
            }
        }
        chest.remove();
    }

    universalRemover() {
        const { player, block, inv } = this;
        const { dimension, location } = block;
        const item = inv.getItem(player.selectedSlotIndex);
        if (item?.typeId !== 'scb:universal_block_remover') return;
        db.set(`${location.x} ${location.y} ${location.z}:password`, false);
        db.set(`${location.x} ${location.y} ${location.z}:locked`, false);
        db.deleteOwnerUniversal(location, block);
        player.playSound('block.stonecutter.use');
    }
}

export default ItemUtils;