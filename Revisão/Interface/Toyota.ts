import { Car } from "./Car";
export class Toyota implements Car {

    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    startEngine(): void {
        console.log('Engine started!');
        
    }

    stopEngine(): void {
        console.log('Engine stoped');
        
    }


}