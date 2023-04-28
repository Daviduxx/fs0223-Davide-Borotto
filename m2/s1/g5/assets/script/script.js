let nav = document.getElementById('nav');
let button = document.getElementById('startedLink')

window.addEventListener('scroll', function(){
    
    let scrolled = window.scrollY;
    console.log(scrolled);
    if(scrolled > 300){
        nav.classList.add('scrolled')
        button.classList.add('scrolledButton')
    }
    else if(scrolled < 300){
        nav.classList.remove('scrolled')
        button.classList.remove('scrolledButton')
    }
} )