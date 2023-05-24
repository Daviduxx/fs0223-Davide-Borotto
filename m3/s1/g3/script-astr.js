// utilizzando classi astratte
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Autonomo = /** @class */ (function () {
    function Autonomo(codredd, reddito, tasseinps, tasseirpef) {
        this.codredd = codredd,
            this.redditoAnnuoLordo = reddito,
            this.tasseInps = tasseinps,
            this.tasseIrpef = tasseirpef;
    }
    return Autonomo;
}());
var Venditore = /** @class */ (function (_super) {
    __extends(Venditore, _super);
    function Venditore(codredd, reddito, tasseinps, tasseirpef) {
        return _super.call(this, codredd, reddito, tasseinps, tasseirpef) || this;
    }
    Venditore.prototype.getUtileTasse = function () {
        return this.redditoAnnuoLordo - (this.redditoAnnuoLordo * (this.codredd / 100));
    };
    Venditore.prototype.getTasseInsps = function () {
        return (this.redditoAnnuoLordo - (this.redditoAnnuoLordo * (this.codredd / 100))) * (this.tasseInps / 100);
    };
    Venditore.prototype.getTasseIrpef = function () {
        return (this.redditoAnnuoLordo - (this.redditoAnnuoLordo * (this.codredd / 100))) * (this.tasseIrpef / 100);
    };
    Venditore.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - this.getTasseInsps() - this.getTasseIrpef();
    };
    return Venditore;
}(Autonomo));
var Consulente = /** @class */ (function (_super) {
    __extends(Consulente, _super);
    function Consulente(codredd, reddito, tasseinps, tasseirpef) {
        return _super.call(this, codredd, reddito, tasseinps, tasseirpef) || this;
    }
    Consulente.prototype.getUtileTasse = function () {
        return this.redditoAnnuoLordo - (this.redditoAnnuoLordo * (this.codredd / 100));
    };
    Consulente.prototype.getTasseInsps = function () {
        return (this.redditoAnnuoLordo - (this.redditoAnnuoLordo * (this.codredd / 100))) * (this.tasseInps / 100);
    };
    Consulente.prototype.getTasseIrpef = function () {
        return (this.redditoAnnuoLordo - (this.redditoAnnuoLordo * (this.codredd / 100))) * (this.tasseIrpef / 100);
    };
    Consulente.prototype.getRedditoAnnuoNetto = function () {
        return this.redditoAnnuoLordo - this.getTasseInsps() - this.getTasseIrpef();
    };
    return Consulente;
}(Autonomo));
var venditore = new Venditore(15, 35000, 8, 10);
console.log(venditore);
console.log(venditore.getUtileTasse());
var consulente = new Consulente(50, 75000, 12, 14);
console.log(consulente);
console.log(consulente.getUtileTasse());
