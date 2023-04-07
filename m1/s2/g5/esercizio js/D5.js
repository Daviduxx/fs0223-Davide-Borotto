/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/

const pets = ['dog', 'cat', 'hamster', 'redfish'];

console.log('ESERCIZIO 1')
for(let i = 0; i < pets.length; i++){
  console.log(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

console.log('ESERCIZIO 2')
console.log(pets.sort())

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

// pets.sort()  commetno perché l'array era già ordinato alfabeticamente (riga 23)
console.log('ESERCIZIO 3')
console.log(pets.reverse())

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

console.log('ESERCIZIO 4')
let removed = pets.shift();
pets.push(removed);
console.log(pets)

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

// usando un foreach
cars.forEach(myFunction);

function myFunction(value, index){
  cars[index].licensePlate = value;
}

myFunction('1234', 0);
myFunction('4567', 1);
myFunction('7890', 2);

console.log('ESERCIZIO 5 (FOREACH)')
console.log(cars);

// secondo metodo: usando un for in

let randomNumber = Math.floor(Math.random() * 9999)

for (let x in cars){
  cars[x].licensePlate = randomNumber;
}

console.log('ESERCIZIO 5 (FOR IN)')
console.log(cars)


/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

// METODO 1: USANDO UN PROTOTYPE

function NewCar(brand, model, color, trims, licensePlate){
  this.brand = brand;
  this.model = model;
  this.color = color;
  this.trims = trims,
  this.licensePlate = licensePlate;
}

const lastCar = new NewCar('Fiat', 'punto', 'red', ['style', 'sport', 'city'], randomNumber);
cars.push(lastCar);
console.log('ESERCIZIO 6 (PROTOTYPE)');
console.log(cars);

//METODO 2: scrivendo il nuovo oggetto

// let newElement = {
//   brand: 'Fiat',
//   model: 'punto',
//   color: 'red',
//   trims: ['style', 'sport', 'city'],
//   licensePlate: randomNumber
// }

// cars.push(newElement);

// console.log('ESERCIZIO 6 (scrivendo oggetto)')
// console.log(cars);

console.log('ESERCIZIO 6 (eliminato ultimo trim)')
for(let x in cars){
  cars[x].trims.pop();
}
console.log(cars)

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for(let i = 0; i < cars.length; i++){
  let newTrims = cars[i].trims[0];
  justTrims.push(newTrims);
}
console.log('ESERCIZIO 7')
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

console.log('ESERCIZIO 8')
for(let i = 0; i < cars.length; i++){
  if(cars[i].color.startsWith('b')){
    console.log('Fizz')
  }
  else {
    console.log('Buzz')
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

console.log('ESERCIZIO 9')
let j = 0;
while(numericArray[j] != 32){
  console.log(numericArray[j]);
  j++
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["a", "n", "u", "z", "d", 'b', 'c', 'z', 'v', 'u']

for(let x in charactersArray){
  
 // ho messo tutti i casi per testare che funzionasse con tutte le lettere
  switch(charactersArray[x]){

    case 'a':
      charactersArray[x] = 1;
    break;
    case 'b':
      charactersArray[x] = 2;
    break;
    case 'c':
      charactersArray[x] = 3;
    break;
    case 'd':
      charactersArray[x] = 4;
    break;
    case 'e':
      charactersArray[x] = 5;
    break;
    case 'f':
      charactersArray[x] = 6;
    break;
    case 'g':
      charactersArray[x] = 7;
    break;
    case 'h':
      charactersArray[x] = 8;
    break;
    case 'i':
      charactersArray[x] = 9;
    break;
    case 'l':
      charactersArray[x] = 10;
    break;
    case 'm':
      charactersArray[x] = 11;
    break;
    case 'n':
      charactersArray[x] = 12;
    break;
    case 'o':
      charactersArray[x] = 13;
    break;
    case 'p':
      charactersArray[x] = 14;
    break;
    case 'q':
      charactersArray[x] = 15;
    break;
    case 'r':
      charactersArray[x] = 16;
    break;
    case 's':
      charactersArray[x] = 17;
    break;
    case 't':
      charactersArray[x] = 18;
    break;
    case 'u':
      charactersArray[x] = 19;
    break;
    case 'v':
      charactersArray[x] = 20;
    break;
    case 'z':
      charactersArray[x] = 21;
    break;
  }
}
console.log('ESERCIZIO 10')
console.log(charactersArray)