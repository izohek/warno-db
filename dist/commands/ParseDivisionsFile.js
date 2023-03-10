"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NdfDataGenerator_1 = require("../ndf/NdfDataGenerator");
const Divisions_1 = __importDefault(require("../lang/en/Divisions"));
const Alliances_1 = __importDefault(require("../lang/en/Alliances"));
const fs_1 = require("fs");
const deckNdfFile = './ndf/latest/DeckSerializer.ndf';
const divisionNdfFile = './ndf/latest/Divisions.ndf';
// Parse from ndf
const divisionData = (0, NdfDataGenerator_1.generateDivisions)(deckNdfFile, divisionNdfFile);
divisionData.sort((a, b) => a.id - b.id);
// Only use multiplayer divisions
const mpDivisionDat = divisionData.filter((d) => {
    return d.descriptor.endsWith('multi');
});
// Add english names for now
const localizedDivisionData = mpDivisionDat.map((division) => {
    var _a, _b;
    return Object.assign(Object.assign({}, division), { name: (_a = Divisions_1.default[division.descriptor]) !== null && _a !== void 0 ? _a : "", alliance: (_b = Alliances_1.default[division.alliance]) !== null && _b !== void 0 ? _b : "" });
});
// Print
(0, fs_1.writeFileSync)('./src/json/divisions.json', JSON.stringify(localizedDivisionData, null, 4));
