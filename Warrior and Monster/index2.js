"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Warrior_1 = require("./Warrior");
var Monster_1 = require("./Monster");
var myMonster = new Monster_1.Monster("Cobra");
var myWarrior = new Warrior_1.Warrior("Ryan", "Guerreiro", 30);
myMonster.info();
myWarrior.attack(myMonster);
myMonster.info();
myMonster.attack(myWarrior);
