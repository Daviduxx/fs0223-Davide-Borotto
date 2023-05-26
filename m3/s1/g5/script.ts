// interfacce

// interface iRegistro{
//     id:number;
//     durata:number;
//     timing:Date;
// }

interface iSmartphone{
    carica:number;
    numeroChiamate:number;
    costoMinuto:number;
    registro:{ id:number, durata:number, timing:Date }[]

    ricarica(euro:number):void;
    numero404():string;
    getNumeroChiamate():number;
    chiamata(min:number):void;
    azzeraChiamate():void;
    mostraRegistroChiamate():void;
    filtraChiamatePerDataOra():void;
}

// creazione della classe

class Smartphone implements iSmartphone {

    carica:number;
    numeroChiamate:number;
    costoMinuto:number = 0.20;
    registro:{ id:number, durata:number, timing:Date} []

    constructor(carica:number, numeroChiamate:number, id:number, durata:number, timing:Date){

        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto;
        this.registro = [{
            id: id,
            durata: durata,
            timing: timing
        }]
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

    mostraRegistroChiamate(): void {
        
    }

    filtraChiamatePerDataOra(): void {
        
    }
}


// Istanziamento delle classi


console.log('------------------- ISTANZA N.1 ----------------------------');

let smartphone1 = new Smartphone(20, 8, 0, 2, new Date())
console.log('SMARTPHONE 1:', smartphone1);
console.log('CARICA INIZIALE',smartphone1.carica);

smartphone1.ricarica(8)
console.log('CARICA AGGIORNATA:', smartphone1.carica);

console.log(smartphone1.numero404());

console.log('CHIAMATE EFFETTUATE:', smartphone1.getNumeroChiamate());

smartphone1.chiamata(5)

console.log('NUMERO CHIAMATE AGGIORNATO:', smartphone1.numeroChiamate, 'CARICA AGGIORNATA:', smartphone1.carica);

smartphone1.azzeraChiamate()
console.log('CHIAMATE EFFETTUATE AGGIORNATO:', smartphone1.numeroChiamate);

smartphone1.chiamata(10)

console.log('NUMERO CHIAMATE AGGIORNATO:', smartphone1.numeroChiamate, 'CARICA AGGIORNATA:', smartphone1.carica);



console.log('------------------- ISTANZA N.2 ----------------------------');

let smartphone2 = new Smartphone(10, 4, 0, 2, new Date())
console.log('SMARTPHONE 2:', smartphone2);
console.log('CARICA INIZIALE',smartphone2.carica);

smartphone2.ricarica(5)
console.log('CARICA AGGIORNATA:', smartphone2.carica);

console.log(smartphone2.numero404());

console.log('CHIAMATE EFFETTUATE:', smartphone2.getNumeroChiamate());

smartphone2.chiamata(5)

console.log('NUMERO CHIAMATE AGGIORNATO:', smartphone2.numeroChiamate, 'CARICA AGGIORNATA:', smartphone2.carica);

smartphone2.azzeraChiamate()
console.log('CHIAMATE EFFETTUATE AGGIORNATO:', smartphone2.numeroChiamate);

smartphone2.chiamata(10)

console.log('NUMERO CHIAMATE AGGIORNATO:', smartphone2.numeroChiamate, 'CARICA AGGIORNATA:', smartphone2.carica);



console.log('------------------- ISTANZA N.3 ----------------------------');

let smartphone3 = new Smartphone(13, 23, 0, 2, new Date())
console.log('SMARTPHONE 3:', smartphone3);
console.log('CARICA INIZIALE',smartphone3.carica);

smartphone3.ricarica(7)
console.log('CARICA AGGIORNATA:', smartphone3.carica);

console.log(smartphone3.numero404());

console.log('CHIAMATE EFFETTUATE:', smartphone3.getNumeroChiamate());

smartphone3.chiamata(7)

console.log('NUMERO CHIAMATE AGGIORNATO:', smartphone3.numeroChiamate, 'CARICA AGGIORNATA:', smartphone3.carica);

smartphone3.azzeraChiamate()
console.log('CHIAMATE EFFETTUATE AGGIORNATO:', smartphone3.numeroChiamate);

smartphone3.chiamata(3)

console.log('NUMERO CHIAMATE AGGIORNATO:', smartphone3.numeroChiamate, 'CARICA AGGIORNATA:', smartphone3.carica);



