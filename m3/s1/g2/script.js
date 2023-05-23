"use strict";
class Account {
    constructor(nome, saldoIniziale) {
        this.nome = nome,
            this.balanceInit = saldoIniziale;
    }
    deposit(versamento) {
        return this.balanceInit += versamento;
    }
    withdraw(prelievo) {
        return this.balanceInit -= prelievo;
    }
}
class Madre extends Account {
    constructor(nome, saldoIniziale, tasso, perc) {
        super(nome, saldoIniziale);
        this.tassoInt = tasso,
            this.percTasso = perc;
    }
    calcTasso() {
        return this.balanceInit *= (this.percTasso / 100);
    }
}
let figlio = new Account('figlio', 0);
let madreEstesa = new Madre('madre', 200, true, 10);
console.log(madreEstesa);
console.log(madreEstesa.deposit(100));
console.log(madreEstesa.calcTasso());
console.log(figlio);
console.log(figlio.deposit(5));
console.log(figlio.deposit(2));
console.log(figlio.withdraw(5));
//# sourceMappingURL=script.js.map