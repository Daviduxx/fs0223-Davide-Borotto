let viaggiSaldi = document.querySelectorAll('#saldiCollapse .card');
let viaggiSummer = document.querySelectorAll('#summerCollapse .card')
let lastCards = document.querySelectorAll('#lastCards div');

// Creazione alert
let numeroViaggi = viaggiSaldi.length + viaggiSummer.length + lastCards.length;
// alert('Al momento abbiamo ' + numeroViaggi + ' viaggi disponibili') Commentato perché da fastidio

// Funzione che nasconde le cards
const hideCards = function(){
    for(let viaggi of viaggiSaldi){
        viaggi.classList.add('d-none');
    }
    for(let viaggi of viaggiSummer){
        viaggi.classList.add('d-none');
    }
    for(let viaggi of lastCards){
        viaggi.classList.add('d-none')
    }
}
// hideCards();

// Creazione 'hot' badge
let images = document.querySelectorAll('#summerCollapse .card');
for(let image of images){
    image.classList.add('position-relative')
    let span = document.createElement('span');
    span.innerText = 'HOT';
    span.setAttribute('class', 'badge rounded-pill text-bg-danger start-100 translate-middle position-absolute z-9');
    image.appendChild(span)
}