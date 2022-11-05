"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUnitCardByDescriptor = exports.findUnitCard = exports.UnitCard = exports.DivisionRules = exports.AllDivisions = exports.AllUnits = void 0;
const units_json_1 = __importDefault(require("./json/units.json"));
const divisions_json_1 = __importDefault(require("./json/divisions.json"));
const division_rules_json_1 = __importDefault(require("./json/division-rules.json"));
exports.AllUnits = units_json_1.default;
exports.AllDivisions = divisions_json_1.default;
exports.DivisionRules = division_rules_json_1.default;
var UnitCard_1 = require("./UnitCard");
Object.defineProperty(exports, "UnitCard", { enumerable: true, get: function () { return UnitCard_1.UnitCard; } });
var UnitCardDatabase_1 = require("./UnitCardDatabase");
Object.defineProperty(exports, "findUnitCard", { enumerable: true, get: function () { return UnitCardDatabase_1.findUnitCard; } });
Object.defineProperty(exports, "findUnitCardByDescriptor", { enumerable: true, get: function () { return UnitCardDatabase_1.findUnitCardByDescriptor; } });
