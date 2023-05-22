console.log('Hello World');

// Definizione giocatori

let giocatoreA:number = 45;
let giocatoreB:number = 95;

let randomNumber:number = Math.floor(Math.random() * (100 - 1) + 1);
console.log(randomNumber);

const check = ():string => {
    let resultA:number = Math.abs(randomNumber - giocatoreA);
    let resultB:number = Math.abs(randomNumber - giocatoreB);
    if(resultA < resultB){
        return 'Ha vinto il giorcatore A';
    }
    else return 'Ha vinto il giocatore B';
}

if(giocatoreA === randomNumber){
    console.log('giocatoreA ha azzeccato il numero');
}
else if(giocatoreB === randomNumber){
    console.log('giocatoreB ha azzeccato il numero');
}
else console.log(check());