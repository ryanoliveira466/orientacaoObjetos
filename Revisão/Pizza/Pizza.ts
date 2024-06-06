import { SaborPizza } from "./SaborPizza";


export class Pizza {

    sabor: SaborPizza;
    tamanho: number;
    preco: number;

    constructor(sabor: SaborPizza, tamanho:number, preco:number){
        this.sabor = sabor;
        this.tamanho = tamanho
        this.preco = preco
    }

    info(): void {
        console.log(`Pizza: ${this.sabor}\nTamanho: ${this.tamanho}\nPreço:R$ ${this.preco}`);
        
    }

}