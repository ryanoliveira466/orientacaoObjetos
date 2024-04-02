import { Carlos } from "./Carlos";

export class Joana extends Carlos {
    house:string

    constructor(name:string, age:number, job:string, car:string, house:string){
        super(name, age, job, car)
        this.house = house
    }

    run(): void{
        console.log('Joana: Run');
        
    }
}