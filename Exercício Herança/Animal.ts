export class Animal {

    private name: String;
    private age: Number;

    constructor(name: String, age: Number) {
        this.name = name
        this.age = age
    }

    emitSound(): void {

        console.log("Som do animal")

    }

    getName() {

        return this.name

    }

    setName(newName: string): void {

        this.name = newName

    }

    
    getAge() {

        return this.age

    }

    setAge(newAge: number): void {

        this.age = newAge

    }


}
