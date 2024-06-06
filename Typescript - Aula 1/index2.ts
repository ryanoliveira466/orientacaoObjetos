let arrayMovies: string[] = ["A", "B", "C"]
let movie: string = "A"

//1
function contemFilme(a: string[],b: string): boolean{

return a.includes(b)

}

console.log(contemFilme(arrayMovies, movie))

//2
let arrayGames: string[] = ["CSGO", "LOL", "DOTA"]
let newGame: string = "DARK SOULS"

function adicionarLogo(a: string[] ,b: string): string[]{

a.push(b)
return a


}

console.log(adicionarLogo(arrayGames, newGame))


//3

function removerJogo(a: string[]): string[]{

a.pop()
return a


}

console.log(removerJogo(arrayGames))

//4

let numbers: number[] = [1, 2, 3, 4 ,5]

function evenNumbers(a: number[]): number[]{

return a.filter(a => a % 2 === 0)


}

console.log(evenNumbers(numbers));



//5
let numbers2: number[] = [1, 2, 3, 4, 5 ,6 ,7 ,8]

function dobrarParesMenoresQueCinco(a: number[]): number[]{

    return a.filter(a => a < 5 && a % 2 === 0).map(a => a * 2);

}

console.log(dobrarParesMenoresQueCinco(numbers2))