"use strict";
// interfaccia iniziale
// creazione della classe
class Smartphone {
    constructor(carica, numeroChiamate) {
        this.costoMinuto = 0.20;
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto;
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
    chiamata(min) {
        this.numeroChiamate++;
        this.carica -= (min * this.costoMinuto);
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
//# sourceMappingURL=script.js.map