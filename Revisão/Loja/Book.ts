import { Product } from "./Product";

export class Book implements Product {

    name: string;
    price: number
    author: string;

    constructor(name: string, price: number, author:string){
        this.name = name
        this.price = price
        this.author = author
    }

    getDescription(): string {
        return `Livro: ${this.name} - Autor: ${this.author} - Preço: R$${this.price.toFixed(2)}`
    }



}