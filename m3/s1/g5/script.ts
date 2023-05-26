// interfaccia iniziale

interface iSmartphone{
    carica:number;
    numeroChiamate:number;
    costoMinuto:number;

    ricarica(euro:number):void;
    numero404():string;
    getNumeroChiamate():number;
    chiamata(min:number):void;
    azzeraChiamate():void;
}

// creazione della classe

class Smartphone implements iSmartphone{

    carica:number;
    numeroChiamate:number;
    costoMinuto:number = 0.20

    constructor(carica:number, numeroChiamate:number){

        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto;
    }
    
    ricarica(euro: number): void {
        this.carica += euro;
    }

    numero404():string { 
        return `Il tuo credito residuo è di € ${this.carica}`;
    }

    getNumeroChiamate():number {
        return this.numeroChiamate;
    }

    chiamata(min: number): void {
        this.numeroChiamate++;
        this.carica -= (min * this.costoMinuto)
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}