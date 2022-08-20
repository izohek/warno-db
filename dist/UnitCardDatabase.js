"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUnitCard = void 0;
const UnitCard_1 = require("./UnitCard");
const UnitCardData_1 = require("./UnitCardData");
/**
 * Find specifc card by id
 *
 * @param id
 * @returns
 */
function findUnitCard(id) {
    const found = UnitCardData_1.AllUnitCards.filter(function (item) {
        return item[0] === id;
    });
    if (found.length > 0) {
        const foundCard = found[0];
        return new UnitCard_1.UnitCard(foundCard[1], foundCard[0], 0, foundCard[2]);
    }
    return null;
}
exports.findUnitCard = findUnitCard;
