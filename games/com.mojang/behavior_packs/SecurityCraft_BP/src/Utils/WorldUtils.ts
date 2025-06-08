import { world, Block, ItemStack, Player, PlayerBreakBlockBeforeEvent, ExplosionBeforeEvent } from "@minecraft/server";
import DataBase from "./DataBase";

const db = DataBase;

class WorldUtils {
    private block: Block;
    private player: Player;
    private event: PlayerBreakBlockBeforeEvent;

    constructor(block: Block, player: Player, event: PlayerBreakBlockBeforeEvent) {
        this.block = block;
        this.player = player;
        this.event = event;
    }

    isReinforced() {
        const { block, player, event } = this;
        const { location } = block;
        const pos = db.pos(location);
        const id = `${pos.x} ${pos.y} ${pos.z}`;
        const list = db.getIds();
        const exists = list.find(e => e === id);
        if (exists) {
            const owner = db.get(id) as string;
            if (owner !== '') event.cancel = true;
        }
    }

    static explosion(impactedBlock: Block[], event: ExplosionBeforeEvent) {
        const newBlocks: Block[] = [];
        impactedBlock.forEach(block => {
            const { location } = block;
            const pos = db.pos(location);
            const id = `${pos.x} ${pos.y} ${pos.z}`;
            const owner = db.get(id);
            if (owner === '' || !owner) {
                newBlocks.push(block);
            }
        });
        event.setImpactedBlocks(newBlocks);
    }
}

export default WorldUtils;