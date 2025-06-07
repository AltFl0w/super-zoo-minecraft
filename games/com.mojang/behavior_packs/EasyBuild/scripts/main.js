import { world, system, BlockVolume } from "@minecraft/server";

import { directions, addVec3, getBlockFromView, isBlock, getMode } from "functions";
import { clearActivePreview, updateHologram } from "preview";
import { fillSphere, fillCone } from "fill";
import { selection, air, positions, posCount } from "maps";

world.afterEvents.itemStartUseOn.subscribe((event) => {
    const { source, block, blockFace, itemStack } = event;

    const tags = source.getTags();
    const buildTags = tags.filter((tag) => tag.startsWith("gao:"))

    if (isBlock(itemStack.typeId) && buildTags.length > 0) {
        let finalBlock;
        for (const { name, vec } of directions) {
            if (blockFace === name) {
                finalBlock = block.dimension.getBlock(addVec3(block.location, vec));
            }
        }

        if (!finalBlock) return;

        selection.set(source.id, finalBlock.location);
        source.addTag("blockHologram");
    }
});

world.afterEvents.itemStopUseOn.subscribe((event) => {
    const { source, itemStack } = event;

    if (isBlock(itemStack.typeId) || itemStack.typeId === "minecraft:stick") {

        const blockType = itemStack.typeId === "minecraft:stick" ? "minecraft:air" : itemStack.typeId;
      
        const id = source.id;
        const startLoc = selection.get(id);

        const headLoc = source.getHeadLocation();
        const viewDir = source.getViewDirection();
        const block = getBlockFromView(source, headLoc, viewDir, 5);
        if (!block || !startLoc) return;

        const endLoc = block.location;
        const dim = block.dimension;

        if (source.hasTag("gao:spherical") || source.hasTag("gao:spherical_destruction")) {
            const center = {
                x: Math.floor((startLoc.x + endLoc.x) / 2),
                y: Math.floor((startLoc.y + endLoc.y) / 2),
                z: Math.floor((startLoc.z + endLoc.z) / 2),
            };

            const radius = Math.floor(
                Math.max(
                    Math.abs(endLoc.x - startLoc.x),
                    Math.abs(endLoc.y - startLoc.y),
                    Math.abs(endLoc.z - startLoc.z)
                ) / 2
            );

            source.dimension.getBlock(startLoc).setType("air");
            const mode = source.hasTag("gao:spherical") ? "build" : "destruct";
            fillSphere(dim, center, radius, blockType, mode);
        } else if (source.hasTag("gao:conical") || source.hasTag("gao:conical_destruction")) {
            const dy = endLoc.y - startLoc.y;
            const direction = dy >= 0 ? "up" : "down";

            const height = Math.abs(dy);
            const baseRadius = Math.floor(
                Math.max(
                    Math.abs(endLoc.x - startLoc.x),
                    Math.abs(endLoc.z - startLoc.z)
                ) / 2
            );

            const baseCenter = {
                x: Math.floor((startLoc.x + endLoc.x) / 2),
                y: startLoc.y,
                z: Math.floor((startLoc.z + endLoc.z) / 2),
            };

            source.dimension.getBlock(startLoc).setType("air");
            const mode = source.hasTag("gao:conical") ? "build" : "destruct";
            fillCone(dim, baseCenter, height, baseRadius, blockType, direction, mode);
        } else if (source.hasTag("gao:rectangular") || source.hasTag("gao:rectangular_destruction")) {
            const vol = new BlockVolume(startLoc, endLoc);
            const blockReplace = source.hasTag("gao:rectangular") ? blockType : "minecraft:air";
            dim.fillBlocks(vol, blockReplace);
        }

        selection.delete(id);
        source.removeTag("blockHologram");
    }
});

system.runInterval(() => {
    for (const player of world.getPlayers()) {
        if (player.hasTag("blockHologram")) {
            const heldItem = player.getComponent("minecraft:inventory").container.getItem(player.selectedSlotIndex);
            const isHoldingBlock = heldItem && isBlock(heldItem.typeId);

            if (isHoldingBlock) {
                updateHologram(player);
            } else {
                clearActivePreview(player);
                selection.delete(player.id);
                player.removeTag("blockHologram");
            }
        } else {
            clearActivePreview(player);
            selection.delete(player.id);
        }

        if (player.hasTag("gao:air")) {
            const headLoc = player.getHeadLocation();
            const viewDir = player.getViewDirection();
            const block = getBlockFromView(player, headLoc, viewDir, 5);
            const blockLoc = block.location;
            air.set(player.id, blockLoc)
        }
    }
}, 2);

world.afterEvents.itemUse.subscribe((event) => {
    const { source, itemStack } = event;

    if (itemStack.typeId==="gao:easy_build") {
        getMode(source)
    }

    if (source.hasTag("gao:air") && isBlock(itemStack.typeId)) {
        const loc = air.get(source.id);
        const blockAtLoc = source.dimension.getBlock(loc);

        if (blockAtLoc.typeId === "minecraft:air") {
            blockAtLoc.setType(itemStack.typeId);
        }
    }

})

world.beforeEvents.playerBreakBlock.subscribe((event) => {
    const { player, block, itemStack } = event;

    if (itemStack.typeId === "minecraft:stick") {
        const loc = block.location;

        if (!posCount.has(player.id)) {
            posCount.set(player.id, {count: 0})
        }

        const data = posCount.get(player.id);

        if (data.count === 0) {
            data.count = 1;
            positions.set(player.id, loc);
            player.sendMessage(`Position 1 set to ${loc.x} ${loc.y} ${loc.z}`);
        } else if (data.count === 1) {
            data.count = 2;
            const loc1 = positions.get(player.id);
            positions.set(player.id, [loc1, loc]);
            player.sendMessage(`Position 2 set to ${loc.x} ${loc.y} ${loc.z}`);
        } else {
            data.count = 1;
            positions.set(player.id, loc);
            player.sendMessage(`Position 1 set to ${loc.x} ${loc.y} ${loc.z}`);
        }

        event.cancel = true;
    }
})