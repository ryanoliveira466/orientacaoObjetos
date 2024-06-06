//String
var myName = "Ryan";
//Boolean
var ok = true;
//Number
var myAge = 19;
//Array
var array = [1, 2, 3];
var array1 = [1, 2, 3];
//Objetos
var professor = {
    name: "Ryan",
    age: 19
};
console.log("Hello World");
var listaDeCompras = ["A", "B", "C"];
var listaDeCompras1 = ["D", "E", "F"];
function sum1(a, b) {
    return a + b;
}
console.log(sum1(5, 6));
function sayHello(name) {
    console.log("Hello", name || "World");
}
//VOID SE NÃO TIVER RETURN
sayHello("Ryan");
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(5));
console.log(applyDiscount(5, 1));
var nome = "Ryan";
var idade = 19;
console.log("Olá!", "Meu nome é", nome, "e eu tenho", idade, "anos");
var myFirstName = "Ryan";
var mySecondName = "Oliveira";
var myNewAge = 19;
var studentBoolean = true;
console.log("Nome: ".concat(myFirstName, "\nSobrenome: ").concat(mySecondName, "\nIdade: ").concat(myNewAge, "\nEstudande: ").concat(studentBoolean));
var got = "Game of Thrones";
var temporadas = 8;
console.log(typeof got);
console.log(typeof temporadas);
//1 - O que será impresso
var a = 10;
var b = 20;
console.log(b); // b = 20
b = 5;
console.log(a, b); // a = 10, b = 5
//2 - O que será impresso
var a1 = 10;
var b1 = 20;
var c1 = a1;
b1 = c1;
a1 = b1;
console.log(a1, b1, c1); //a1 = 10, b1 = 10 , c1 = 10
//3 - Trocar valores de variáveis
var a2 = 10;
var b2 = 25;
var empty = b2;
b2 = a2;
a2 = empty;
console.log("O novo valor de a é ", a2);
console.log("O novo valor de b é", b2);
