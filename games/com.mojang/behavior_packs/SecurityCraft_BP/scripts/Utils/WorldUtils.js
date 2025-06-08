import DataBase from "./DataBase";
const db = DataBase;
class WorldUtils {
    constructor(block, player, event) {
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
            const owner = db.get(id);
            if (owner !== '')
                event.cancel = true;
        }
    }
    static explosion(impactedBlock, event) {
        const newBlocks = [];
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
