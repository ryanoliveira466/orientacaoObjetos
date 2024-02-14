"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NobleHouse = void 0;
var Heir_1 = require("./Heir");
var NobleHouse = /** @class */ (function () {
    function NobleHouse(houseName, houseAnthem) {
        this.arrayHeir = [];
        this.houseName = houseName;
        this.houseName = houseAnthem;
    }
    NobleHouse.prototype.addHeir = function (heir, age, position) {
        var herdeiro = new Heir_1.Heir(heir, age, position);
        this.arrayHeir.push(herdeiro);
    };
    NobleHouse.prototype.infoHouse = function () {
        console.log("Nome casa:", this.houseName);
        console.log("Lema casa:", this.houseAnthem);
        console.log("Herdeiros da casa:", this.houseName, this.arrayHeir);
    };
    return NobleHouse;
}());
exports.NobleHouse = NobleHouse;
