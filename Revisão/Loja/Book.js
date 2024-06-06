"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(name, price, author) {
        this.name = name;
        this.price = price;
        this.author = author;
    }
    Book.prototype.getDescription = function () {
        return "Livro: ".concat(this.name, " - Autor: ").concat(this.author, " - Pre\u00E7o: R$").concat(this.price.toFixed(2));
    };
    return Book;
}());
exports.Book = Book;
