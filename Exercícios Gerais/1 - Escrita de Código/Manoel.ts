import { Pessoa } from "./Pessoa";

export class Manoel extends Pessoa {

    protected job:string // atributo exlusivo de Manoel

    constructor(name: string, age:number , job:string){
        super(name,age)
        this.job = job
    }

    eat(): void{
        console.log('Manoel: Eat')  // método exclusivo de Manoel
    }
    
}

