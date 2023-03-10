import { generateDivisions } from "../ndf/NdfDataGenerator"
import localization_En from '../lang/en/Divisions'
import allianceLoc_En from '../lang/en/Alliances'
import { writeFileSync } from 'fs'

const deckNdfFile = './ndf/latest/DeckSerializer.ndf'
const divisionNdfFile = './ndf/latest/Divisions.ndf'

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
        alliance: allianceLoc_En[division.alliance as keyof typeof allianceLoc_En] ?? ""
    }
})

// Print
writeFileSync('./src/json/divisions.json', JSON.stringify(localizedDivisionData, null, 4))
