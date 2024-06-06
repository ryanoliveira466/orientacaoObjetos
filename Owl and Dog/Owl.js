"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owl = void 0;
var Owl = /** @class */ (function () {
    function Owl(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    Owl.prototype.chirp = function () {
        console.log("Hu Hu");
    };
    Owl.prototype.eat = function (quantity) {
        console.log("The owl has eaten" + quantity);
    };
    Owl.prototype.fly = function (quantity) {
        console.log("The owl has flown for" + quantity);
    };
    return Owl;
}());
exports.Owl = Owl;
