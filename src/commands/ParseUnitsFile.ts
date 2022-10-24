import { generatePacks, generateUnits } from "../ndf/NdfDataGenerator";
import { AllUnits, UnitDefinition } from "../UnitData";
import { writeFileSync } from 'fs'

const deckNdfFile = './ndf/suchet/DeckSerializer.ndf'
const packsNdfFile = './ndf/suchet/Packs.ndf'

// From ndf
const unitData = generateUnits(deckNdfFile)

// Add extra unit data
const unitDataPlus = unitData.map( (unit) => {
    const extraInfo = AllUnits.find( u => u.descriptor === unit.descriptor )
    return {
        ...unit,
        id: unit.id + 1,
        name: extraInfo?.name ?? "",
        category: extraInfo?.category ?? ""
    } as UnitDefinition
})

const packs = generatePacks(packsNdfFile)

// Write units
writeFileSync('./src/json/units.json', JSON.stringify(unitDataPlus, null, 4))
// Write packs
writeFileSync('./src/json/packs.json', JSON.stringify(packs, null, 4))
