"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayList = void 0;
var Comida_1 = require("./Comida");
var EnumComida_1 = require("./EnumComida");
var ArrayList = /** @class */ (function () {
    function ArrayList() {
        this.items = [];
        this.listaGarcom = [];
        this.listaPedidos = [];
    }
    ArrayList.prototype.add = function (item) {
        this.items.push(item);
    };
    ArrayList.prototype.addFirst = function (item) {
        this.items.unshift(item);
    };
    ArrayList.prototype.addAt = function (index, item) {
        if (index >= 0 && index <= this.items.length) {
            this.items.splice(index, 0, item);
        }
        else {
            throw new Error("Index out of bounds.");
        }
    };
    ArrayList.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
    ArrayList.prototype.removeFirst = function () {
        if (!this.isEmpty()) {
            this.items.shift();
        }
    };
    ArrayList.prototype.removeLast = function () {
        if (!this.isEmpty()) {
            this.items.pop();
        }
    };
    ArrayList.prototype.removeAt = function (index) {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        }
        else {
            throw new Error("Index out of bounds.");
        }
    };
    ArrayList.prototype.get = function (index) {
        if (index >= 0 && index < this.items.length) {
            return this.items[index];
        }
        return null;
    };
    ArrayList.prototype.indexOf = function (item) {
        return this.items.indexOf(item);
    };
    ArrayList.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    ArrayList.prototype.size = function () {
        return this.items.length;
    };
    ArrayList.prototype.addPedido = function (nome, tipo) {
        var novoPedido = new Comida_1.Comida(nome, tipo);
        this.listaGarcom.push(novoPedido);
    };
    ArrayList.prototype.preparoPedido = function () {
        for (var i = 0; i < this.listaGarcom.length; i++) {
            if (this.listaGarcom[i].tipo === EnumComida_1.TipoComida.Bebida) {
                this.listaPedidos.push(this.listaGarcom[i]);
            }
        }
        for (var i = 0; i < this.listaGarcom.length; i++) {
            if (this.listaGarcom[i].tipo === EnumComida_1.TipoComida.Almoco) {
                this.listaPedidos.push(this.listaGarcom[i]);
            }
        }
        for (var i = 0; i < this.listaGarcom.length; i++) {
            if (this.listaGarcom[i].tipo === EnumComida_1.TipoComida.Sobremesa) {
                this.listaPedidos.push(this.listaGarcom[i]);
            }
        }
    };
    ArrayList.prototype.saidaPedidos = function () {
        while (this.listaPedidos.length != 0) {
            for (var i = 0; i < this.listaPedidos.length; i++) {
                if (this.listaPedidos[i].tipo === EnumComida_1.TipoComida.Bebida) {
                    console.log("Saindo", this.listaPedidos[i]);
                    this.listaPedidos.shift();
                }
            }
            for (var i = 0; i < this.listaPedidos.length; i++) {
                if (this.listaPedidos[i].tipo === EnumComida_1.TipoComida.Almoco) {
                    console.log("Saindo", this.listaPedidos[i]);
                    this.listaPedidos.shift();
                }
            }
            for (var i = 0; i < this.listaPedidos.length; i++) {
                if (this.listaPedidos[i].tipo === EnumComida_1.TipoComida.Sobremesa) {
                    console.log("Saindo", this.listaPedidos[i]);
                    this.listaPedidos.shift();
                }
            }
        }
    };
    ArrayList.prototype.mostrar = function () {
        console.log(this.listaPedidos);
    };
    return ArrayList;
}());
exports.ArrayList = ArrayList;
