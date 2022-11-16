import { generatePacks, generateIds } from "../ndf/NdfDataGenerator";
import { AllUnits, UnitDefinition } from "../UnitData";
import { writeFileSync } from 'fs'

const deckNdfFile = './ndf/post-suchet/DeckSerializer.ndf'
const packsNdfFile = './ndf/post-suchet/Packs.ndf'

// From ndf
const idData = generateIds(deckNdfFile)

// Add extra unit data
const unitDataPlus = idData.units.map( (unit) => {
    const extraInfo = AllUnits.find( u => u.descriptor === unit.descriptor )
    return {
        ...unit,
        id: unit.id + 1,
        name: extraInfo?.name ?? "",
        category: extraInfo?.category ?? ""
    } as UnitDefinition
})

let packs = generatePacks(packsNdfFile)

packs = packs.map( (p) => {
    return { 
        ...p,
        id: idData.packs.find( (id: any) => id.descriptor === p.name )?.id ?? null
    }
})

// Write units
writeFileSync('./src/json/units.json', JSON.stringify(unitDataPlus, null, 4))
// Write packs
writeFileSync('./src/json/packs.json', JSON.stringify({packs: packs}, null, 4))
