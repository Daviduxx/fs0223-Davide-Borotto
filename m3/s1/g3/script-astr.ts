// utilizzando classi astratte

abstract class Autonomo{

    protected readonly codredd:number;
    protected readonly redditoAnnuoLordo:number;
    protected readonly tasseInps:number;
    protected readonly tasseIrpef:number;

    constructor(codredd:number, reddito:number, tasseinps:number, tasseirpef:number){
        this.codredd = codredd,
        this.redditoAnnuoLordo = reddito,
        this.tasseInps = tasseinps,
        this.tasseIrpef = tasseirpef
    }

    abstract getUtileTasse():number

    abstract getTasseInsps():number

    abstract getTasseIrpef():number

    abstract getRedditoAnnuoNetto():number
}

 class Venditore extends Autonomo{
    constructor(codredd:number, reddito:number, tasseinps:number, tasseirpef:number){
        super(codredd, reddito, tasseinps, tasseirpef)
    }

    getUtileTasse():number{
        return this.redditoAnnuoLordo - (this.redditoAnnuoLordo * (this.codredd / 100));
    }

    getTasseInsps():number{
        return (this.redditoAnnuoLordo - (this.redditoAnnuoLordo * (this.codredd / 100))) * (this.tasseInps / 100);
    }

    getTasseIrpef():number{
        return (this.redditoAnnuoLordo - (this.redditoAnnuoLordo * (this.codredd / 100))) * (this.tasseIrpef / 100);
    }

    getRedditoAnnuoNetto():number{
        return this.redditoAnnuoLordo - this.getTasseInsps() - this.getTasseIrpef();
    }
}

class Consulente extends Autonomo{
    constructor(codredd:number, reddito:number, tasseinps:number, tasseirpef:number){
        super(codredd, reddito, tasseinps, tasseirpef)
    }

    getUtileTasse():number{
        return this.redditoAnnuoLordo - (this.redditoAnnuoLordo * (this.codredd / 100));
    }

    getTasseInsps():number{
        return (this.redditoAnnuoLordo - (this.redditoAnnuoLordo * (this.codredd / 100))) * (this.tasseInps / 100);
    }

    getTasseIrpef():number{
        return (this.redditoAnnuoLordo - (this.redditoAnnuoLordo * (this.codredd / 100))) * (this.tasseIrpef / 100);
    }

    getRedditoAnnuoNetto():number{
        return this.redditoAnnuoLordo - this.getTasseInsps() - this.getTasseIrpef();
    }
}

let venditore:Venditore = new Venditore(15, 35000, 8, 10)
console.log(venditore);
console.log(venditore.getUtileTasse());

let consulente:Consulente = new Consulente(50, 75000, 12, 14)
console.log(consulente);
console.log(consulente.getUtileTasse());



