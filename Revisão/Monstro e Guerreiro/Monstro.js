"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monstro = void 0;
var Monstro = /** @class */ (function () {
    function Monstro(nome, tipo) {
        this.forca = 50;
        this.saude = 10;
        this.nome = nome;
        this.tipo = tipo;
    }
    Monstro.prototype.atacar = function (guerreiro) {
        if (guerreiro.saude != 0) {
            var dano = Math.floor(Math.random() * this.forca);
            guerreiro.saude = guerreiro.saude - dano;
            console.log("'".concat(this.nome, "' ataca '").concat(guerreiro.nome, "' com '").concat(dano, "' de for\u00E7a\nVida do guerreiro: '").concat(guerreiro.saude, "'"));
        }
        if (guerreiro.saude === 0) {
            console.log('Você derrotou o inimigo');
        }
    };
    return Monstro;
}());
exports.Monstro = Monstro;
