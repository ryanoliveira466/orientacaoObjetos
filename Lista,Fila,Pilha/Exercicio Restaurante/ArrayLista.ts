import { IListaPedidos } from "./IListaPedidos";
import { TipoComida } from "./TipoComida";
import { Comida } from "./Comida";



export class ArrayLista implements IListaPedidos {
    private items: any[];
    arrayListaGarcom: any[];
    arrayListaPreparo: any[];
    
    

    constructor() {
        this.items = [];
        this.arrayListaGarcom = []
        this.arrayListaPreparo = []
        
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

    registrarPedidoGarcom(nome: string, tipo: TipoComida) {

        let pedidoGarcom: Comida = new Comida(nome, tipo)
        this.arrayListaGarcom.push(pedidoGarcom)
    
    }


    preparoMaisRapido():void {

        for (var i = 0; i < this.arrayListaGarcom.length; i++) {
    
            if (this.arrayListaGarcom[i].tipo === TipoComida.Bebidas) {
                this.arrayListaPreparo.push(this.arrayListaGarcom[i])
            }
    
        }
    
        for (var i = 0; i < this.arrayListaGarcom.length; i++) {
    
            if (this.arrayListaGarcom[i].tipo === TipoComida.Prato_Principal) {
                this.arrayListaPreparo.push(this.arrayListaGarcom[i])
            }
    
        }
    
        for (var i = 0; i < this.arrayListaGarcom.length; i++) {
    
            if (this.arrayListaGarcom[i].tipo === TipoComida.Sobremesas) {
                this.arrayListaPreparo.push(this.arrayListaGarcom[i])
            }
    
    
        }
    
    }



    saidaPedidos(): void {

        while(this.arrayListaPreparo.length !== 0){    
        
        console.log(`Saindo pedido mais rápido`)
        console.log(this.arrayListaPreparo[0])
        
        this.arrayListaPreparo.shift()
        }
        
        }
    

        


}
