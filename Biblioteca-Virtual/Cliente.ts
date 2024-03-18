import { Livro } from "./Livro";
export class Cliente {
    nome: string;
    ID: number;
    contato: string
    arrayL: Livro[] = []
  
  
  
  
    constructor(nome: string, ID: number, contato: string) {
      this.nome = nome
      this.ID = ID
      this.contato = contato
    }
  
    hc(a: Livro): void {
  
      this.arrayL.push(a)
  
    }
  
    mhc(): void {
  
      console.log(this.arrayL)
  
    }
  
  }
  