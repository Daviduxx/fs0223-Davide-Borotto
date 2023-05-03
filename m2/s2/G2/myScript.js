let viaggiSaldi = document.querySelectorAll('#saldiCollapse .card');
let viaggiSummer = document.querySelectorAll('#summerCollapse .card')
let lastCards = document.querySelectorAll('#lastCards div');
let numeroViaggi = viaggiSaldi.length + viaggiSummer.length + lastCards.length;
alert('Al momento abbiamo ' + numeroViaggi + ' viaggi disponibili')

const hideCards = function(){
    
}

// Creazione 'hot' badge

let images = document.querySelectorAll('#summerCollapse .card');

for(let image of images){
    image.classList.add('position-relative')
    let span = document.createElement('span');
    span.innerText = 'HOT';
    span.setAttribute('class', 'badge rounded-pill text-bg-danger start-100 translate-middle position-absolute z-9');
    image.appendChild(span)
}