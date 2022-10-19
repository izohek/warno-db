"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NdfDataGenerator_1 = require("../ndf/NdfDataGenerator");
const Divisions_1 = __importDefault(require("../lang/en/Divisions"));
const deckNdfFile = './ndf/suchet/DeckSerializer.ndf';
const divisionNdfFile = './ndf/suchet/Divisions.ndf';
// Parse from ndf
const divisionData = (0, NdfDataGenerator_1.generateDivisions)(deckNdfFile, divisionNdfFile);
divisionData.sort((a, b) => a.id - b.id);
// Only use multiplayer divisions
const mpDivisionDat = divisionData.filter((d) => {
    return d.descriptor.endsWith('multi');
});
// Add english names for now
const localizedDivisionData = mpDivisionDat.map((division) => {
    var _a;
    return Object.assign(Object.assign({}, division), { name: (_a = Divisions_1.default[division.descriptor]) !== null && _a !== void 0 ? _a : "" });
});
// Print
console.log(JSON.stringify(localizedDivisionData, null, 4));
