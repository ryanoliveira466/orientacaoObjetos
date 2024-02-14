"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var houseStark_1 = require("./Classes/houseStark");
var houseLannister_1 = require("./Classes/houseLannister");
var houseTargaryen_1 = require("./Classes/houseTargaryen");
var houseBaratheon_1 = require("./Classes/houseBaratheon");
var houseGreyjoy_1 = require("./Classes/houseGreyjoy");
var Stark = new houseStark_1.houseStark("Stark", "Anthem Stark", 35, 1000);
var Lannister = new houseLannister_1.houseLannister("Lannister", "Anthem Lannister", 70, 2000);
var Targaryen = new houseTargaryen_1.houseTargaryen("Targaryen", "Anthem Targaryen", 30, 4000);
var Baratheon = new houseBaratheon_1.houseBaratheon("Baratheon", "Anthem Baratheon", 40, 9000);
var Greyjoy = new houseGreyjoy_1.houseGreyjoy("Stark", "Anthem Greyjoy", 45, 5000);
function BattleOfTheHouses() {
    var arrayHouses = [Stark.getFamilyNumber(), Lannister.getFamilyNumber(), Targaryen.getFamilyNumber(), Baratheon.getFamilyNumber(), Greyjoy.getFamilyNumber()];
    var arrayNames = [Stark.houseName, Lannister.houseName, Targaryen.houseName, Baratheon.houseName, Greyjoy.houseName];
    var arrayMaior = 0;
    var indexName = 0;
    for (var i = 0; i < arrayHouses.length; i++)
        if (arrayHouses[i] > arrayMaior) {
            arrayMaior = arrayHouses[i];
            indexName = i;
        }
    console.log("Casa vencedora: ".concat(arrayNames[indexName], "\nN\u00FAmero pessoas: ").concat(arrayMaior));
}
BattleOfTheHouses();
Stark.addHeir('Pedro', 5, 5);
Stark.addHeir('João', 6, 6);
Stark.infoHouse();
