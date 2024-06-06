"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Eletronic = void 0;
var Eletronic = /** @class */ (function () {
    function Eletronic(name, price, brand) {
        this.name = name;
        this.price = price;
        this.brand = brand;
    }
    Eletronic.prototype.getDescription = function () {
        return "Eletr\u00F4nico: ".concat(this.name, " - Marca: ").concat(this.brand, " - Pre\u00E7o: R$").concat(this.price.toFixed(2));
    };
    return Eletronic;
}());
exports.Eletronic = Eletronic;
