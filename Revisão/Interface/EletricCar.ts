import { Car } from "./Car"
export interface EletricCar extends Car {
    batteryCapacity: number;
    chargeBattery(): void;
}