"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnitCard = void 0;
// Warno Unit Card
class UnitCard {
    constructor(name = "", code = 0, veterancy = -1, category) {
        this.name = "";
        this.code = 0;
        this.veterancy = -1;
        this.name = name;
        this.code = code;
        this.veterancy = veterancy;
        this.category = category;
    }
}
exports.UnitCard = UnitCard;
exports.default = UnitCard;
