"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guerreiro = void 0;
var Guerreiro = /** @class */ (function () {
    function Guerreiro(nome, tipo, forca) {
        this.saude = 100;
        this.nome = nome;
        this.tipo = tipo;
        this.forca = forca;
    }
    Guerreiro.prototype.atacar = function (monstro) {
        if (monstro.saude != 0) {
            var dano = Math.floor(Math.random() * this.forca);
            monstro.saude = monstro.saude - dano;
            console.log("'".concat(this.nome, "' ataca '").concat(monstro.nome, "' com '").concat(dano, "' de for\u00E7a\nVida do monstro: '").concat(monstro.saude, "'"));
        }
        if (monstro.saude === 0) {
            console.log('Você derrotou o inimigo');
        }
    };
    return Guerreiro;
}());
exports.Guerreiro = Guerreiro;
