// Show/Hide del primo menu a tendina

let more = document.getElementById('more');
let moreMenu = document.getElementById('moreMenu');

more.addEventListener('click', function(){
    moreMenu.classList.toggle('d-none')
    moreMenu.classList.toggle('d-block') 
})

// Show/Hide del SECONDO menu a tendina

let userMenu = document.getElementById('userMenu');
let dropUser = document.getElementById('dropUser');

userMenu.addEventListener('click', function(){
    dropUser.classList.toggle('d-none')
    dropUser.classList.toggle('d-block')
})

// Show/Hide del TERZO menu a tendina

let dropMenu = document.getElementById('myDropMenu')
let dropButton = document.getElementById('myDropButton')

dropButton.addEventListener('click', function(){
    dropMenu.classList.toggle('d-none')
    dropMenu.classList.toggle('d-block')
})