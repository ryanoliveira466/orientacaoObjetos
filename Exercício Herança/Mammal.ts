import { Animal } from "./Animal";

export class Mammal extends Animal {

    private coat: String;

    constructor(name: String, age: Number, coat: String) {

        super(name, age);
        this.coat = coat
    }

    breatfeed(): void {

        console.log("O Animal está amamentando");

    }

    
    getCoat() {

        return this.coat

    }

    setCoat(newCoat: string): void {

        this.coat = newCoat

    }


}