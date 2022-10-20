import { UnitCard } from './UnitCard'
import AllUnits from './json/units.json'

/**
 * Find specifc card by id
 *
 * @param id
 * @returns
 */
export function findUnitCard (id: string | number): UnitCard | null {
    const foundCard = AllUnits.find(function (item) {
        return item.id === id
    })

    if (! foundCard) { return null }

    const newCard = new UnitCard(
        foundCard.name,
        foundCard.id,
        0,
        foundCard.category
    )
    newCard.descriptor = foundCard.descriptor
    return newCard
}

/**
 * Find a card by descriptor
 *
 * @param descriptor
 * @returns
 */
export function findUnitCardByDescriptor (descriptor: string): UnitCard | null {
    const foundUnit = AllUnits.find(function (unit) {
        return unit.descriptor === descriptor
    })

    if (! foundUnit) { return null }

    const card = new UnitCard(
        foundUnit.name,
        foundUnit.id,
        0,
        foundUnit.category
    )
    card.descriptor = foundUnit.descriptor
    return card
}
