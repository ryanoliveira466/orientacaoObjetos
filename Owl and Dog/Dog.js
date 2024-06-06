"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
var Dog = /** @class */ (function () {
    function Dog(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    Dog.prototype.bark = function () {
        console.log("Au Au");
    };
    Dog.prototype.eat = function (quantity) {
        console.log("The dog has eaten" + quantity);
    };
    return Dog;
}());
exports.Dog = Dog;
var myDog2 = new Dog("R", 16);
console.log(myDog2.name);
