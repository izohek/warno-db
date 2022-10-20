"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllDivisions = exports.AllUnits = exports.findUnitCardByDescriptor = exports.findUnitCard = exports.UnitCard = void 0;
var UnitCard_1 = require("./UnitCard");
Object.defineProperty(exports, "UnitCard", { enumerable: true, get: function () { return UnitCard_1.UnitCard; } });
var UnitCardDatabase_1 = require("./UnitCardDatabase");
Object.defineProperty(exports, "findUnitCard", { enumerable: true, get: function () { return UnitCardDatabase_1.findUnitCard; } });
Object.defineProperty(exports, "findUnitCardByDescriptor", { enumerable: true, get: function () { return UnitCardDatabase_1.findUnitCardByDescriptor; } });
const units_json_1 = __importDefault(require("./json/units.json"));
exports.AllUnits = units_json_1.default;
const divisions_json_1 = __importDefault(require("./json/divisions.json"));
exports.AllDivisions = divisions_json_1.default;
