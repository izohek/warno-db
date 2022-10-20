import { NdfParser, search } from 'ndf-parser';
import { readFileSync } from 'fs';
import Division from '../Division';

interface NdfDivision {
    id: number
    descriptor: string
}

interface NdfUnit extends NdfDivision {}

interface NdfDivisionDetail {
    descriptor: string
    alliance: string
    availableForPlay: string
    country: string
}

export function generateDivisions(deckFile: string, divisionsFile: string) {
    // Deck data
    const deckNdfData = parseNdfFile(deckFile)[0]
    const divisionDataMap = findDivisionDeckData(deckNdfData)
    const divisionData = findDivisionDeckDataFromTuple(divisionDataMap)

    // Division detail data
    const divisionNdfData = parseNdfFile(divisionsFile)
    const divisionDetailData = findDivisionDetailData(divisionNdfData)

    // Merge and return
    return mergeDataIntoDivision(divisionData, divisionDetailData)
}

export function generateUnits(unitsFile: string) {
    // 
    const unitsNdfData = parseNdfFile(unitsFile)[0]
    const unitsIdObject = search(unitsNdfData, 'UnitIds')[0].value
    const unitData = findDivisionDeckDataFromTuple(unitsIdObject) as NdfUnit[]

    return unitData
}

/**
 * Parse an ndf file at a given path.
 * 
 * @param filePath 
 * @returns 
 */
function parseNdfFile(filePath: string) {
    const rawNdfData = readFileSync(filePath)
    const parser = new NdfParser(rawNdfData.toString())
    return parser.parse()[1]
}

/**
 * Grab DivisionIds map which contains all division ids
 * 
 * @param data 
 * @returns 
 */
function findDivisionDeckData(data: any) {

    const divisionIdObject = search(data, "DivisionIds")
    return divisionIdObject[0].value
}

/**
 * Transform the division ids map into usable values for a division.
 * 
 * @param data 
 * @returns 
 */
function findDivisionDeckDataFromTuple(data: any): NdfDivision[] {
    return data.value.map( (v: any) => { return { 
        descriptor: v.value[0],
        id: parseInt(v.value[1].value, 10)
     }})
}

/**
 * Grab each division descriptor and convert it into usable data
 * 
 * @param data 
 * @returns 
 */
function findDivisionDetailData(data: any): NdfDivisionDetail[] {
    return data.map( (d: any) => {
        return {
            descriptor: search(d, 'name'),
            alliance: search(d, 'DivisionNationalite')[0].value.value,
            availableForPlay: search(d, 'AvailableForPlay')[0].value.value,
            country: search(d, 'CountryId')[0].value.value.replaceAll('"', '')
        }
    })
}

/**
 * Combine the data from the DeckSerializer.ndf and Divisions.ndf into a 
 * master list of division data.
 * 
 * @param deck 
 * @param detail 
 * @returns 
 */
function mergeDataIntoDivision(deck: NdfDivision[], detail: NdfDivisionDetail[]): Division[] {
    return detail.map( (d) => {
        return {
            name: '',
            country: d.country,
            id: (deck.find( (deckItem) => deckItem.descriptor === d.descriptor) ?? {id:-1}).id,
            alliance: d.alliance,
            descriptor: d.descriptor
        }
    })
}
