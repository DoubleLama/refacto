import { updateItems} from './updater';

class Shop {
    constructor(items = []) {
        this.items = items;
    }
    updateQuality() {
        this.items.forEach(updateItems);
        return this.items;
    }
}

export default Shop;