var arrayMovies = ["A", "B", "C"];
var movie = "A";
//1
function contemFilme(a, b) {
    return a.includes(b);
}
console.log(contemFilme(arrayMovies, movie));
//2
var arrayGames = ["CSGO", "LOL", "DOTA"];
var newGame = "DARK SOULS";
function adicionarLogo(a, b) {
    a.push(b);
    return a;
}
console.log(adicionarLogo(arrayGames, newGame));
//3
function removerJogo(a) {
    a.pop();
    return a;
}
console.log(removerJogo(arrayGames));
//4
var numbers = [1, 2, 3, 4, 5];
function evenNumbers(a) {
    return a.filter(function (a) { return a % 2 === 0; });
}
console.log(evenNumbers(numbers));
//5
var numbers2 = [1, 2, 3, 4, 5, 6, 7, 8];
function dobrarParesMenoresQueCinco(a) {
    return a.filter(function (a) { return a < 5 && a % 2 === 0; }).map(function (a) { return a * 2; });
}
console.log(dobrarParesMenoresQueCinco(numbers2));
