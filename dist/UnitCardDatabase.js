"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUnitCardByDescriptor = exports.findUnitCard = void 0;
const UnitCard_1 = require("./UnitCard");
const UnitData_1 = require("./UnitData");
/**
 * Find specifc card by id
 *
 * @param id
 * @returns
 */
function findUnitCard(id) {
    const found = UnitData_1.AllUnits.filter(function (item) {
        return item.id === id;
    });
    if (found.length > 0) {
        const foundCard = found[0];
        const newCard = new UnitCard_1.UnitCard(foundCard.name, foundCard.id, 0, foundCard.category);
        newCard.descriptor = foundCard.descriptor;
        return newCard;
    }
    return null;
}
exports.findUnitCard = findUnitCard;
/**
 * Find a card by descriptor
 *
 * @param descriptor
 * @returns
 */
function findUnitCardByDescriptor(descriptor) {
    const found = UnitData_1.AllUnits.filter(function (unit) {
        return unit.descriptor === descriptor;
    });
    if (found.length > 0) {
        const foundUnit = found[0];
        const card = new UnitCard_1.UnitCard(foundUnit.name, foundUnit.id, 0, foundUnit.category);
        card.descriptor = foundUnit.descriptor;
        return card;
    }
    return null;
}
exports.findUnitCardByDescriptor = findUnitCardByDescriptor;
