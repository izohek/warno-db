import { generateUnits } from "../ndf/NdfDataGenerator";
import { AllUnits, UnitDefinition } from "../UnitData";

const deckNdfFile = './ndf/suchet/DeckSerializer.ndf'

// From ndf
const unitData = generateUnits(deckNdfFile)

// Add extra unit data
const unitDataPlus = unitData.map( (unit) => {
    const extraInfo = AllUnits.find( u => u.descriptor === unit.descriptor )
    return {
        ...unit,
        name: extraInfo?.name ?? "",
        category: extraInfo?.category ?? ""
    } as UnitDefinition
})

// Print
console.log(JSON.stringify(unitDataPlus, null, 4))
