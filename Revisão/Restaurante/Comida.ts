import { TipoComida } from "./EnumComida";

export class Comida {
    nome: string;
    tipo: TipoComida;

    constructor(nome: string, tipo: TipoComida){
        this.nome = nome;
        this.tipo = tipo;
    }
}