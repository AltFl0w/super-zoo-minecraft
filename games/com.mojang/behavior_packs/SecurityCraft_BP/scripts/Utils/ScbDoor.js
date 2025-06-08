import { world, system, MinecraftDimensionTypes, ItemStack, BlockPermutation } from '@minecraft/server';
import DataBase from './DataBase';
const db = DataBase;
function dimensionToHeight(dimension) {
    const heights = [
        {
            id: MinecraftDimensionTypes.overworld,
            maxHeight: 320
        },
        {
            id: MinecraftDimensionTypes.nether,
            maxHeight: 128
        },
        {
            id: MinecraftDimensionTypes.theEnd,
            maxHeight: 256
        }
    ];
    const data = heights.find((f) => f.id == dimension);
    if (data != undefined) {
        //return the Y value
        return data.maxHeight;
    }
    else
        return undefined;
}
const blockComps = [
    //define the block component
    {
        //the id of the block component
        id: "scb:door",
        //the code of the block component
        code: {
            onTick: (data) => {
                const block = data.block;
                if (!block)
                    return;
                const doordata = doorManager.doors.find((f) => f.id == block.typeId);
                const topHalf = block.permutation.getState("scb:upper_block_bit");
                let doorPart = undefined;
                if (topHalf == false) {
                    //gets the block above
                    try {
                        doorPart = block.above(1);
                    }
                    catch { }
                }
                else
                    try {
                        doorPart = block.below(1);
                    }
                    catch { } //gets the block below
                if (doorPart == undefined) {
                    if (topHalf == true) {
                        block.setPermutation(BlockPermutation.resolve("minecraft:air"));
                    }
                    else {
                        if (doordata) {
                            const item = new ItemStack(doordata.itemID, 1);
                            spawnItemAnywhere(item, block.location, block.dimension);
                        }
                        block.setPermutation(BlockPermutation.resolve("minecraft:air"));
                    }
                }
                else if (!doorPart.hasTag(doorManager.doorTag)) {
                    if (topHalf == true) {
                        block.setPermutation(BlockPermutation.resolve("minecraft:air"));
                    }
                    else {
                        if (doordata) {
                            const item = new ItemStack(doordata.itemID, 1);
                            spawnItemAnywhere(item, block.location, block.dimension);
                        }
                        block.setPermutation(BlockPermutation.resolve("minecraft:air"));
                    }
                }
            },
            //on interact with door
            onPlayerInteract: (data) => {
                //interact with the door
                // doorManager.interactWithDoor(data.block)
                // doorManager.removeDoor(data.block, data.player);
            },
            //on place door
            beforeOnPlayerPlace: (data) => {
                const { block, player, dimension, permutationToPlace } = data;
                const loc = block.location;
                //if the aboveBlock location is higher than the max height of the dimension, cancel the placement
                if (loc.y + 1 >= dimensionToHeight(dimension.id)) {
                    data.cancel = true;
                    return;
                }
                let blockAbove = undefined;
                let blockBelow = undefined;
                try {
                    blockBelow = dimension.getBlock({ x: loc.x, y: loc.y - 1, z: loc.z });
                }
                catch { }
                //if the below block is undefined, cancel the placement
                if (blockBelow == undefined) {
                    data.cancel = true;
                    return;
                }
                //if the belowBlock is air or liquid, cancel the placement
                if (blockBelow.isAir || blockBelow.isLiquid) {
                    data.cancel = true;
                    return;
                }
                try {
                    blockAbove = dimension.getBlock({ x: loc.x, y: loc.y + 1, z: loc.z });
                }
                catch { }
                //if the above block is undefined, cancel the placement
                if (blockAbove == undefined) {
                    data.cancel = true;
                    return;
                }
                if ((blockAbove.isAir || blockAbove.isLiquid)) {
                    doorManager.placeDoor(block, blockAbove);
                }
                else {
                    //if the aboveBlock isn't air or liquid, cancel the placement
                    data.cancel = true;
                    return;
                }
            }
        }
    }
];
function spawnItemAnywhere(item, location, dimension) {
    //spawn the item at y100
    const itemEntity = dimension.spawnItem(item, { x: location.x, y: 100, z: location.z });
    //tp the item to the specified location
    itemEntity.teleport(location);
    //return the itemEntity
    return itemEntity;
}
class doorManager {
    //interact with a door block
    static removeDoor(block, player) {
        const dim = block.dimension;
        const loc = block.location;
        const inv = player.getComponent('inventory').container;
        const itemStack = inv.getItem(player.selectedSlotIndex);
        if (itemStack?.typeId !== 'scb:remover')
            return;
        const owner = db.getOwner(loc, player.id);
        if (owner) {
            block.setType('air');
        }
    }
    static interactWithDoor(block) {
        const dim = block.dimension;
        const loc = block.location;
        //get the top half of the block
        const topHalf = block.permutation.getState("scb:upper_block_bit");
        //get if the block is open or not
        const open = block.permutation.getState("scb:open_bit");
        let doorPart = undefined;
        if (topHalf == false) {
            //gets the block above
            try {
                doorPart = block.above(1);
            }
            catch { }
        }
        else
            try {
                doorPart = block.below(1);
            }
            catch { } //gets the block below
        //checks if the doorPart is undefined
        if (doorPart != undefined) {
            const data = this.doors.find((f) => f.id == block.typeId);
            let bool = false;
            if (open == true) {
                //play the close sound and set the bool constant to false
                if (data != undefined && data.closeSound != undefined)
                    dim.playSound(data.closeSound.id, loc, { pitch: data.closeSound.pitch, volume: data.closeSound.volume });
                bool = false;
            }
            else {
                //play the open sound and set the bool constant to true
                if (data != undefined && data.openSound != undefined)
                    dim.playSound(data.openSound.id, loc, { pitch: data.openSound.pitch, volume: data.openSound.volume });
                bool = true;
            }
            const blocks = [block, doorPart];
            for (const door of blocks) {
                //sets the open state
                try {
                    door.setPermutation(door.permutation.withState("scb:open_bit", bool));
                }
                catch { }
            }
        }
    }
    static breakDoor(blockID, block, topHalf) {
        //does this stuff a tick later
        system.runTimeout(() => {
            let doorPart = undefined;
            if (topHalf == false) {
                try {
                    doorPart = block.above(1);
                }
                catch { }
            }
            else
                try {
                    doorPart = block.below(1);
                }
                catch { }
            //sets the doorPart to air
            if (doorPart != undefined && doorPart.hasTag(this.doorTag))
                doorPart.setPermutation(BlockPermutation.resolve("minecraft:air"));
            //gets the door data
            const data = this.doors.find((f) => f.id == blockID);
            if (data == undefined)
                return;
            const item = new ItemStack(data.itemID, 1);
            const loc = block.location;
            spawnItemAnywhere(item, { x: loc.x + 0.5, y: loc.y + 0.5, z: loc.z + 0.5 }, block.dimension); //spawns the item
            block.setPermutation(BlockPermutation.resolve("minecraft:air")); //sets the main block to air
        });
    }
    static placeDoor(block, aboveBlock) {
        //does this stuff a tick later
        system.runTimeout(() => {
            let reversed = false;
            const facing = block.permutation.getState("minecraft:cardinal_direction");
            switch (facing) {
                case "north":
                    try {
                        const otherblock = block.west(1);
                        if (otherblock.typeId.includes("door")) {
                            const otherfacing = otherblock.permutation.getState("minecraft:cardinal_direction");
                            if (otherfacing == facing) {
                                reversed = true;
                            }
                        }
                    }
                    catch { }
                    break;
                case "south":
                    try {
                        const otherblock = block.east(1);
                        if (otherblock.typeId.includes("door")) {
                            const otherfacing = otherblock.permutation.getState("minecraft:cardinal_direction");
                            if (otherfacing == facing) {
                                reversed = true;
                            }
                        }
                    }
                    catch { }
                    break;
                case "east":
                    try {
                        const otherblock = block.north(1);
                        if (otherblock.typeId.includes("door")) {
                            const otherfacing = otherblock.permutation.getState("minecraft:cardinal_direction");
                            if (otherfacing == facing) {
                                reversed = true;
                            }
                        }
                    }
                    catch { }
                    break;
                case "west":
                    try {
                        const otherblock = block.south(1);
                        if (otherblock.typeId.includes("door")) {
                            const otherfacing = otherblock.permutation.getState("minecraft:cardinal_direction");
                            if (otherfacing == facing) {
                                reversed = true;
                            }
                        }
                    }
                    catch { }
                    break;
            }
            block.setPermutation(block.permutation.withState("scb:reversed", reversed));
            aboveBlock.setPermutation(BlockPermutation.resolve(block.typeId)); //sets aboveBlock to the main block typeId
            aboveBlock.setPermutation(aboveBlock.permutation.withState("scb:upper_block_bit", true)); //sets the upper block bit state to true
            aboveBlock.setPermutation(aboveBlock.permutation
                .withState("minecraft:cardinal_direction", facing)
                .withState("scb:reversed", reversed)); //sets the facing direction to the main blocks facing direction
        });
    }
}
//set the door tag
doorManager.doorTag = "scb:is_door";
doorManager.doors = [
    //door data
    {
        //the typeId of the block
        id: "scb:reinforced_door",
        //the typeId of the item
        itemID: "scb:reinforced_door_item",
        //the opening sound data
        openSound: {
            id: "open.wooden_door",
            volume: 1,
            pitch: 1
        },
        //the closing sound data
        closeSound: {
            id: "close.wooden_door",
            volume: 1,
            pitch: 1
        }
    }
];
let int = 0;
world.beforeEvents.worldInitialize.subscribe((data) => {
    //needed to stop crashes when leaving the world
    int = int + 1;
    if (int != 1)
        return;
    for (const comp of blockComps) {
        //registers all custom block components
        data.blockComponentRegistry.registerCustomComponent(comp.id, comp.code);
    }
});
export default doorManager;
