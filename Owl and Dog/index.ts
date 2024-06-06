import { Dog } from "./Dog";
import { Owl } from "./Owl";


const myDog = new Dog("Mia",6)
const myOwl = new Owl("Coruja",5)


myDog.bark()
myDog.eat(5)

myOwl.chirp()
myOwl.eat(5)
myOwl.fly(5)