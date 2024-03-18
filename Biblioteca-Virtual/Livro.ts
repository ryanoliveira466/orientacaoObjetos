import { Generos } from "./Generos";
import { Status } from "./Status";
const currentDate = new Date().toDateString();

export class Livro {
    titulo: string;
    autor: string;
    genero: Generos
    genero1: Generos | null
    status: Status
    usuarioStatus: number | null
    reservado: Status | null
    usuarioReservado: number | null
    diaEmprestimo: string | null
    diaDevolucaoLivro: string
    atrasado: Status | null
  
  
    constructor(titulo: string, autor: string, genero: Generos, genero1: Generos | null, status: Status, usuarioStatus: number | null, reservado: Status | null, usuarioReservado: number | null, diaEmprestimo: string | null, diaDevolucaoLivro: string, atrasado: Status | null) {
      this.titulo = titulo;
      this.autor = autor;
      this.genero = genero
      this.genero1 = genero1
      this.status = status
      this.usuarioStatus = usuarioStatus
      this.reservado = reservado
      this.usuarioReservado = usuarioReservado
      this.diaEmprestimo = diaEmprestimo
      this.diaDevolucaoLivro = diaDevolucaoLivro
      this.atrasado = atrasado
  
    }
  
    changeStatus(): void {
  
      this.status = Status.Emprestado
  
    }
  
    changeReservado(): void {
  
      this.reservado = Status.Reservado
  
    }
  
  
    changeStatusDisponivel(): void {
  
      this.status = Status.Disponivel
  
    }
  
    changeDiaEmprestimo(): void {
  
      this.diaEmprestimo = currentDate
  
    }
  
  }