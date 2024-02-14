import { HouseRules } from "../Interfaces/HouseRules";
import { NobleHouse } from "./NobleHouse";
export class houseStark extends NobleHouse implements HouseRules{

    houseFamilyNumber: number;
    houseMoney: number;

    constructor(houseName: string, houseAnthem: string, houseFamilyNumber: number, houseMoney: number){

        super(houseName, houseAnthem)
        this.houseName = houseName
        this.houseAnthem = houseAnthem
        this.houseFamilyNumber = houseFamilyNumber
        this.houseMoney = houseMoney
    }

    houseTalk(): void{
        console.log("The family is talking")
    }

    getFamilyNumber(): number{

        return this.houseFamilyNumber

    }

}
