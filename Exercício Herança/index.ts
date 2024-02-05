
import { Bird } from "./Bird";
import { Mammal} from "./Mammal";

const myBird = new Bird("Arara-azul",20,40);
const myMamal = new Mammal("Onça-pintada",10,"Pelo macio");

console.log(myBird.getName());
console.log(myBird.getAge());
myBird.emitSound();
myBird.fly();
console.log(myBird.getWingspan());

console.log(myMamal.getName());
console.log(myMamal.getAge());
myMamal.emitSound();
myMamal.breatfeed();
console.log(myMamal.getCoat());



myBird.setName("Caturrita");
myBird.setAge(15);
myBird.setWingspan(50);
console.log(myBird.getName());
console.log(myBird.getAge());
console.log(myBird.getWingspan());

myMamal.setName("Leopardo");
myMamal.setAge(5);
myMamal.setCoat("Pelo curto");
console.log(myMamal.getName());
console.log(myMamal.getAge());
console.log(myMamal.getCoat());





