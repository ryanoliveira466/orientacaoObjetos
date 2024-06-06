import { Monster } from "./Monster";


export class Warrior{
    
    private name: string;
    private type: string
    private strength: number
    private life: number = 100

    constructor(name: string, type: string, strenght: number){

        this.name = name
        this.type = type
        this.strength = strenght
        this.life = 100
        
}

public attack(myMonster:Monster): void {
    const damage = this.strength;
    myMonster.receiveDamage(damage)
    console.log(`${this.name} attacks ${myMonster.getName()}, dealing ${damage} points,`)
    
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





public getType() {
    return this.type
}

public setType(newType: string): void {
    this.type= newType
}





public getStrength() {
    return this.strength
}

public setStrength(newStrength: number): void {
    this.strength = newStrength
}




public getLife() {
    return this.life
}
}




