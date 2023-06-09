// PRIMO ESERCIZIO

console.log('PRIMO ESERCIZIO');
class User{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }
    verifyAge(other){
        if(this.age > other.age){
            return this.firstName + ' ' + this.lastName + ' ha ' + this.age + ' anni.' +  '\n' +
        other.firstName + ' ' + other.lastName + ' ha ' + other.age + '. \n' +
        this.firstName + ' è più vecchio di ' + other.firstName;
        }
        else{
            return this.firstName + ' ' + this.lastName + ' ha ' + this.age + ' anni.' +  '\n' +
            other.firstName + ' ' + other.lastName + ' ha ' + other.age + '. \n' +
            other.firstName + ' è più vecchio di ' + this.firstName;
        }
        
    }
}

const x = new User('mario', 'rossi', 63, 'roma');
const y = new User('giorgio', 'bianchi', 43, 'torino');
console.log(x);
console.log(y);

console.log(x.verifyAge(y));

// SECONDO ESERCIZIO

console.log('SECONDO ESERCIZIO');

let submit = document.getElementById('submit');
let list = document.getElementById('list')
let animalsArray = [];

class Pet{
    constructor(petName, ownerName, species, breed){
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }
    verifyOwner = function(owner2){
           for(let i = 0; i < owner2.length - 1; i++){
            if(this.ownerName === owner2[i].ownerName){
                return true;
            }    
           }
       }
    }


submit.addEventListener('click', function(){
    let name = document.getElementById('name').value;
    let owner = document.getElementById('owner').value;
    let species = document.getElementById('species').value;
    let breed = document.getElementById('breed').value;

    const p = new Pet(name, owner, species, breed);

    animalsArray.push(p);
    console.log(p);
    console.log(animalsArray);

    if(animalsArray.length > 1){
        console.log(p.verifyOwner(animalsArray));
    }

    list.innerHTML = '';

    animalsArray.forEach(function(p){
         let newPet = document.createElement('li');
         newPet.innerText = p.petName + ' , ' + p.ownerName + ' , ' + p.species + ' , ' + p.breed + ' , ' + p.verifyOwner(animalsArray);
         list.appendChild(newPet);
    })
   
})