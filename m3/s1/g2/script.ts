class Account{
    public balanceInit:number;
    public nome:string;

    constructor(nome:string, saldoIniziale:number){
        this.nome = nome,
        this.balanceInit = saldoIniziale
    }
    public deposit(versamento:number):number{
        return this.balanceInit += versamento;
    }
    public withdraw(prelievo:number):number{
        return this.balanceInit -= prelievo;
    }
}

class Madre extends Account{
    protected tassoInt?:boolean;
    protected percTasso:number;

    constructor(nome:string, saldoIniziale:number, tasso:boolean, perc:number){
        super(nome, saldoIniziale);
        this.tassoInt = tasso,
        this.percTasso = perc
    }

    public calcTasso():number{
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


