// usando classi non astratte
class User{

    codredd:number;
    redditoAnnuoLordo:number;
    tasseInps:number;
    tasseIrpef:number;

    constructor(codredd, reddito, tasseinps, tasseirpef){
        this.codredd = codredd,
        this.redditoAnnuoLordo = reddito,
        this.tasseInps = tasseinps,
        this.tasseIrpef = tasseirpef
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

let artigiano = new User(40, 50000, 10, 20)
console.log(artigiano);

console.log(artigiano.getUtileTasse());
console.log(artigiano.getTasseInsps());
console.log(artigiano.getTasseIrpef());
console.log(artigiano.getRedditoAnnuoNetto());

let commerciante = new User(30, 80000, 15, 25)
console.log(commerciante);

console.log(commerciante.getUtileTasse());
console.log(commerciante.getTasseInsps());
console.log(commerciante.getTasseIrpef());
console.log(commerciante.getRedditoAnnuoNetto());
