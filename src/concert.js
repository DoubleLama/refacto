import { outOfDate, outOfSale, incrementQuality, decrementSellIn, specialIncrementQuality } from './updateTools'

export const concert = (item) => {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert'
};
export const updateConcert = (item) => {
    decrementSellIn(item);
    incrementQuality(item);
    specialIncrementQuality(item);
    if (outOfDate(item)) {
        outOfSale(item);
        return;
    }
}