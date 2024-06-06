enum DiasDaSemana {
    Segunda,
    Terça,
    Quarta,
    Quinta,
    Sexta,
    Sábado,
    Domingo
}

console.log(DiasDaSemana.Segunda);




enum Cores {
    Vermelho = '#FF0000',
    Verde = '#00FF00',
    Azul = '#0000FF'
}

console.log(Cores.Verde);










enum Direcoes {
    Norte,
    Sul,
    Leste,
    Oeste
}

for(let direcao in Direcoes){
    console.log(direcao);
}

export enum Level {
    BLUE, //O
    YELLOW, //1
    ORANGE, //2
    RED //3
}

export enum Level1 {
    BLUE = 0,
    YELLOW = 10,
    ORANGE = 20,
    RED = 30
}

export enum Level2 {
    BLUE = 1, //1
    YELLOW, //2
    ORANGE, //3
    RED //4
}

export enum Level3{
    BLUE = 'Blue',
    YELLOW = 'Yellow',
    ORANGE = 'Orange',
    RED = 'Red'
}








