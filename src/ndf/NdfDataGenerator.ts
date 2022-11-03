import { NdfParser, search } from 'ndf-parser';
import { readFileSync } from 'fs';
import Division from '../Division';
import { NdfObject } from 'ndf-parser/dist/src/types';

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
    tags: string[],
    maxActivationPoints: number,
    costMatrix: string
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

export function generateIds(unitsFile: string) {
    // 
    const unitsNdfData = parseNdfFile(unitsFile)[0]
    const unitsIdObject = search(unitsNdfData, 'UnitIds')[0].value
    const unitData = findDivisionDeckDataFromTuple(unitsIdObject) as NdfUnit[]

    const packIdsObject = search(unitsNdfData, 'PackIds')[0].value
    const packIds = packIdsObject.value.map( (pid: any) => {
        return {
            descriptor: pid.value[0],
            id: parseInt(pid.value[1].value),
        }
    })

    return {
        units: unitData,
        packs: packIds
    }
}

export function generatePacks(packsFile: string) {
    const packsNdfData = parseNdfFile(packsFile)
    const packs = packsNdfData.map( (p) => {
        const units = search(p, 'UnitDescriptorList')
        return {
            name: (p as NdfObject).name,
            units: units.flatMap( (u: any) => {
                return u.value.values.map( (u2: any) => {
                    return u2.value
                })
            })
        }
    })
    return packs
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
            availableForPlay: JSON.parse(search(d, 'AvailableForPlay')[0].value.value.toLowerCase()),
            country: search(d, 'CountryId')[0].value.value.replaceAll('"', ''), 
            tags: search(d, 'DivisionTags')[0].value.values.map((t: any) => t.value.replaceAll("'", '')),
            maxActivationPoints: parseInt(search(d, 'MaxActivationPoints')[0].value.value),
            costMatrix: search(d, 'CostMatrix')[0].value.value,
            packList: search(d, 'PackList')[0].value.value.map((p: any) => { return {
                descriptor: p.value[0].value,
                count: parseInt(p.value[1].value)
            }})
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
            ...d,
            name: '',
            country: d.country,
            id: (deck.find( (deckItem) => deckItem.descriptor === d.descriptor) ?? {id:-1}).id,
            alliance: d.alliance,
            descriptor: d.descriptor
        }
    })
}
