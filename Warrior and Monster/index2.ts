import { Warrior } from "./Warrior";
import { Monster } from "./Monster";

const myMonster = new Monster("Cobra")

const myWarrior = new Warrior("Ryan","Guerreiro",30)


myMonster.info()
myWarrior.attack(myMonster)
myMonster.info()

myMonster.attack(myWarrior)