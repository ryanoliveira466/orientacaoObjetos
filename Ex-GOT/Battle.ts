
import { houseStark } from "./Classes/houseStark";
import { houseLannister } from "./Classes/houseLannister";
import { houseTargaryen } from "./Classes/houseTargaryen";
import { houseBaratheon } from "./Classes/houseBaratheon";
import { houseGreyjoy } from "./Classes/houseGreyjoy";
import { Heir } from "./Classes/Heir";


const Stark = new houseStark("Stark", "Anthem Stark", 35, 1000);
const Lannister = new houseLannister("Lannister", "Anthem Lannister", 70, 2000);
const Targaryen = new houseTargaryen("Targaryen", "Anthem Targaryen", 30, 4000);
const Baratheon = new houseBaratheon("Baratheon", "Anthem Baratheon", 40, 9000);
const Greyjoy = new houseGreyjoy("Greyjoy", "Anthem Greyjoy", 45, 5000);



function BattleOfTheHouses(){

    let arrayHouses: number[] = [Stark.getFamilyNumber(),Lannister.getFamilyNumber(),Targaryen.getFamilyNumber(),Baratheon.getFamilyNumber(),Greyjoy.getFamilyNumber()]
    let arrayNames: string[] = [Stark.houseName,Lannister.houseName,Targaryen.houseName,Baratheon.houseName,Greyjoy.houseName]
    let arrayMaior: number = 0
    let indexName: number = 0

    for(var i = 0; i < arrayHouses.length; i++)

    if(arrayHouses[i] > arrayMaior){

        arrayMaior = arrayHouses[i]
        indexName = i


    }

    console.log(`Casa vencedora: ${arrayNames[indexName]}\nNúmero pessoas: ${arrayMaior}`)


}

BattleOfTheHouses()

Stark.addHeir('Pedro',5,5)
Stark.addHeir('João',6,6)
Stark.infoHouse()





    





