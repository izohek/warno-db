import { UnitCard } from './UnitCard'
import { AllUnits } from './UnitData'

/**
 * Find specifc card by id
 *
 * @param id
 * @returns
 */
export function findUnitCard (id: string | number): UnitCard | null {
    const found = AllUnits.filter(function (item) {
        return item.id === id
    })

    if (found.length > 0) {
        const foundCard = found[0]
        const newCard = new UnitCard(
            foundCard.name,
            foundCard.id,
            0,
            foundCard.category
        )
        newCard.descriptor = foundCard.descriptor
        return newCard
    }

    return null
}

/**
 * Find a card by descriptor
 *
 * @param descriptor
 * @returns
 */
export function findUnitCardByDescriptor (descriptor: string): UnitCard | null {
    const found = AllUnits.filter(function (unit) {
        return unit.descriptor === descriptor
    })

    if (found.length > 0) {
        const foundUnit = found[0]
        const card = new UnitCard(
            foundUnit.name,
            foundUnit.id,
            0,
            foundUnit.category
        )
        card.descriptor = foundUnit.descriptor
        return card
    }

    return null
}
