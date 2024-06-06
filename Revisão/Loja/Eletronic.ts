import { Product } from "./Product";

export class Eletronic implements Product {

    name: string;
    price: number
    brand: string;

    constructor(name: string, price: number, brand:string){
        this.name = name
        this.price = price
        this.brand = brand
    }

    getDescription(): string {
        return `Eletrônico: ${this.name} - Marca: ${this.brand} - Preço: R$${this.price.toFixed(2)}`
    }



}