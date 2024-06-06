import { EletricCar } from "./EletricCar";

export class Tesla implements EletricCar {

    batteryCapacity: number;
    brand: string;
    model: string;
    year: number;

    constructor(batteryCapacity: number, brand: string, model: string, year: number){
        this.batteryCapacity = batteryCapacity
        this.brand = brand
        this.model = model
        this.year = year
    }

    chargeBattery(): void {
        console.log('Battery is charging');
        
    }

    startEngine(): void {
        console.log('Engine started!');
    }

    stopEngine(): void {
        console.log('Engine stoped');
        
    }



}