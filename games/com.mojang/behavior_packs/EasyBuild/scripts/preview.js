import { previews, selection } from "maps";
import { getBlockFromView } from "functions";

export function showConePreview(dimension, baseCenter, height, baseRadius, source, direction = "up", mode) {
    const hologramLocs = [];

    for (let step = 0; step <= height; step++) {
        const dy = direction === "up" ? step : -step;
        const y = baseCenter.y + dy;
        const localRadius = baseRadius * (1 - (step / height));

        const minX = Math.round(baseCenter.x - localRadius);
        const maxX = Math.round(baseCenter.x + localRadius);
        const minZ = Math.round(baseCenter.z - localRadius);
        const maxZ = Math.round(baseCenter.z + localRadius);

        for (let x = minX; x <= maxX; x++) {
            for (let z = minZ; z <= maxZ; z++) {
                const dx = x - baseCenter.x;
                const dz = z - baseCenter.z;
                const dist = Math.sqrt(dx * dx + dz * dz);

                if (dist <= localRadius + 0.5) {
                    const loc = { x, y, z };
                    const block = dimension.getBlock(loc);
                    if (!block) continue;

                    const BlockId = block.typeId;
                    const isAir = BlockId === "minecraft:air";

                    if (mode === "build") {
                        if (BlockId !== "gao:hologram_block") {
                            hologramLocs.push({ loc, original: block.permutation });
                            block.setType("gao:hologram_block");
                        }
                    } else if (mode === "destruct") {
                        if (!isAir && BlockId !== "gao:hologram_block_v2") {
                            hologramLocs.push({ loc, original: block.permutation });
                            block.setType("gao:hologram_block_v2");
                        }
                    }
                }
            }
        }
    }

    previews.set(source.id, hologramLocs);
}

export function showSpherePreview(dimension, center, radius, source, mode) {
    const hologramLocs = [];

    const minX = Math.floor(center.x - radius);
    const maxX = Math.floor(center.x + radius);
    const minY = Math.floor(center.y - radius);
    const maxY = Math.floor(center.y + radius);
    const minZ = Math.floor(center.z - radius);
    const maxZ = Math.floor(center.z + radius);

    for (let x = minX; x <= maxX; x++) {
        for (let y = minY; y <= maxY; y++) {
            for (let z = minZ; z <= maxZ; z++) {
                const dx = x - center.x;
                const dy = y - center.y;
                const dz = z - center.z;
                const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (distance <= radius + 0.5) {
                    const loc = { x, y, z };
                    const block = dimension.getBlock(loc);
                    if (!block) continue;

                    const BlockId = block.typeId;
                    const isAir = BlockId === "minecraft:air";

                    if (mode === "build") {
                        if (BlockId !== "gao:hologram_block") {
                            hologramLocs.push({ loc, original: block.permutation });
                            block.setType("gao:hologram_block");
                        }
                    } else if (mode === "destruct") {
                        if (!isAir && BlockId !== "gao:hologram_block_v2") {
                            hologramLocs.push({ loc, original: block.permutation });
                            block.setType("gao:hologram_block_v2");
                        }
                    }
                }
            }
        }
    }

    previews.set(source.id, hologramLocs);
}

export function showCuboidPreview(dimension, startLoc, endLoc, source, mode) {
    const hologramLocs = [];

    const minX = Math.min(startLoc.x, endLoc.x);
    const maxX = Math.max(startLoc.x, endLoc.x);
    const minY = Math.min(startLoc.y, endLoc.y);
    const maxY = Math.max(startLoc.y, endLoc.y);
    const minZ = Math.min(startLoc.z, endLoc.z);
    const maxZ = Math.max(startLoc.z, endLoc.z);

    for (let x = minX; x <= maxX; x++) {
        for (let y = minY; y <= maxY; y++) {
            for (let z = minZ; z <= maxZ; z++) {
                const loc = { x, y, z };
                const block = dimension.getBlock(loc);
                if (!block) continue;

                const BlockId = block.typeId;
                const isAir = BlockId === "minecraft:air";

                if (mode === "build") {
                    if (BlockId !== "gao:hologram_block") {
                        hologramLocs.push({ loc, original: block.permutation });
                        block.setType("gao:hologram_block");
                    }
                } else if (mode === "destruct") {
                    if (!isAir && BlockId !== "gao:hologram_block_v2") {
                        hologramLocs.push({ loc, original: block.permutation });
                        block.setType("gao:hologram_block_v2");
                    }
                }
            }
        }
    }

    previews.set(source.id, hologramLocs);
}

export function clearActivePreview(player) {
    const holograms = previews.get(player.id);
    if (!holograms) return;

    for (const { loc, original } of holograms) {
        const block = player.dimension.getBlock(loc);
        if (block && block.typeId.includes("gao:hologram_block")) {
            block.setPermutation(original);
        }
    }

    previews.delete(player.id);
}

export function updateHologram(player) {
    const id = player.id;
    const startLoc = selection.get(id);
    if (!startLoc) return;

    const headLoc = player.getHeadLocation();
    const viewDir = player.getViewDirection();
    const block = getBlockFromView(player, headLoc, viewDir, 5);
    if (!block) return;

    const endLoc = block.location;
    const dim = block.dimension;

    const heldItem = player.getComponent("minecraft:inventory").container.getItem(player.selectedSlotIndex);
    if (!heldItem) return;

    clearActivePreview(player);

    if (player.hasTag("gao:spherical") || player.hasTag("gao:spherical_destruction")) {
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

        const mode = player.hasTag("gao:spherical") ? "build" : "destruct";
        showSpherePreview(dim, center, radius, player, mode);
    } else if (player.hasTag("gao:conical") || player.hasTag("gao:conical_destruction")) {
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

        const mode = player.hasTag("gao:conical") ? "build" : "destruct";

        showConePreview(dim, baseCenter, height, baseRadius, player, direction, mode);
    } else if (player.hasTag("gao:rectangular") || player.hasTag("gao:rectangular_destruction")) {
        
        const mode = player.hasTag("gao:rectangular") ? "build" : "destruct";
        showCuboidPreview(dim, startLoc, endLoc, player, mode);
    }
}
