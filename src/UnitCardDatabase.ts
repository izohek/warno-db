import {UnitCard} from "./UnitCard";
import {AllUnitCardsRaw} from "./UnitCardData";

class UnitCardDatabase {
    /**
     * Find specifc card by id
     * 
     * @param id 
     * @returns 
     */
    static findCard(id: string | number): UnitCard | null {
        const found = AllUnitCardsRaw.filter(function(item) {
            return item[0] === id;
        })
        
        if (found.length > 0) {
            const foundCard = found[0];
            return new UnitCard(
                foundCard[1],
                foundCard[0],
                0,
                foundCard[2]
            );
        }
        return null;
    }
}

export {UnitCardDatabase};
export default UnitCardDatabase;
