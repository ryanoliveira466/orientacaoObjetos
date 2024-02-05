"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.emitSound = function () {
        console.log("Som do animal");
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.setName = function (newName) {
        this.name = newName;
    };
    Animal.prototype.getAge = function () {
        return this.age;
    };
    Animal.prototype.setAge = function (newAge) {
        this.age = newAge;
    };
    return Animal;
}());
exports.Animal = Animal;
