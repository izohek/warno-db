"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDivisionRules = exports.generatePacks = exports.generateIds = exports.generateDivisions = void 0;
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
function generateIds(unitsFile) {
    // 
    const unitsNdfData = parseNdfFile(unitsFile)[0];
    const unitsIdObject = (0, ndf_parser_1.search)(unitsNdfData, 'UnitIds')[0].value;
    const unitData = findDivisionDeckDataFromTuple(unitsIdObject);
    const packIdsObject = (0, ndf_parser_1.search)(unitsNdfData, 'PackIds')[0].value;
    const packIds = packIdsObject.value.map((pid) => {
        return {
            descriptor: pid.value[0].value,
            id: parseInt(pid.value[1].value),
        };
    });
    return {
        units: unitData,
        packs: packIds
    };
}
exports.generateIds = generateIds;
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
 * Generate division rules from ndf
 *
 * @param rulesFile rules file name
 * @returns array of division rules
 */
function generateDivisionRules(rulesFile) {
    const rulesNdfData = parseNdfFile(rulesFile);
    const ndfItems = rulesNdfData[0].attributes[0].value.value.map(e => e.value);
    const rules = ndfItems.map(item => {
        // return item
        const unitRules = item[1].children.filter(c => c.name === 'UnitRuleList')[0].value;
        const transportRules = item[1].children.filter(c => c.name === 'TransportRuleList')[0].value;
        return {
            division: item[0].value,
            unitRules: unitRules.values.map(ur => {
                var _a, _b, _c, _d;
                return {
                    unitDescriptor: ((_a = ur.children.find(u => u.name === 'UnitDescriptor')) === null || _a === void 0 ? void 0 : _a.value).value,
                    availableWithoutTransport: JSON.parse(((_b = ur.children.find(u => u.name === 'AvailableWithoutTransport')) === null || _b === void 0 ? void 0 : _b.value).value.toLowerCase()),
                    numberOfUnitsInPack: parseInt(((_c = ur.children.find(u => u.name === 'NumberOfUnitInPack')) === null || _c === void 0 ? void 0 : _c.value).value),
                    numberOfUnitInPackXPMultiplier: ((_d = ur.children.find(u => u.name === 'NumberOfUnitInPackXPMultiplier')) === null || _d === void 0 ? void 0 : _d.value).values.map(i => {
                        return parseFloat(i.value);
                    })
                };
            }),
            transportRules: (0, ndf_parser_1.search)(transportRules, 'TDeckTransportRule').map((tr) => {
                var _a, _b;
                return {
                    name: ((_a = tr.children.find(c => c.name === 'TransportDescriptor')) === null || _a === void 0 ? void 0 : _a.value).value,
                    maxNumber: parseInt(((_b = tr.children.find(c => c.name === 'MaxNumber')) === null || _b === void 0 ? void 0 : _b.value).value)
                };
            }),
        };
    });
    return rules;
}
exports.generateDivisionRules = generateDivisionRules;
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
            descriptor: v.value[0].value,
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
            availableForPlay: JSON.parse((0, ndf_parser_1.search)(d, 'AvailableForPlay')[0].value.value.toLowerCase()),
            country: (0, ndf_parser_1.search)(d, 'CountryId')[0].value.value.replaceAll('"', ''),
            tags: (0, ndf_parser_1.search)(d, 'DivisionTags')[0].value.values.map((t) => t.value.replaceAll("'", '')),
            maxActivationPoints: parseInt((0, ndf_parser_1.search)(d, 'MaxActivationPoints')[0].value.value),
            costMatrix: (0, ndf_parser_1.search)(d, 'CostMatrix')[0].value.value,
            packList: (0, ndf_parser_1.search)(d, 'PackList')[0].value.value.map((p) => {
                return {
                    descriptor: p.value[0].value,
                    count: parseInt(p.value[1].value)
                };
            })
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
        return Object.assign(Object.assign({}, d), { name: '', country: d.country, id: ((_a = deck.find((deckItem) => deckItem.descriptor === d.descriptor)) !== null && _a !== void 0 ? _a : { id: -1 }).id, alliance: d.alliance, descriptor: d.descriptor });
    });
}
