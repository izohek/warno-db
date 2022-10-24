"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePacks = exports.generateUnits = exports.generateDivisions = void 0;
const ndf_parser_1 = require("ndf-parser");
const fs_1 = require("fs");
function generateDivisions(deckFile, divisionsFile) {
    // Deck data
    const deckNdfData = parseNdfFile(deckFile)[0];
    const divisionDataMap = findDivisionDeckData(deckNdfData);
    const divisionData = findDivisionDeckDataFromTuple(divisionDataMap);
    // Division detail data
    const divisionNdfData = parseNdfFile(divisionsFile);
    const divisionDetailData = findDivisionDetailData(divisionNdfData);
    // Merge and return
    return mergeDataIntoDivision(divisionData, divisionDetailData);
}
exports.generateDivisions = generateDivisions;
function generateUnits(unitsFile) {
    // 
    const unitsNdfData = parseNdfFile(unitsFile)[0];
    const unitsIdObject = (0, ndf_parser_1.search)(unitsNdfData, 'UnitIds')[0].value;
    const unitData = findDivisionDeckDataFromTuple(unitsIdObject);
    return unitData;
}
exports.generateUnits = generateUnits;
function generatePacks(packsFile) {
    const packsNdfData = parseNdfFile(packsFile);
    const packs = packsNdfData.map((p) => {
        const units = (0, ndf_parser_1.search)(p, 'UnitDescriptorList');
        return {
            name: p.name,
            units: units.flatMap((u) => {
                return u.value.values.map((u2) => {
                    return u2.value;
                });
            })
        };
    });
    return packs;
}
exports.generatePacks = generatePacks;
/**
 * Parse an ndf file at a given path.
 *
 * @param filePath
 * @returns
 */
function parseNdfFile(filePath) {
    const rawNdfData = (0, fs_1.readFileSync)(filePath);
    const parser = new ndf_parser_1.NdfParser(rawNdfData.toString());
    return parser.parse()[1];
}
/**
 * Grab DivisionIds map which contains all division ids
 *
 * @param data
 * @returns
 */
function findDivisionDeckData(data) {
    const divisionIdObject = (0, ndf_parser_1.search)(data, "DivisionIds");
    return divisionIdObject[0].value;
}
/**
 * Transform the division ids map into usable values for a division.
 *
 * @param data
 * @returns
 */
function findDivisionDeckDataFromTuple(data) {
    return data.value.map((v) => {
        return {
            descriptor: v.value[0],
            id: parseInt(v.value[1].value, 10)
        };
    });
}
/**
 * Grab each division descriptor and convert it into usable data
 *
 * @param data
 * @returns
 */
function findDivisionDetailData(data) {
    return data.map((d) => {
        return {
            descriptor: (0, ndf_parser_1.search)(d, 'name'),
            alliance: (0, ndf_parser_1.search)(d, 'DivisionNationalite')[0].value.value,
            availableForPlay: (0, ndf_parser_1.search)(d, 'AvailableForPlay')[0].value.value,
            country: (0, ndf_parser_1.search)(d, 'CountryId')[0].value.value.replaceAll('"', '')
        };
    });
}
/**
 * Combine the data from the DeckSerializer.ndf and Divisions.ndf into a
 * master list of division data.
 *
 * @param deck
 * @param detail
 * @returns
 */
function mergeDataIntoDivision(deck, detail) {
    return detail.map((d) => {
        var _a;
        return {
            name: '',
            country: d.country,
            id: ((_a = deck.find((deckItem) => deckItem.descriptor === d.descriptor)) !== null && _a !== void 0 ? _a : { id: -1 }).id,
            alliance: d.alliance,
            descriptor: d.descriptor
        };
    });
}
