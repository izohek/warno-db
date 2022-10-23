"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUnitCardByDescriptor = exports.findUnitCard = void 0;
const UnitCard_1 = require("./UnitCard");
const units_json_1 = __importDefault(require("./json/units.json"));
/**
 * Find specifc card by id
 *
 * @param id
 * @returns
 */
function findUnitCard(id) {
    const foundCard = units_json_1.default.find(function (item) {
        return item.id === id;
    });
    if (foundCard === undefined) {
        return null;
    }
    const newCard = new UnitCard_1.UnitCard(foundCard.name, foundCard.id, 0, foundCard.category);
    newCard.descriptor = foundCard.descriptor;
    return newCard;
}
exports.findUnitCard = findUnitCard;
/**
 * Find a card by descriptor
 *
 * @param descriptor
 * @returns
 */
function findUnitCardByDescriptor(descriptor) {
    const foundUnit = units_json_1.default.find(function (unit) {
        return unit.descriptor === descriptor;
    });
    if (foundUnit === undefined) {
        return null;
    }
    const card = new UnitCard_1.UnitCard(foundUnit.name, foundUnit.id, 0, foundUnit.category);
    card.descriptor = foundUnit.descriptor;
    return card;
}
exports.findUnitCardByDescriptor = findUnitCardByDescriptor;
