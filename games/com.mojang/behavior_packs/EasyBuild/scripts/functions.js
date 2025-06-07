import { BlockTypes, BlockPermutation, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

import { positions, posCount } from "maps";

export const directions = [
    { name: "Up", vec: { x: 0, y: 1, z: 0 } },
    { name: "Down", vec: { x: 0, y: -1, z: 0 } },
    { name: "North", vec: { x: 0, y: 0, z: -1 } },
    { name: "South", vec: { x: 0, y: 0, z: 1 } },
    { name: "West", vec: { x: -1, y: 0, z: 0 } },
    { name: "East", vec: { x: 1, y: 0, z: 0 } },
];

export function addVec3(a, b) {
    return {
        x: a.x + b.x,
        y: a.y + b.y,
        z: a.z + b.z,
    };
}

export function getBlockFromView(player, location, view, distance) {
    const viewDistance = {
        x: view.x * distance,
        y: view.y * distance,
        z: view.z * distance,
    };

    const blockLocation = {
        x: Math.floor(viewDistance.x + location.x),
        y: Math.floor(viewDistance.y + location.y),
        z: Math.floor(viewDistance.z + location.z),
    };

    return player.dimension.getBlock(blockLocation);
}

export function isBlock(typeId) {
    try {
        const blockType = BlockTypes.get(typeId);
        return blockType !== undefined;
    } catch (e) {
        return false;
    }
}

const homeMenu = new ActionFormData()
                .title("Easy Build")
                .body(" Pick a Mode")
                .button("Normal Building/Destruction")
                .button("Build Mode")
                .button("Destruct Mode")
                .button("Clipboard");

const BuildMode = new ActionFormData()
                .title("Easy Build")
                .body(" Pick a Building Mode")
                .button("< Back")
                .button("Air Building")
                .button("Rectangular Building")
                .button("Spherical Building")
                .button('Conical Building');

const DestructMode = new ActionFormData()
                .title("Easy Build")
                .body(" Pick a Destruction Mode")
                .button("< Back")
                .button("Rectangular Destruction")
                .button("Spherical Destruction")
                .button('Conical Destruction');

const clipboard = new ActionFormData()
                .title("Easy Build")
                .body(" Pick a Clipboard Tool")
                .button("< Back")
                .button("Cut")
                .button("Copy")
                .button("Paste");

export function getMode(player) {
    homeMenu.show(player).then((response) => {
        const tags = player.getTags();
        const buildTags = tags.filter((tag) => tag.startsWith("gao:"))

        if (response.selection == 0) {
            if (buildTags.length > 0) {
                player.onScreenDisplay.setActionBar("Switched to Normal Building/Destruction")
                for (const tag of buildTags) {
                    player.removeTag(tag);
                }
            }
        }
        if (response.selection == 1) {
            getBuildMode(player)
        }
        if (response.selection == 2) {
            getDestructMode(player)
        }
        if (response.selection == 3) {
            clipboardMenu(player)
        }
    })
}

function getBuildMode(player) {
    BuildMode.show(player).then((response) => {
        const tags = player.getTags();
        const buildTags = tags.filter((tag) => tag.startsWith("gao:"))

        if (response.selection == 0) {
            getMode(player)
        }
        if (response.selection == 1) {
            changeTag(player, buildTags, "gao:air", "Air Building")
        }
        if (response.selection == 2) {
            changeTag(player, buildTags, "gao:rectangular", "Rectangular Building")
        }
        if (response.selection == 3) {
            changeTag(player, buildTags, "gao:spherical", "Spherical Building")
        }
        if (response.selection == 4) {
            changeTag(player, buildTags, "gao:conical", "Conical Building")
        }
    })
}

function getDestructMode(player) {
    DestructMode.show(player).then((response) => {
        const tags = player.getTags();
        const buildTags = tags.filter((tag) => tag.startsWith("gao:"))

        if (response.selection == 0) {
            getMode(player)
        }
        if (response.selection == 1) {
            changeTag(player, buildTags, "gao:rectangular_destruction", "Rectangular Destruction")
        }
        if (response.selection == 2) {
            changeTag(player, buildTags, "gao:spherical_destruction", "Spherical Destruction")
        }
        if (response.selection == 3) {
            changeTag(player, buildTags, "gao:conical_destruction", "Conical Destruction")
        }
    })
}

function clipboardMenu(player) {
    clipboard.show(player).then((response) => {
        if (response.selection == 0) {
            getMode(player)
        }
        if (response.selection == 1) {
            const pos1 = positions.get(player.id)[0]
            const pos2 = positions.get(player.id)[1]
            cut(player, pos1, pos2)
        }
        if (response.selection == 2) {
            const pos1 = positions.get(player.id)[0]
            const pos2 = positions.get(player.id)[1]
            copy(player, pos1, pos2)
        }
        if (response.selection == 3) { 
            paste(player, player.location)
        }
    })
}

function changeTag(player, tags, newTag, string) {
    if (tags.length > 0) {
        if (!tags.includes(newTag)) { player.onScreenDisplay.setActionBar(`Switched to ${string}`) };
        
        for (const tag of tags) {
            player.removeTag(tag);
        }
        player.addTag(newTag);
    } else if (tags.length === 0) {
        player.onScreenDisplay.setActionBar(`Switched to ${string}`);
        player.addTag(newTag);
    }
}


// CLIPBOARD TOOLS

const clipboards = new Map(); 

function cut(player, pos1, pos2) {
    const dimension = player.dimension;
    const blocks = [];
    const origin = pos1;

    posCount.delete(player.id)

    const minX = Math.min(pos1.x, pos2.x);
    const maxX = Math.max(pos1.x, pos2.x);
    const minY = Math.min(pos1.y, pos2.y);
    const maxY = Math.max(pos1.y, pos2.y);
    const minZ = Math.min(pos1.z, pos2.z);
    const maxZ = Math.max(pos1.z, pos2.z);

    for (let x = minX; x <= maxX; x++) {
        for (let y = minY; y <= maxY; y++) {
            for (let z = minZ; z <= maxZ; z++) {
                const block = dimension.getBlock({ x, y, z });
                if (!block || block.typeId === "minecraft:air") continue;

                blocks.push({
                    offset: { x: x - origin.x, y: y - origin.y, z: z - origin.z },
                    type: block.typeId,
                    states: block.permutation.getAllStates()
                });

                block.setType("minecraft:air");
            }
        }
    }

    clipboards.set(player.id, { origin, blocks });
    
}

function copy(player, pos1, pos2) {
    const dimension = player.dimension;
    const blocks = [];
    const origin = pos1;
    
    posCount.delete(player.id)

    const minX = Math.min(pos1.x, pos2.x);
    const maxX = Math.max(pos1.x, pos2.x);
    const minY = Math.min(pos1.y, pos2.y);
    const maxY = Math.max(pos1.y, pos2.y);
    const minZ = Math.min(pos1.z, pos2.z);
    const maxZ = Math.max(pos1.z, pos2.z);

    for (let x = minX; x <= maxX; x++) {
        for (let y = minY; y <= maxY; y++) {
            for (let z = minZ; z <= maxZ; z++) {
                const block = dimension.getBlock({ x, y, z });
                if (!block || block.typeId === "minecraft:air") continue;

                blocks.push({
                    offset: { x: x - origin.x, y: y - origin.y, z: z - origin.z },
                    type: block.typeId,
                    states: block.permutation.getAllStates()
                });
            }
        }
    }

    clipboards.set(player.id, { origin, blocks });
}

function paste(player, targetPos) {
    const clipboard = clipboards.get(player.id);
    if (!clipboard || !clipboard.blocks.length) return;

    const dimension = player.dimension;

    for (const item of clipboard.blocks) {
        const x = targetPos.x + item.offset.x;
        const y = targetPos.y + item.offset.y;
        const z = targetPos.z + item.offset.z;

        const block = dimension.getBlock({ x, y, z });
        if (!block) continue;

        const permutation = BlockPermutation.resolve(item.type, item.states);
        block.setPermutation(permutation);
    }
}
