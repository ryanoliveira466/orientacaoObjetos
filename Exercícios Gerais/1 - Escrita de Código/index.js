"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Manoel_1 = require("./Manoel");
var Carlos_1 = require("./Carlos");
var Joana_1 = require("./Joana");
var manoel = new Manoel_1.Manoel('Manoel', 50, 'Driver');
var carlos = new Carlos_1.Carlos('Carlos', 35, 'Seller', 'Mazda RX8');
var joana = new Joana_1.Joana('Joana', 25, 'Designer', 'Toyota Supra', 'White House');
//Método de classe pessoa no manoel
manoel.talk();
//Método próprio do manoel
manoel.eat();
//Mesma lógica para os outros 2
carlos.talk();
carlos.eat();
carlos.sleep();
joana.talk();
joana.eat();
joana.sleep();
joana.run();
console.log(carlos.car);
