"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NdfDataGenerator_1 = require("../ndf/NdfDataGenerator");
const fs_1 = require("fs");
const rulesNdfFile = "./ndf/latest/DivisionRules.ndf";
const ndfData = (0, NdfDataGenerator_1.generateDivisionRules)(rulesNdfFile);
(0, fs_1.writeFileSync)('./src/json/division-rules.json', JSON.stringify(ndfData, null, 4));
