/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1,l2){
    let area = (l1 * l2) / 2;
    console.log(area)
}
area(3,4)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(a,b){

    let numero1 = Math.floor(a);
    let numero2 = Math.floor(b);
    if(numero1 == numero2){
        return (numero1 + numero2)* 3;
    }
    else return a + b;
}
console.log(crazySum(2.2,2))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(a){
    if(a > 19){
        return Math.abs(a - 19) * 3;
    }
    else return Math.abs(a - 19);
}
console.log(crazyDiff(2));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n){
    let numero = Math.floor(n);
    if(numero > 20 && numero < 100 || numero == 400){
        return true;
    }
}
console.log(boundary(400.4))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(stringa){
    let newString = 'EPICODE' + stringa;
    if(stringa.startsWith('EPICODE')){
        newString = stringa;
    }
    console.log(newString);
    return newString;
}
epify('dflkjandòfljknvadsòlv')


/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(a){
    let numero = Math.abs(a);
    if(numero % 3 == 0 || numero % 7 == 0){
        return true;
    }
    else return false;
}
console.log(check3and7(28));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(stringa){
    let newArray = stringa.split('');
    newArray.reverse();
    let newString = newArray.join('')
    console.log(newString);
}
reverseString('epicode')

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(stringa){
    let newArray = stringa.split('')
    newArray[0] = newArray[0].toUpperCase();
    for( let i = 0; i < newArray.length; i++){
        if(newArray[i] == ' '){
            newArray[i + 1] = newArray[i + 1].toUpperCase();
        }
    }
    newArray = newArray.join('');
    console.log(newArray);
}
upperFirst('ciao mi chiamo davide');

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(stringa){
    let newArray = stringa.split('');
    newArray.pop();
    newArray.shift();
    newArray = newArray.join('');
    console.log(newArray);
}
cutString('il corso epicode')

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n){
    let newArray = [];
    for (let i = 0; i < n; i++){
        newArray[i] = Math.floor(Math.random() * 11)
    }
    return newArray;
}
console.log(giveMeRandom(2));
