"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitCardDatabase = void 0;
const UnitCard_1 = require("./UnitCard");
const UnitCardData_1 = require("./UnitCardData");
class UnitCardDatabase {
    /**
     * Find specifc card by id
     *
     * @param id
     * @returns
     */
    static findCard(id) {
        const found = UnitCardData_1.AllUnitCards.filter(function (item) {
            return item[0] === id;
        });
        if (found.length > 0) {
            const foundCard = found[0];
            return new UnitCard_1.UnitCard(foundCard[1], foundCard[0], 0, foundCard[2]);
        }
        return null;
    }
}
exports.UnitCardDatabase = UnitCardDatabase;
exports.default = UnitCardDatabase;
