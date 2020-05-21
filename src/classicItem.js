import { outOfDate, decrementQuality, decrementSellIn} from './updateTools'

export const updateClassicItem = (item) => {
    decrementSellIn(item);
    decrementQuality(item);

    if (outOfDate(item)) {
        decrementQuality(item);
    }
}