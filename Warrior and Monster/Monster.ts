import { Warrior } from "./Warrior";

export class Monster{
    
    private name: string
    private strength: number = 50
    private life: number = 10

    constructor(name: string){

        this.name = name
        this.strength = 50
        this.life = 10

}


public attack(myWarrior:Warrior): void {
    const damage = this.strength
    myWarrior.receiveDamage(damage)
    console.log(`${this.name} attacks ${myWarrior.getName()}, dealing ${damage} points,`)
    
}

public receiveDamage(damage: number): void {
    this.life -= damage;


}

public info(): void{
    
    console.log(`Nome ${this.name} \n  Vida ${this.life} \n  Força ${this.strength}`)

}

public getName() {
    return this.name
}

public setName(newName: string): void {
    this.name = newName
}


public getLife() {
    return this.life
}

public getStrength() {
    return this.life
}
}



