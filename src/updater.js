import { cheese, updateCheese} from './cheese';
import { legendary, updateLegendary} from './legendary';
import { concert, updateConcert} from './concert';
import { conjured, updateConjured} from './conjured';
import { updateClassicItem} from './classicItem';

export const updateItems = (item) => {
    if (legendary(item)) {
        return updateLegendary(item);
    }
    if (cheese(item)) {
        return updateCheese(item);
    }
    if (concert(item)) {
        return updateConcert(item);
    }
    if (conjured(item)) {
        return updateConjured(item);
    }
    updateClassicItem(item);
}