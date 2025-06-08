import { Block, Entity, ItemStack, Player, Vector3, world } from "@minecraft/server";

class DataBase {
    /**
    @throws Set a dynamic property
    **/
    static set(identifier: string, value?: string | number | boolean | Vector3) {
        world.setDynamicProperty(identifier, value);
    }
    /**
    @throws Get dynamic property
    **/
    static get(identifier: string) {
        let property = world.getDynamicProperty(identifier);
        return property;
    }
    /**
    @throws Get all the dynamic properties id
    **/
    static getIds() {
        let ids = world.getDynamicPropertyIds();
        return ids;
    }
    /**
    @throws Delete a dynamic property
    **/
    static deleteOwner(location: Vector3, player: Player, block: Block) {
        const list = this.getIds();
        const pos = this.pos(location);
        const id = `${pos.x} ${pos.y} ${pos.z}`;
        const exists = list.find(e => e === id);

        if (exists) {
            const owner = this.get(id) as string;
            if (owner.includes(player.id)) {
                if (block.typeId === 'scb:reinforced_door') {
                    block.dimension.spawnItem(new ItemStack(block.typeId + '_item'), player.location);
                    block.setType('air');
                    this.set(id, '');
                }
                else {
                    block.dimension.spawnItem(new ItemStack(block.typeId), player.location);
                    block.setType('air');
                    this.set(id, '');
                }
            }
        }
    }
    /**
    @throws Set owner to a player
    **/
    static setOwner(location: Vector3, player: Player, type: string, name?: string) {
        const list = this.getIds();
        const pos = this.pos(location);
        const id = `${pos.x} ${pos.y} ${pos.z}`;
        const value = `${type}:${player.id}:${player.name}:${name}:${pos.x} ${pos.y} ${pos.z}`;
        const exists = list.find(e => e === id);
        if (!exists) this.set(id, value);
        else {
            const hasOwner = this.get(id);
            if (typeof hasOwner === 'string') {
                if (hasOwner === '') {
                    this.set(id, value);
                    player.playSound('armor.equip_chain', { pitch: 0.6, volume: 1 });
                }
            }
        }
    }
    /**
    @throws Gets the owner
    **/
    static getOwner(location: Vector3, playerId: string) {
        const block = this.get(`${location.x} ${location.y} ${location.z}`);
        if (block?.toString().includes(playerId)) {
            return true;
        }
        else return false;
    }
    /**
    @throws Gets the owner
    **/
   static deleteOwnerUniversal(location: Vector3, block: Block) {
    const id = `${location.x} ${location.y} ${location.z}`;
    this.set(id, '');
    block.setType('air');
   }
    /**
    @throws Get a simplified location
    **/
    static pos(location: Vector3) {
        const pos = {
            x: location.x,
            y: location.y,
            z: location.z
        };
        return pos;
    }
}

export default DataBase;