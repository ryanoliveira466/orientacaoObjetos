"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
var Monster = /** @class */ (function () {
    function Monster(name) {
        this.strength = 50;
        this.life = 10;
        this.name = name;
        this.strength = 50;
        this.life = 10;
    }
    Monster.prototype.attack = function (myWarrior) {
        var damage = this.strength;
        myWarrior.receiveDamage(damage);
        console.log("".concat(this.name, " attacks ").concat(myWarrior.getName(), ", dealing ").concat(damage, " points,"));
    };
    Monster.prototype.receiveDamage = function (damage) {
        this.life -= damage;
    };
    Monster.prototype.info = function () {
        console.log("Nome ".concat(this.name, " \n  Vida ").concat(this.life, " \n  For\u00E7a ").concat(this.strength));
    };
    Monster.prototype.getName = function () {
        return this.name;
    };
    Monster.prototype.setName = function (newName) {
        this.name = newName;
    };
    Monster.prototype.getLife = function () {
        return this.life;
    };
    Monster.prototype.getStrength = function () {
        return this.life;
    };
    return Monster;
}());
exports.Monster = Monster;
