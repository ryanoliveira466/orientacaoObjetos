"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dog_1 = require("./Dog");
var dog = new Dog_1.Dog('Rex', 10);
dog.bark();
dog.eat(5);
console.log(dog.name);
console.log(dog.weight);
