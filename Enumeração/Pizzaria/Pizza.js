"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var enumSaborPizza_1 = require("./enumSaborPizza");
var Pizza = /** @class */ (function () {
    function Pizza(sabor, tamanho, preco) {
        this.sabor = sabor;
        this.tamanho = tamanho;
        this.preco = preco;
    }
    Pizza.prototype.descricao = function () {
        console.log("Pizza ".concat(this.sabor, "\nTamanho ").concat(this.tamanho, "\nPre\u00E7o ").concat(this.preco));
    };
    return Pizza;
}());
var pizza1 = new Pizza(enumSaborPizza_1.SaborPizza.Pepperoni, 10, 10);
var pizza2 = new Pizza(enumSaborPizza_1.SaborPizza.Portuguesa, 20, 20);
var pizza3 = new Pizza(enumSaborPizza_1.SaborPizza.Queijo, 30, 30);
pizza1.descricao(), pizza2.descricao(), pizza3.descricao();
