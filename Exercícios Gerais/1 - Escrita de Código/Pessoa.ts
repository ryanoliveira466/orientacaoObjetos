export class Pessoa {

    protected name:string;
    private age:number

    constructor(name:string, age:number){
        this.name = name
        this.age = age
    }

    talk(): void{
        console.log('Pessoa: Talk')
    }

}

