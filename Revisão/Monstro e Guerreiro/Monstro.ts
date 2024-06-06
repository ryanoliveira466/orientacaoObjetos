import { Guerreiro } from "./Guerreiro";
export class Monstro {
    nome: string;
    tipo: string;
    forca: number = 50
    saude: number = 10

    constructor(nome: string, tipo: string){
        this.nome = nome
        this.tipo = tipo
    }

    atacar(guerreiro: Guerreiro){
        if(guerreiro.saude != 0){
        let dano: number = Math.floor(Math.random() * this.forca)
        guerreiro.saude = guerreiro.saude - dano
        console.log(`'${this.nome}' ataca '${guerreiro.nome}' com '${dano}' de força\nVida do guerreiro: '${guerreiro.saude}'`)
    }

    if(guerreiro.saude === 0){
        console.log('Você derrotou o inimigo');
    }

}



}

