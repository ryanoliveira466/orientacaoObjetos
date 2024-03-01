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









//Restante

//Fácil

//5.Escreva um programa que calcule a soma dos números pares de 1 a 10 usando um loop for. Use um if dentro do loop para verificar se o número é par.
let emptyBottle3: number = 0
for(var i = 1 ; i <= 10 ; i++){
    if(i%2 === 0){

        emptyBottle3 += i

    }
}

console.log(emptyBottle3)

//6.Escreva um programa que encontre o menor número em um array usando um loop for. Crie um array com pelo menos 5 números.

let arrayNumbers3: number[] = [2,10,5,7,9,1]
let emptyBottle4: number = arrayNumbers3[0]

for(var i = 0; i < arrayNumbers3.length; i++){
    if(arrayNumbers3[i] < emptyBottle4){

        emptyBottle4 = arrayNumbers3[i]

    }
}
console.log(emptyBottle4)




//Médio

//2.Escreva um programa que conte o número de vogais (a, e, i, o, u) em uma string.
// let a = 'a'
// let b = 'e'
// console.log(a === b)
// retorna false


let string2:string = 'Dois'
let vowelsArray: string[] = []

for(var i = 0; i < string2.length; i++){
    if(string2[i] === 'i' || string2[i] === 'a' || string2[i] === 'e' || string2[i] === 'o' || string2[i] === 'u' || string2[i] === 'I' || string2[i] === 'A' || string2[i] === 'E' || string2[i] === 'O' || string2[i] === 'U'){
        
    console.log(string2[i])
    vowelsArray.push(string2[i])
    
    }
}

console.log('Numbers of vowels' ,vowelsArray.length)


//4.Escreva um programa que calcule a média das notas armazenadas em um objeto. Cada propriedade do objeto representa uma matéria e seu valor é a nota obtida pelo aluno. 
let valuesAvg: number = 0
let valuesArray: number[] = []
let valuesClass = {
  
  math: number = 9
  geo: number = 9
  eng: number = 9 

}

for(i in valuesClass){
  
  valuesAvg += valuesClass[i]
  valuesArray.push(valuesClass[i])
  
}

console.log(valuesAvg / valuesArray.length)

//5.Escreva um programa que verifique se um determinado elemento existe em um array de objetos.

class Objetos {
  
  elemento: string
  valor: number
  
  
  constructor(elemento: string, valor:number){
    
  this.elemento = elemento
  this.valor = valor
  
}
}

const objetoA = new Objetos("A",1)
const objetoB = new Objetos("B",2)
const objetoC = new Objetos("C",3)

let arrayObjetos: Objetos[] = [objetoA,objetoB,objetoC]


function veirfyElement(a: string, b: number): void{
  
for (var k = 0;k < arrayObjetos.length;k++){
  
  
  
  
  for (const i in arrayObjetos[k]){

    if (a === arrayObjetos[k][i]){
      console.log("Elemento",a)
      console.log("Na Array de objetos do index",k)
    }
    
    if (b === arrayObjetos[k][i]){
      console.log("Valor",b)
      console.log("Na Array de objetos do index",k)
    }
  }
}

}
 veirfyElement("A", 3) 
