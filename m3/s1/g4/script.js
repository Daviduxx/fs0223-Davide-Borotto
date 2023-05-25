var arrayNegozio = [];
fetch('Abbigliamento.json')
    .then(function (res) {
    console.log(res);
    if (res.ok) {
        return res.json();
    }
    else {
        throw new Error('OPs... Qualcosa è andato storto!');
    }
})
    .then(function (data) {
    console.log(data);
});
var Negozio = /** @class */ (function () {
    function Negozio(id, codprod, collezione, capo, modello, quantita, colore, prezzoivaesclusa, prezzoivainclusa, disponibile, saldo) {
        this.id = id,
            this.codprod = codprod,
            this.collezione = collezione,
            this.capo = capo,
            this.modello = modello,
            this.quantita = quantita,
            this.colore = colore,
            this.prezzoivaesclusa = prezzoivaesclusa,
            this.prezzoivainclusa = prezzoivainclusa,
            this.disponibile = disponibile,
            this.saldo = saldo;
    }
    return Negozio;
}());
