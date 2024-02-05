import { Animal } from "./Animal";

export class Bird extends Animal {

    private wingspan: number

    constructor(name: string, age: number, wingspan: number) {

        super(name, age)
        this.wingspan = wingspan
    }

    fly(): void {

        console.log("A ave está voando ");

    }

    
    getWingspan() {

        return this.wingspan

    }

    setWingspan(newWingspan: number): void {

        this.wingspan = newWingspan

    }
}