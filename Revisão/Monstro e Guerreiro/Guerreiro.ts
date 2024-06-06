import { Monstro } from "./Monstro";
export class Guerreiro {
    nome: string;
    tipo: string;
    forca: number;
    saude: number = 100

    constructor(nome: string, tipo: string, forca: number){
        this.nome = nome
        this.tipo = tipo
        this.forca = forca
    }

    atacar(monstro: Monstro){

        if(monstro.saude != 0){
        let dano: number = Math.floor(Math.random() * this.forca)
        monstro.saude = monstro.saude - dano
        console.log(`'${this.nome}' ataca '${monstro.nome}' com '${dano}' de força\nVida do monstro: '${monstro.saude}'`)
    }

    if(monstro.saude === 0){
        console.log('Você derrotou o inimigo');
    }
    }


}

