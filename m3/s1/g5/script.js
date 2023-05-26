"use strict";
// creazione della classe
class Smartphone {
    constructor(carica, numeroChiamate, id = 0, durata = 0, timing = new Date()) {
        this.costoMinuto = 0.20;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto;
        this.registro = [{
                id: id,
                durata: durata,
                timing: timing
            }];
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return `Il tuo credito residuo è di € ${this.carica}`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min, year) {
        this.numeroChiamate++;
        this.carica -= (min * this.costoMinuto);
        //EXTRA
        let nuovaChiamata = { id: this.registro.length, durata: min, timing: year };
        this.registro.push(nuovaChiamata);
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
    mostraRegistroChiamate() {
        return this.registro;
    }
    filtraChiamatePerDataOra(dataIndicata) {
        return this.registro.filter((data) => {
            data.timing > dataIndicata;
        });
    }
}
// Istanziamento delle classi
console.log('------------------- ISTANZA N.1 ----------------------------');
let smartphone1 = new Smartphone(20, 5);
console.log('SMARTPHONE 1:', smartphone1);
console.log('CARICA INIZIALE', smartphone1.carica);
smartphone1.ricarica(8);
console.log('CARICA AGGIORNATA:', smartphone1.carica);
console.log(smartphone1.numero404());
console.log('CHIAMATE EFFETTUATE:', smartphone1.getNumeroChiamate());
smartphone1.chiamata(5, new Date(2023, 4, 5, 11, 30, 0));
console.log('NUMERO CHIAMATE AGGIORNATO:', smartphone1.numeroChiamate, 'CARICA AGGIORNATA:', smartphone1.carica);
smartphone1.azzeraChiamate();
console.log('CHIAMATE EFFETTUATE AGGIORNATO:', smartphone1.numeroChiamate);
smartphone1.chiamata(10, new Date(2023, 4, 3, 23, 50, 4));
console.log('NUMERO CHIAMATE AGGIORNATO:', smartphone1.numeroChiamate, 'CARICA AGGIORNATA:', smartphone1.carica);
console.log(smartphone1.mostraRegistroChiamate());
console.log(smartphone1.filtraChiamatePerDataOra(new Date(2021, 4, 3, 23, 50, 4)));
console.log('------------------- ISTANZA N.2 ----------------------------');
let smartphone2 = new Smartphone(15, 3);
console.log('SMARTPHONE 2:', smartphone2);
console.log('CARICA INIZIALE', smartphone2.carica);
smartphone2.ricarica(7);
console.log('CARICA AGGIORNATA:', smartphone2.carica);
console.log(smartphone2.numero404());
console.log('CHIAMATE EFFETTUATE:', smartphone2.getNumeroChiamate());
smartphone2.chiamata(1, new Date(2023, 2, 5, 21, 36, 0));
console.log('NUMERO CHIAMATE AGGIORNATO:', smartphone2.numeroChiamate, 'CARICA AGGIORNATA:', smartphone2.carica);
smartphone2.azzeraChiamate();
console.log('CHIAMATE EFFETTUATE AGGIORNATO:', smartphone2.numeroChiamate);
smartphone2.chiamata(10, new Date(2023, 4, 1, 6, 59, 4));
console.log('NUMERO CHIAMATE AGGIORNATO:', smartphone2.numeroChiamate, 'CARICA AGGIORNATA:', smartphone2.carica);
console.log(smartphone2.mostraRegistroChiamate());
console.log(smartphone2.filtraChiamatePerDataOra(new Date(2022, 7, 3, 4, 56, 4)));
console.log('------------------- ISTANZA N.3 ----------------------------');
let smartphone3 = new Smartphone(12, 12);
console.log('SMARTPHONE 2:', smartphone3);
console.log('CARICA INIZIALE', smartphone3.carica);
smartphone3.ricarica(8);
console.log('CARICA AGGIORNATA:', smartphone3.carica);
console.log(smartphone3.numero404());
console.log('CHIAMATE EFFETTUATE:', smartphone3.getNumeroChiamate());
smartphone3.chiamata(6, new Date(2023, 3, 7, 13, 36, 0));
console.log('NUMERO CHIAMATE AGGIORNATO:', smartphone3.numeroChiamate, 'CARICA AGGIORNATA:', smartphone3.carica);
smartphone3.azzeraChiamate();
console.log('CHIAMATE EFFETTUATE AGGIORNATO:', smartphone3.numeroChiamate);
smartphone3.chiamata(8, new Date(2023, 7, 1, 4, 53, 4));
console.log('NUMERO CHIAMATE AGGIORNATO:', smartphone3.numeroChiamate, 'CARICA AGGIORNATA:', smartphone3.carica);
console.log(smartphone3.mostraRegistroChiamate());
console.log(smartphone3.filtraChiamatePerDataOra(new Date(2022, 7, 3, 4, 56, 4)));
//# sourceMappingURL=script.js.map