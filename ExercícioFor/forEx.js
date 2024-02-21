//Fácil
//1. Escreva um programa que imprima os números de 1 a 5 usando um loop for.
for (var i = 1; i < 6; i++) {
    console.log("Numbers: ".concat(i));
}
//2. Enunciado: Escreva um programa que imprima as propriedades de um objeto usando um loop for...in. Crie um objeto com pelo menos 3 atributos à sua escolha.
var person = {
    name: 'Ryan',
    age: '19',
    country: 'Brazil',
};
for (var i_1 in person) {
    console.log(i_1 + ':  ' + person[i_1]);
}
//3. Escreva um programa que imprima os elementos de um array usando o método forEach(). Crie um array com pelo menos 5 itens à sua escolha.
var arrayAlpha = ['a', 'b', 'c', 'd'];
arrayAlpha.forEach(function (i) {
    console.log("Elements: ".concat(i));
});
//4. Escreva um programa que imprima os caracteres de uma string usando um loop for...of.  A string é de sua escolha.
var string = 'Ryan';
for (var _i = 0, string_1 = string; _i < string_1.length; _i++) {
    var i_2 = string_1[_i];
    console.log(i_2);
}
//Médio
//1. Escreva um programa que calcule a média dos números em um array de números. Use um loop for.
var arrayNumbers = [1, 2, 3, 4, 5];
var emptyBottle = 0;
function averge() {
    for (var i = 0; i < arrayNumbers.length; i++) {
        emptyBottle += arrayNumbers[i];
    }
    console.log('Averge', emptyBottle / arrayNumbers.length);
}
averge();
//2. Escreva um programa que conte o número de propriedades em um objeto.
var arrayElements = [];
var person2 = {
    name: 'Alan',
    age: '31',
    country: 'Brazil',
};
for (var i_3 in person2) {
    console.log(person2[i_3]);
    arrayElements.push(person2[i_3]);
}
console.log('Number of properties', arrayElements.length);
//3. Escreva um programa que encontre o maior número em um array usando o método forEach().
var arrayNumbers2 = [1, 6, 3, 4, 5];
var emptyBottle2 = 0;
arrayNumbers2.forEach(function (i) {
    if (i > emptyBottle2) {
        emptyBottle2 = i;
    }
});
console.log(emptyBottle2);
//4. Escreva um programa que inverta uma string usando um loop for...of.
var myName = 'Ryan';
var changeName = "";
var reverseName = "";
for (var _a = 0, myName_1 = myName; _a < myName_1.length; _a++) {
    var i_4 = myName_1[_a];
    changeName = changeName + i_4;
}
for (var i = changeName.length - 1; i >= 0; i--) {
    reverseName += "".concat(changeName[i]);
}
console.log("Reversed name: ".concat(reverseName));
for (var _b = 0, reverseName_1 = reverseName; _b < reverseName_1.length; _b++) {
    var i_5 = reverseName_1[_b];
    console.log(i_5);
}
