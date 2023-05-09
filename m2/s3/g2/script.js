// PRIMO ESERCIZIO

let nome = document.getElementById('yourname');
let saveButton = document.getElementById('save');
let myForm = document.getElementById('myForm');
let deleteButton = document.getElementById('delete');
let previous = document.getElementById('previousValue');
let savedItem;

myForm.onsubmit = function(e){
    e.preventDefault();
}

saveButton.onclick = function(){
    savedItem = localStorage.setItem('name', nome.value);
}

deleteButton.onclick = function(){
    localStorage.removeItem('name');
}

const showData = function(){
    
     let savedData = localStorage.getItem('name');
        previous.innerText = savedData;
}
window.onload = function(){ 
        showData(); 
}

// SECONDO ESERCIZIO

let seconds = document.getElementById('seconds');
let savedTime = sessionStorage.getItem('time');
let initial = savedItem;

if(savedTime == null){
initial = 0;
}else{
    initial = savedTime;
}

const timer = setInterval(function(){
    initial++;
    savedTime = sessionStorage.setItem('time', initial);
    let displayTime = sessionStorage.getItem('time');
    seconds.innerHTML = displayTime;
}, 1000)


