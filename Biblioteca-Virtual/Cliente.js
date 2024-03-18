"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nome, ID, contato) {
        this.arrayL = [];
        this.nome = nome;
        this.ID = ID;
        this.contato = contato;
    }
    Cliente.prototype.hc = function (a) {
        this.arrayL.push(a);
    };
    Cliente.prototype.mhc = function () {
        console.log(this.arrayL);
    };
    return Cliente;
}());
exports.Cliente = Cliente;
