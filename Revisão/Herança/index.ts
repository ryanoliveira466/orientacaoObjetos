import { Animal } from "./Animal";
import { Dog} from "./Dog";

const dog = new Dog('Rex', 10)

dog.bark()
dog.eat(5)
console.log(dog.name);
console.log(dog.weight);

