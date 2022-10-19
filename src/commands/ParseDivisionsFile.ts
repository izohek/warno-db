import { generateDivisions } from "../ndf/NdfDataGenerator"
import localization_En from '../lang/en/Divisions'

const deckNdfFile = './ndf/suchet/DeckSerializer.ndf'
const divisionNdfFile = './ndf/suchet/Divisions.ndf'

// Parse from ndf
const divisionData = generateDivisions(deckNdfFile, divisionNdfFile)
divisionData.sort( (a, b) => a.id - b.id)
// Only use multiplayer divisions
const mpDivisionDat = divisionData.filter( (d) => {
    return d.descriptor.endsWith('multi')
})

// Add english names for now
const localizedDivisionData = mpDivisionDat.map( (division) => {
    return {
        ...division,
        name: localization_En[division.descriptor as keyof typeof localization_En] ?? "",
    }
})

// Print
console.log(JSON.stringify(localizedDivisionData, null, 4))
