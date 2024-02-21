//Fácil

//1. Escreva um programa que imprima os números de 1 a 5 usando um loop for.

for (var i = 1; i < 6; i++){

console.log(`Numbers: ${i}`)
}

//2. Enunciado: Escreva um programa que imprima as propriedades de um objeto usando um loop for...in. Crie um objeto com pelo menos 3 atributos à sua escolha.

const person = {

    name: 'Ryan',
    age: '19',
    country: 'Brazil',

}

for (const i in person) {
    console.log(i + ':  ' + person[i]);
    
}

//3. Escreva um programa que imprima os elementos de um array usando o método forEach(). Crie um array com pelo menos 5 itens à sua escolha.
const arrayAlpha: string[] = ['a', 'b', 'c', 'd']

arrayAlpha.forEach(i => {
    console.log(`Elements: ${i}`);
    
})

//4. Escreva um programa que imprima os caracteres de uma string usando um loop for...of.  A string é de sua escolha.

const string: string = 'Ryan'

for (const i of string){
    console.log(i)
}


//Médio


//1. Escreva um programa que calcule a média dos números em um array de números. Use um loop for.

const arrayNumbers: number[] = [1, 2, 3, 4, 5]
let emptyBottle: number = 0

function averge(){

for(var i = 0; i < arrayNumbers.length; i++){

    emptyBottle += arrayNumbers[i]

}

console.log('Averge', emptyBottle / arrayNumbers.length)


}

averge()

//2. Escreva um programa que conte o número de propriedades em um objeto.
let arrayElements: string[] = []
const person2 = {
    
    name: 'Alan',
    age: '31',
    country: 'Brazil',
    

}

for (const i in person2){
    console.log(person2[i])
    arrayElements.push(person2[i])
    
}

console.log('Number of properties', arrayElements.length)

//3. Escreva um programa que encontre o maior número em um array usando o método forEach().

let arrayNumbers2: number[] = [1, 6, 3, 4, 5]
let emptyBottle2: number = 0

arrayNumbers2.forEach(i => {
    
    if(i > emptyBottle2){
        emptyBottle2 = i
    }

    
    

})

console.log(emptyBottle2)

//4. Escreva um programa que inverta uma string usando um loop for...of.

let myName: string = 'Ryan'
let changeName: string = ``
let reverseName: string = ``

for (const i of myName){

    changeName = changeName + i

}


for(var i = changeName.length - 1; i >= 0; i--){
    reverseName += `${changeName[i]}`
    
    
}

console.log(`Reversed name: ${reverseName}`)

for (const i of reverseName){

    console.log(i)

    
}




