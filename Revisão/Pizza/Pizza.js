"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(sabor, tamanho, preco) {
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.preco = preco;
    }
    Pizza.prototype.info = function () {
        console.log("Pizza: ".concat(this.sabor, "\nTamanho: ").concat(this.tamanho, "\nPre\u00E7o:R$ ").concat(this.preco));
    };
    return Pizza;
}());
exports.Pizza = Pizza;
