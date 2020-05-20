import { outOfDate, outOfSale, incrementQuality, decrementSellIn, specialIncrementQuality } from './updateTools'

export const cheese = (item) => {
    return item.name === 'Aged Brie'
};
export const updateCheese = (item) => {
    decrementSellIn(item);
    incrementQuality(item);
    specialIncrementQuality(item);
    if (outOfDate(item)) {
        outOfSale(item);
        return;
    }
}