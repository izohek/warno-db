"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NdfDataGenerator_1 = require("../ndf/NdfDataGenerator");
const UnitData_1 = require("../UnitData");
const fs_1 = require("fs");
const deckNdfFile = './ndf/post-suchet/DeckSerializer.ndf';
const packsNdfFile = './ndf/post-suchet/Packs.ndf';
// From ndf
const idData = (0, NdfDataGenerator_1.generateIds)(deckNdfFile);
// Add extra unit data
const unitDataPlus = idData.units.map((unit) => {
    var _a, _b;
    const extraInfo = UnitData_1.AllUnits.find(u => u.descriptor === unit.descriptor);
    return Object.assign(Object.assign({}, unit), { id: unit.id + 1, name: (_a = extraInfo === null || extraInfo === void 0 ? void 0 : extraInfo.name) !== null && _a !== void 0 ? _a : "", category: (_b = extraInfo === null || extraInfo === void 0 ? void 0 : extraInfo.category) !== null && _b !== void 0 ? _b : "" });
});
let packs = (0, NdfDataGenerator_1.generatePacks)(packsNdfFile);
packs = packs.map((p) => {
    var _a, _b;
    return Object.assign(Object.assign({}, p), { id: (_b = (_a = idData.packs.find((id) => id.descriptor === p.name)) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : null });
});
// Write units
(0, fs_1.writeFileSync)('./src/json/units.json', JSON.stringify(unitDataPlus, null, 4));
// Write packs
(0, fs_1.writeFileSync)('./src/json/packs.json', JSON.stringify({ packs: packs }, null, 4));
