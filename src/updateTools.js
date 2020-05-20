const maxQuality = 50;
const minQuality = 0;

export const outOfDate = (item) => {
    return item.sellIn < 0;
}

export const outOfSale = (item) => {
    item.quality = minQuality;
};

export const decrementSellIn = (item) => {
    item.sellIn -= 1;
};

export const incrementQuality = (item) => {
    if (item.quality < maxQuality) {
        item.quality += 1;
    };
};

export const decrementQuality = (item) => {
    if (item.quality > minQuality) {
        item.quality -= 1;
    };
};

export const specialIncrementQuality = (item) => {
    if (item.sellIn < 10) {
        incrementQuality(item);
    }
    if (item.sellIn < 5) {
        incrementQuality(item);
    }
}

export const conjuredDecrementQuality = (item) => {
    if (item.quality > minQuality) {
        item.quality -= 2;
    };
}