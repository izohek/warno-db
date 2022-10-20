"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NdfDataGenerator_1 = require("../ndf/NdfDataGenerator");
const UnitData_1 = require("../UnitData");
const deckNdfFile = './ndf/suchet/DeckSerializer.ndf';
// From ndf
const unitData = (0, NdfDataGenerator_1.generateUnits)(deckNdfFile);
// Add extra unit data
const unitDataPlus = unitData.map((unit) => {
    var _a, _b;
    const extraInfo = UnitData_1.AllUnits.find(u => u.descriptor === unit.descriptor);
    return Object.assign(Object.assign({}, unit), { name: (_a = extraInfo === null || extraInfo === void 0 ? void 0 : extraInfo.name) !== null && _a !== void 0 ? _a : "", category: (_b = extraInfo === null || extraInfo === void 0 ? void 0 : extraInfo.category) !== null && _b !== void 0 ? _b : "" });
});
// Print
console.log(JSON.stringify(unitDataPlus, null, 4));
