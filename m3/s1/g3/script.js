// usando classi non astratte
var User = /** @class */ (function () {
    function User(codredd, reddito, tasseinps, tasseirpef) {
        this.codredd = codredd,
            this.redditoAnnuoLordo = reddito,
            this.tasseInps = tasseinps,
            this.tasseIrpef = tasseirpef;
    }
    User.prototype.getUtileTasse = function () {
        return this.redditoAnnuoLordo - (this.redditoAnnuoLordo * (this.codredd / 100));
    };
    User.prototype.getTasseInsps = function () {
        return (this.redditoAnnuoLordo - (this.redditoAnnuoLordo * (this.codredd / 100))) * (this.tasseInps / 100);
    };
    User.prototype.getTasseIrpef = function () {
        return (this.redditoAnnuoLordo - (this.redditoAnnuoLordo * (this.codredd / 100))) * (this.tasseIrpef / 100);
    };
    User.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - this.getTasseInsps() - this.getTasseIrpef();
    };
    return User;
}());
var artigiano = new User(40, 50000, 10, 20);
console.log(artigiano);
console.log(artigiano.getUtileTasse());
console.log(artigiano.getTasseInsps());
console.log(artigiano.getTasseIrpef());
console.log(artigiano.getRedditoAnnuoNetto());
var commerciante = new User(30, 80000, 15, 25);
console.log(commerciante);
console.log(commerciante.getUtileTasse());
console.log(commerciante.getTasseInsps());
console.log(commerciante.getTasseIrpef());
console.log(commerciante.getRedditoAnnuoNetto());
