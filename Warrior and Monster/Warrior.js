"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
var Warrior = /** @class */ (function () {
    function Warrior(name, type, strenght) {
        this.life = 100;
        this.name = name;
        this.type = type;
        this.strength = strenght;
        this.life = 100;
    }
    Warrior.prototype.attack = function (myMonster) {
        var damage = this.strength;
        myMonster.receiveDamage(damage);
        console.log("".concat(this.name, " attacks ").concat(myMonster.getName(), ", dealing ").concat(damage, " points,"));
    };
    Warrior.prototype.receiveDamage = function (damage) {
        this.life -= damage;
    };
    Warrior.prototype.info = function () {
        console.log("Nome ".concat(this.name, " \n  Vida ").concat(this.life, " \n  For\u00E7a ").concat(this.strength));
    };
    Warrior.prototype.getName = function () {
        return this.name;
    };
    Warrior.prototype.setName = function (newName) {
        this.name = newName;
    };
    Warrior.prototype.getType = function () {
        return this.type;
    };
    Warrior.prototype.setType = function (newType) {
        this.type = newType;
    };
    Warrior.prototype.getStrength = function () {
        return this.strength;
    };
    Warrior.prototype.setStrength = function (newStrength) {
        this.strength = newStrength;
    };
    Warrior.prototype.getLife = function () {
        return this.life;
    };
    return Warrior;
}());
exports.Warrior = Warrior;
