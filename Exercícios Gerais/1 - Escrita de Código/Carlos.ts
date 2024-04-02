import { Manoel } from "./Manoel";

export class Carlos extends Manoel {
    public car:string

    constructor(name:string, age:number, job:string, car:string){
        super(name, age, job)
        this.car = car
    }

    sleep(): void{
        console.log('Carlos: Sleep')
    }
}

