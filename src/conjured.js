import { outOfDate, decrementSellIn, conjuredDecrementQuality } from './updateTools'

export const conjured = (item) => {
    return item.name.split(' ')[0] === 'Conjured'
};
export const updateConjured = (item) => {
    decrementSellIn(item);
    conjuredDecrementQuality(item);
    if (outOfDate(item)) {
        conjuredDecrementQuality(item);
        return;
    }
}