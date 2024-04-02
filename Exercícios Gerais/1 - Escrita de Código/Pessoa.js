"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    function Pessoa(name, age) {
        this.name = name;
        this.age = age;
    }
    Pessoa.prototype.talk = function () {
        console.log('Pessoa: Talk');
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
