"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Status_1 = require("./Status");
var currentDate = new Date().toDateString();
var Livro = /** @class */ (function () {
    function Livro(titulo, autor, genero, genero1, status, usuarioStatus, reservado, usuarioReservado, diaEmprestimo, diaDevolucaoLivro, atrasado) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.genero1 = genero1;
        this.status = status;
        this.usuarioStatus = usuarioStatus;
        this.reservado = reservado;
        this.usuarioReservado = usuarioReservado;
        this.diaEmprestimo = diaEmprestimo;
        this.diaDevolucaoLivro = diaDevolucaoLivro;
        this.atrasado = atrasado;
    }
    Livro.prototype.changeStatus = function () {
        this.status = Status_1.Status.Emprestado;
    };
    Livro.prototype.changeReservado = function () {
        this.reservado = Status_1.Status.Reservado;
    };
    Livro.prototype.changeStatusDisponivel = function () {
        this.status = Status_1.Status.Disponivel;
    };
    Livro.prototype.changeDiaEmprestimo = function () {
        this.diaEmprestimo = currentDate;
    };
    return Livro;
}());
exports.Livro = Livro;
