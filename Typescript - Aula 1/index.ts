//String

let myName: string = "Ryan"

//Boolean

let ok: boolean = true

//Number

let myAge: number = 19


//Array

let array: Array<number> = [1,2,3]
let array1: number[] = [1,2,3]

//Objetos

let professor: {name: string, age: number} = {
    name: "Ryan",
    age: 19
}


console.log("Hello World")

let listaDeCompras: string[] = ["A","B","C"]
let listaDeCompras1: Array<string> = ["D","E","F"]

function sum1(a: number,b: number): number {
    return a + b
}

console.log(sum1(5,6))

function sayHello(name?: string): void {
    console.log("Hello" , name || "World")
}

//VOID SE NÃO TIVER RETURN

sayHello("Ryan")


function applyDiscount (price: number, discount: number = 0.05) : number{
    return price * (1 - discount);
}

console.log(applyDiscount(5));
console.log(applyDiscount(5,1));


const nome: string = "Ryan"
const idade: number = 19

console.log("Olá!", "Meu nome é", nome , "e eu tenho", idade , "anos");


let myFirstName: string = "Ryan"
let mySecondName: string = "Oliveira"
let myNewAge: number = 19
let studentBoolean: boolean = true
console.log(`Nome: ${myFirstName}\nSobrenome: ${mySecondName}\nIdade: ${myNewAge}\nEstudande: ${studentBoolean}`);


const got: string = "Game of Thrones"
const temporadas: number = 8

console.log(typeof got)
console.log(typeof temporadas)


//1 - O que será impresso
let a: number = 10
let b: number = 20

console.log(b)// b = 20

b = 5

console.log(a,b)// a = 10, b = 5

//2 - O que será impresso


let a1: number = 10
let b1: number = 20
let c1: number = a1
b1 = c1
a1 = b1

console.log(a1, b1, c1)//a1 = 10, b1 = 10 , c1 = 10



//3 - Trocar valores de variáveis

let a2: number = 10
let b2: number = 25

let empty: number = b2

b2 = a2

a2 = empty

console.log("O novo valor de a é ", a2)
console.log("O novo valor de b é", b2)


//Elementos Array

let frutas: string[] = ["Maçã", "Banana", "Maracujá"]

let numeros: number[] = [1, 2, 3]

//Acessando elementos array

console.log(frutas[0]) //maça
console.log(frutas[1]) //Banana

//Adicionando Elementos no Array

frutas.push("Abacaxi");
console.log(frutas) // "Maça","Banana","Maracujá","Abacaxi"

//Removendo o último elemento no Array

frutas.pop();
console.log(frutas) // "Maça","Banana","Maracujá"



//Iterando sobre um Array

for (var i = 0; i < frutas.length; i++){

console.log(frutas[i])

}





//Includes
//Verifica se algo existe dentro do Array

const seriesBoas: string[] = ["Breaking Bad", "Brooklyn Nine-Nine"]
seriesBoas.includes("Breaking Bad") //True
seriesBoas.includes("Game of Thrones") //False 





//Splice

const letras: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"]
letras.splice(2, 1)
//letras = ["A", "B", "D", "E", "F", "G", "H"]



//Arrays com diferentes tiposde dados

let mix: (string | number)[] = ["Maçã", 1, "Banana", 10]

let mix1: (string | number | boolean)[] = ["Maçã", 5, true, 10, false, "Banana"]






//Map
let numeros2: number[] = [1,2,3,4,5]

let dobrados: number[] = numeros2.map(numeros => numeros * 2)
//[2,4,6,8,10]


let frutas2: string[] = ["Maçã", "Pera", "Morango"]

let frutasComPrefixo: string[] = frutas2.map(frutas2 => `Fruta: ${frutas2}`)
// ["Fruta: Maçã", "Fruta: Pera", "Fruta: Morango"]


let numeros3: string[] = ["1", "2", "3"]

let numerosConvertidos: number[] = numeros3.map(numeros3 => Number(numeros3))
//[1, 2, 3]




//Filter

let numeros4: number[] = [1, 2, 3, 4, 5]
let numerosMenores: number[] = numeros4.filter(numeros4 => numeros4 < 3)
//[1, 2]




//Reduce

let numeros5: number[] = [1, 2, 3, 4, 5]

let soma: number = numeros5.reduce((acumulador,numeros5) => {

    return acumulador + numeros5

},0)

//15