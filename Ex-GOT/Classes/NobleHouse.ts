import { Heir } from "./Heir";
export class NobleHouse {
    
    houseName: string;
    houseAnthem: string;
    arrayHeir: Heir[] = [];
    
    

    constructor(houseName: string, houseAnthem: string){

        this.houseName = houseName
        this.houseName = houseAnthem
        

    }

    addHeir(heir: string, age: number, position:number): void {
        const herdeiro = new Heir(heir,age,position);
        this.arrayHeir.push(herdeiro);

    }

    infoHouse(): void {  
        console.log("Nome casa:",this.houseName);
        console.log("Lema casa:",this.houseAnthem);
        console.log("Herdeiros da casa:", this.houseName, this.arrayHeir)
        
    }
        
        
        
        
    }

   
    
