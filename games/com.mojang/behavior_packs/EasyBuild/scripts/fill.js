export function fillCone(dimension, baseCenter, height, baseRadius, blockTypeId, direction = "up", mode) {
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

                    const isAir = block.typeId === "minecraft:air";

                    if (mode === "build") {
                        block.setType(blockTypeId);
                    } else if (mode === "destruct" && !isAir) {
                        block.setType("minecraft:air");
                    }
                }
            }
        }
    }
}

export function fillSphere(dimension, center, radius, blockTypeId, mode) {
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

                    const isAir = block.typeId === "minecraft:air";

                    if (mode === "build") {
                        block.setType(blockTypeId);
                    } else if (mode === "destruct" && !isAir) {
                        block.setType("minecraft:air");
                    }
                }
            }
        }
    }
}