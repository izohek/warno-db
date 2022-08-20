import { UnitCard } from './UnitCard'
import { AllUnitCards } from './UnitCardData'

/**
 * Find specifc card by id
 *
 * @param id
 * @returns
 */
export function findUnitCard (id: string | number): UnitCard | null {
    const found = AllUnitCards.filter(function (item) {
        return item[0] === id
    })

    if (found.length > 0) {
        const foundCard = found[0]
        return new UnitCard(
            foundCard[1],
            foundCard[0],
            0,
            foundCard[2]
        )
    }

    return null
}
