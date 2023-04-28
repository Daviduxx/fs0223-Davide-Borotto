let nav = document.getElementById('nav');
let button = document.getElementById('startedLink')

window.addEventListener('scroll', function(){
    
    let scrolled = window.scrollY;

    if(scrolled > 300){
        nav.classList.add('scrolled')
        button.classList.add('scrolledButton')
    }
    else{
        nav.classList.remove('scrolled')
        button.classList.remove('scrolledButton')
    }
} )

let svg = document.querySelector('g[aria-label]');
let letters = svg.ariaLabel;
let text = document.getElementById('m');
console.log(letters)

let lettersArray = letters.split('');
console.log(lettersArray);

const changeLetters = setInterval(function (){
    let n = Math.floor(Math.random() * lettersArray.length);
    let z = Math.floor(Math.random() * lettersArray.length);
    lettersArray[n] = 'M';
    lettersArray[z] = '&nbsp';
    let newString = lettersArray.join('&nbsp');
    svg.ariaLabel = newString;
    text.innerHTML = newString;
}, 400)