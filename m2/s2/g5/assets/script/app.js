// Show/Hide del primo menu a tendina

let more = document.getElementById('more');
let moreMenu = document.getElementById('moreMenu');
let moreArrow = document.getElementById('sfogliaIcon')

more.addEventListener('click', function(){
    moreMenu.classList.toggle('d-none')
    moreMenu.classList.toggle('d-block') 
    moreArrow.classList.toggle('goup');
})

// Show/Hide del SECONDO menu a tendina

let userMenu = document.getElementById('userMenu');
let dropUser = document.getElementById('dropUser');
let arrowIcon = document.getElementById('arrowIcon');

userMenu.addEventListener('click', function(){
    dropUser.classList.toggle('d-none')
    dropUser.classList.toggle('d-block')
    arrowIcon.classList.toggle('goup');
})

// Show/Hide del TERZO menu a tendina

let dropMenu = document.getElementById('myDropMenu')
let dropButton = document.getElementById('myDropButton')
let genresIcon = document.getElementById('genresIcon')

dropButton.addEventListener('click', function(){
    dropMenu.classList.toggle('d-none')
    dropMenu.classList.toggle('d-block');
    genresIcon.classList.toggle('goup')
})

// I menu a tendina scompaiono se si clicca sul body

// let body = document.querySelector('body');

// body.addEventListener('click', function(){
//     moreMenu.classList.remove('d-block') 
// })

