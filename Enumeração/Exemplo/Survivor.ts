import { Level} from "./Level";

export class Survivor {
    protected level: Level; //Propriedade do tipo level

    constructor(level: Level = Level.BLUE) {
        this.level = level
    }


//Método para obter o nível do sobrevivente
getLevel(): Level {
    return this.level;
}


//Método para subir de nível
levelUp(): Level | null {
    //Obtém o próximo nível baseado no nível atual
    const nextLevel = this.getNextLevel()

    //Verifica se o próximo nível existe
    if (nextLevel !== null){
        this.level = nextLevel //Define o próximo nível como  o novo nível
        return this.level //Retorna o novo nível
    }

    else{
        console.log('Não há próximo nível disponível')
        return null;
    }

}

private getNextLevel(): Level | null {
    switch (this.level) {
        case Level.BLUE:
            return Level.YELLOW;
        case Level.YELLOW:
            return Level.ORANGE;
        case Level.ORANGE:
            return Level.RED
        case Level.RED:   
            return null; //Não há próximo nível após o vermelho        
    }
}
}
