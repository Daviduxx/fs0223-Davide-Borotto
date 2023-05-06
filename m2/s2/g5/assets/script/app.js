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