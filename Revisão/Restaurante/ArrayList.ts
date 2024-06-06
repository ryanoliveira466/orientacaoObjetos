import { IList } from "./IList";
import { Comida } from "./Comida";
import { TipoComida } from "./EnumComida";


export class ArrayList implements IList {
    private listaGarcom: any[];
    private listaPedidos: any[];
    private items: any[];

    constructor() {
        this.items = [];
        this.listaGarcom = []
        this.listaPedidos = []
    }

    add(item: any): void {
        this.items.push(item);
    }

    addFirst(item: any): void {
        this.items.unshift(item);
    }

    addAt(index: number, item: any): void {
        if (index >= 0 && index <= this.items.length) {
            this.items.splice(index, 0, item);
        } else {
            throw new Error("Index out of bounds.");
        }
    }

    remove(item: any): void {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    removeFirst(): void {
        if (!this.isEmpty()) {
            this.items.shift();
        }
    }

    removeLast(): void {
        if (!this.isEmpty()) {
            this.items.pop();
        }
    }

    removeAt(index: number): void {
        if (index >= 0 && index < this.items.length) {
            this.items.splice(index, 1);
        } else {
            throw new Error("Index out of bounds.");
        }
    }

    get(index: number): any | null {
        if (index >= 0 && index < this.items.length) {
            return this.items[index];
        }
        return null;
    }

    indexOf(item: any): number {
        return this.items.indexOf(item);
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    addPedido(nome: string, tipo: TipoComida): void {

        let novoPedido = new Comida(nome, tipo)
        this.listaGarcom.push(novoPedido)
    }

    preparoPedido(): void {
        for (var i = 0; i < this.listaGarcom.length; i++) {


            if (this.listaGarcom[i].tipo === TipoComida.Bebida) {

                this.listaPedidos.push(this.listaGarcom[i])
            }

        }


        for (var i = 0; i < this.listaGarcom.length; i++) {

            if (this.listaGarcom[i].tipo === TipoComida.Almoco) {

                this.listaPedidos.push(this.listaGarcom[i])

            }

        }


        for (var i = 0; i < this.listaGarcom.length; i++) {


            if (this.listaGarcom[i].tipo === TipoComida.Sobremesa) {

                this.listaPedidos.push(this.listaGarcom[i])

            }


        }

    }





    saidaPedidos(): void {
     while(this.listaPedidos.length != 0){

        for (var i = 0; i < this.listaPedidos.length; i++) {


            if(this.listaPedidos[i].tipo === TipoComida.Bebida) {

                console.log(`Saindo`, this.listaPedidos[i]);
                this.listaPedidos.shift()
                
            }

        }



        for (var i = 0; i < this.listaPedidos.length; i++) {


            if(this.listaPedidos[i].tipo === TipoComida.Almoco) {

                console.log(`Saindo`, this.listaPedidos[i]);
                this.listaPedidos.shift()
                
            }

        }




        for (var i = 0; i < this.listaPedidos.length; i++) {


            if(this.listaPedidos[i].tipo === TipoComida.Sobremesa) {

                console.log(`Saindo`, this.listaPedidos[i]);
                this.listaPedidos.shift()
                
            }

        }


    }

    }


    mostrar(): void {
        console.log(this.listaPedidos);

    }

}


