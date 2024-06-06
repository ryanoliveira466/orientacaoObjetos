"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Guerreiro_1 = require("./Guerreiro");
var Monstro_1 = require("./Monstro");
var guerreiro = new Guerreiro_1.Guerreiro('Ryan', 'Guerreiro', 5);
var monstro = new Monstro_1.Monstro('Cobra', 'Monstro');
guerreiro.atacar(monstro);
monstro.atacar(guerreiro);
guerreiro.atacar(monstro);
