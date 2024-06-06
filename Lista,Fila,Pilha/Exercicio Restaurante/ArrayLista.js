"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayLista = void 0;
var TipoComida_1 = require("./TipoComida");
var Comida_1 = require("./Comida");
var ArrayLista = /** @class */ (function () {
    function ArrayLista() {
        this.items = [];
        this.arrayListaGarcom = [];
        this.arrayListaPreparo = [];
    }
    ArrayLista.prototype.add = function (item) {
        this.items.push(item);
    };
    ArrayLista.prototype.addFirst = function (item) {
        this.items.unshift(item);
    };
    ArrayLista.prototype.addAt = function (index, item) {
        if (index >= 0 && index <= this.items.length) {
            this.items.splice(index, 0, item);
        }
        else {
            throw new Error("Index out of bounds.");
        }
    };
    ArrayLista.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
    ArrayLista.prototype.removeFirst = function () {
        if (!this.isEmpty()) {
            this.items.shift();
        }
    };
    ArrayLista.prototype.removeLast = function () {
        if (!this.isEmpty()) {
            this.items.pop();
        }
    };
    ArrayLista.prototype.removeAt = function (index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        }
        else {
            throw new Error("Index out of bounds.");
        }
    };
    ArrayLista.prototype.get = function (index) {
        if (index >= 0 && index < this.items.length) {
            return this.items[index];
        }
        return null;
    };
    ArrayLista.prototype.indexOf = function (item) {
        return this.items.indexOf(item);
    };
    ArrayLista.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    ArrayLista.prototype.size = function () {
        return this.items.length;
    };
    ArrayLista.prototype.registrarPedidoGarcom = function (nome, tipo) {
        var pedidoGarcom = new Comida_1.Comida(nome, tipo);
        this.arrayListaGarcom.push(pedidoGarcom);
    };
    ArrayLista.prototype.preparoMaisRapido = function () {
        for (var i = 0; i < this.arrayListaGarcom.length; i++) {
            if (this.arrayListaGarcom[i].tipo === TipoComida_1.TipoComida.Bebidas) {
                this.arrayListaPreparo.push(this.arrayListaGarcom[i]);
            }
        }
        for (var i = 0; i < this.arrayListaGarcom.length; i++) {
            if (this.arrayListaGarcom[i].tipo === TipoComida_1.TipoComida.Prato_Principal) {
                this.arrayListaPreparo.push(this.arrayListaGarcom[i]);
            }
        }
        for (var i = 0; i < this.arrayListaGarcom.length; i++) {
            if (this.arrayListaGarcom[i].tipo === TipoComida_1.TipoComida.Sobremesas) {
                this.arrayListaPreparo.push(this.arrayListaGarcom[i]);
            }
        }
    };
    ArrayLista.prototype.saidaPedidos = function () {
        while (this.arrayListaPreparo.length !== 0) {
            console.log("Saindo pedido mais r\u00E1pido");
            console.log(this.arrayListaPreparo[0]);
            this.arrayListaPreparo.shift();
        }
    };
    return ArrayLista;
}());
exports.ArrayLista = ArrayLista;
