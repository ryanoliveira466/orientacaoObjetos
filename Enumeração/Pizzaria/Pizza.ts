import { SaborPizza } from "./enumSaborPizza";

class Pizza {

    sabor: SaborPizza
    tamanho: number;
    preco: number;

    constructor(sabor: SaborPizza, tamanho: number, preco:number){
        this.sabor = sabor
        this.tamanho = tamanho
        this.preco = preco
    }


    descricao(): void {
        console.log(`Pizza ${this.sabor}\nTamanho ${this.tamanho}\nPreço ${this.preco}`)
    }

}



const pizza1 = new Pizza(SaborPizza.Pepperoni,10,10);
const pizza2 = new Pizza(SaborPizza.Portuguesa,20,20);
const pizza3 = new Pizza(SaborPizza.Queijo,30,30);



pizza1.descricao(), pizza2.descricao(), pizza3.descricao()