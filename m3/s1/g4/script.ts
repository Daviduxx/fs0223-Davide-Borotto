let arrayNegozio:any = []

fetch('Abbigliamento.json')
.then((res) => {
    console.log(res)
    if(res.ok){
    return res.json()
    }
    else{
        throw new Error('OPs... Qualcosa è andato storto!')
    }
    })
.then(data => {
    console.log(data);
    data.forEach((capo) => {
        let newItem = new Negozio(
            capo.id, 
            capo.codprod, 
            capo.collezione, 
            capo.capo, 
            capo.modello, 
            capo.quantita, 
            capo.colore, 
            capo.prezzoivaesclusa, 
            capo.prezzoivainclusa,
            capo.disponibile,
            capo.saldo
            )
        console.log(newItem);
        arrayNegozio.push(newItem)
    })
})
console.log(arrayNegozio);

class Negozio{

    id:number;
    codprod:number;
    collezione:string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoivaesclusa:number;
    prezzoivainclusa:number;
    disponibile:string;
    saldo:number;

    constructor(
        id:number,
        codprod:number,
        collezione:string,
        capo:string,
        modello:number,
        quantita:number,
        colore:string,
        prezzoivaesclusa:number,
        prezzoivainclusa:number,
        disponibile:string,
        saldo:number
                    ){
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
        this.saldo = saldo  
    }
}