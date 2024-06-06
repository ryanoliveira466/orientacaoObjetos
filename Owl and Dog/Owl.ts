import { Animal } from "./Animal";

export class Owl extends Animal {

    constructor(name: string, weight: number) {

        super(name, weight);

    }

    chirp(): void {
        console.log("Hu Hu");
    }

    fly(quantity: number): void {
        console.log("The owl has flown for" + quantity)
    }
}