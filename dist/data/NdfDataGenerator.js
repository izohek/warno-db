"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ndf_parser_1 = require("ndf-parser");
const fs_1 = require("fs");
const DeckNdfFile = './ndf/suchet/DeckSerializer.ndf';
const DivisionNdfFile = './ndf/suchet/Divisions.ndf';
function generateDivisions() {
    // Deck data
    const deckNdfData = parseNdfFile(DeckNdfFile)[0];
    const divisionDataMap = findDivisionDeckData(deckNdfData);
    const divisionData = findDivisionDeckDataFromTuple(divisionDataMap);
    // Division detail data
    const divisionNdfData = parseNdfFile(DivisionNdfFile);
    const divisionDetailData = findDivisionDetailData(divisionNdfData);
    // Merge and return
    return mergeDataIntoDivision(divisionData, divisionDetailData);
}
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
            id: v.value[1].value
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
const divisionData = generateDivisions();
console.log(JSON.stringify(divisionData, null, 4));
