import { system, world } from "@minecraft/server";
import BlockFormUtils from "Utils/BlockFormUtils";
import BlockUtils from "Utils/BlockUtils";
import EntityUtils from "Utils/EntityUtils";
import ItemUtils from "Utils/ItemUtils";
import WorldUtils from "Utils/WorldUtils";
import "./Utils/ScbDoor";
world.beforeEvents.worldInitialize.subscribe(scb => {
    scb.blockComponentRegistry.registerCustomComponent('scb:block', {
        onStepOn({ block, entity }) {
            const blocks = new BlockUtils(block, entity);
            blocks.explodeMine();
        },
        onPlayerInteract({ block, player }) {
            const items = new ItemUtils(undefined, player, block);
            const blockUtils = new BlockFormUtils(player, block);
            const blockUtils2 = new BlockUtils(block, player);
            items.removeScbBlocks();
            items.universalRemover();
            blockUtils.setPassword();
            blockUtils.putPassword();
            blockUtils2.getNewCard();
            blockUtils2.cardAccess();
        }
    });
    scb.itemComponentRegistry.registerCustomComponent('scb:item', {
        onUseOn({ itemStack: item, source: player, block }) {
            const items = new ItemUtils(item, player, block);
            items.reinforceBlock();
            items.removeReinforcedBlock();
            items.placeTurret();
            items.universalRemover();
        },
        onUse({ itemStack: item, source: player }) {
            const items = new ItemUtils(item, player, undefined);
            items.turretModule();
            items.mineModule();
            items.cameraModule();
        }
    });
});
world.afterEvents.playerPlaceBlock.subscribe(scb => {
    const { player, block } = scb;
    const blockUtils = new BlockUtils(block, player);
    blockUtils.setMine();
    blockUtils.setCamera();
    blockUtils.setReinforcedChest();
    blockUtils.setScanner();
    blockUtils.setKeypad();
    blockUtils.setTrophySystem();
    blockUtils.setKeycardReader();
    blockUtils.setReinforcedDoor();
});
world.beforeEvents.playerPlaceBlock.subscribe(scb => {
    const { player, block } = scb;
    const blockUtils = new BlockUtils(block, player, scb);
    blockUtils.removePiston();
});
world.beforeEvents.playerBreakBlock.subscribe(scb => {
    const { block, player } = scb;
    const worldUtils = new WorldUtils(block, player, scb);
    worldUtils.isReinforced();
});
world.beforeEvents.explosion.subscribe(scb => {
    const impactedBlocks = scb.getImpactedBlocks();
    const worldUtils = WorldUtils.explosion(impactedBlocks, scb);
});
world.afterEvents.playerInteractWithEntity.subscribe(scb => {
    const { target: entity, player, itemStack: item } = scb;
    const entities = new EntityUtils(entity, player, item);
    entities.turret();
    entities.setPassword();
    entities.putPassword();
    const items = new ItemUtils(item, player, undefined);
    items.transferContainer();
});
world.afterEvents.playerInteractWithBlock.subscribe(scb => {
    const { block, player, itemStack: item } = scb;
    const blockUtils = new BlockUtils(block, player);
    blockUtils.waila();
});
system.runInterval(() => {
    world.gameRules.doFireTick = false;
    const dim = world.getDimension('overworld');
    for (const entity of dim.getEntities()) {
        if (entity.typeId === 'scb:trophy_system') {
            const entityUtils = new EntityUtils(entity);
            entityUtils.trophySystem();
        }
        if (entity.typeId === 'scb:turret') {
            const entityUtils = new EntityUtils(entity);
            entityUtils.turretPush();
        }
    }
    for (const player of world.getPlayers()) {
        const entityUtils = new EntityUtils(player);
        entityUtils.scannerAccess();
    }
});
