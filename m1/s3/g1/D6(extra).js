// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
   
    
   let newArray = [];
   function giveMeRandom(n){
    for (let i = 0; i < n; i++){
        newArray[i] = Math.floor(Math.random() * 11)
    }
    return newArray;
}
console.log(giveMeRandom(10)); 



function checkArray(){
    let somma = 0;
    for (let i = 0; i < newArray.length; i++){
        if(newArray[i] > 5){
            console.log(newArray[i]);
            somma += newArray[i];
        }
    }
    console.log(somma)
    return somma;
}
checkArray();



/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
    {
     price: 20,
     nome: 'chitarra',
     id: 1,
     quantity: 2
    },
    {
     price: 100,
     nome: 'bateria',
     id: 2,
     quantity: 1
    },
    {
     price: 50,
     nome: 'basso',
     id: 3,
     quantity: 3
    }
]

function shoppingCartTotal(){
    let totale = 0;
    for(let i = 0; i < shoppingCart.length; i++){
        totale += shoppingCart[i].price * shoppingCart[i].quantity;
    }
    console.log(totale)
}
shoppingCartTotal();

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart(){
    let nuovoOggetto = {
        price: 40,
        nome: 'microfono',
        id: 4,
        quantity: 3
    }
    shoppingCart.push(nuovoOggetto);
    return shoppingCartTotal();
}
addToShoppingCart();

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(){
    let prices = []
    for (let i = 0; i < shoppingCart.length; i++){
       prices.push(shoppingCart[i].price)
    }

    prices.sort(function(a,b){return a - b})
    let mostExpensive = prices[prices.length - 1];
    console.log(mostExpensive)
}
maxShoppingCart();

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart(){
    return shoppingCart[shoppingCart.length - 1];
}
console.log(latestShoppingCart());

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function loopUntil(n){

    let counter = 0;
    let numero;
    while(counter < 3){
        numero = Math.floor(Math.random() * 10);
        if(numero > n){
            console.log(numero);
            counter++;
        }
        else counter = 0;
    }

}
loopUntil(5)

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const secondArray = [3, 56, 21, 56, 20, 'c', 'fd', 4];

function avarage(){
    let somma = 0;
    let counter = 0;
    for (let i = 0; i < secondArray.length; i++){
        if(typeof secondArray[i] != 'number'){
            secondArray[i] == 0;
            counter++;
        }
        else somma += secondArray[i]
    }
    console.log(somma);
    let media = somma / (secondArray.length - counter);
    console.log(media);
}
avarage();

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const thirdArray = ['ciao', 'mi', 'chiamo0000', 'davideeeeeeeeeee'];

function longest(){
    let longestWord = thirdArray[0];
    for (let i = 0; i < thirdArray.length; i++){
        if(thirdArray[i].length > longestWord.length){
            longestWord = thirdArray[i];
        }
    }
    console.log(longestWord)
}
longest();

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function antiSpam(emailContent){
    let verify = true;
    if(emailContent.includes('spam') || emailContent.includes('scam')){
        verify = false;
    }
    console.log(verify);
    return verify;
}
antiSpam('scam')

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function trovaData(inputUtente){
    let now = new Date();
    let nuovaData = new Date(inputUtente);
    let tempo = now - nuovaData; //ms
    tempo = tempo / 1000 // secondi
    tempo = tempo / 60 // minuti
    tempo = tempo / 60 // ore
    tempo = tempo / 24 // giorni
    console.log(tempo)
    console.log(nuovaData)
    console.log(now)
}
trovaData('2023-04-10')

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come paremetri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let primoArray = [];
let secondoArray = [];
let terzoArray = [];

function matrixGenerator(x,y){
    for(let i = 0; i <= x; i++ ){
        primoArray.push(i);
    }
    console.log(primoArray)
    for(let i = 0; i <= y; i++ ){
        secondoArray.push(i);
    }
    console.log(secondoArray)

    for(let i = 0; i < primoArray.length; i++){
        for (let k = 0; k < secondoArray.length; k++){
            terzoArray.push(primoArray[i].toString() + secondoArray[k].toString())
        }
    }
    console.log(terzoArray)
}
matrixGenerator(2,3)