addedBookArray = []
let i = 0;

const hide = function(){
    this.parentElement.parentElement.remove();
}

const removeBook = function(){
    this.closest('col-12')
    // const indice = addedBookArray.findIndex((x) => x === this.parentElement.firstChild.nextElementSibling.innerHTML)
    // addedBookArray.splice(indice, 0);
    // console.log(addedBookArray);
}

const add = function(){

    let newTitle = this.parentElement.firstChild.nextElementSibling.innerHTML;
    addedBookArray.push(newTitle);
    let addedBook = localStorage.setItem('book', JSON.stringify(addedBookArray));
    
    let list = document.getElementById('list');
    let newBookAdded = document.createElement('li');
    newBookAdded.innerHTML = JSON.parse(localStorage.getItem('book'))[i];
    i++;    
    list.appendChild(newBookAdded);
    
    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'REMOVE';
    newBookAdded.appendChild(removeButton);
    let removeButtonList = document.querySelectorAll('button');
    removeButtonList.forEach((button) => button.addEventListener('click', removeBook))
}

fetch('https://striveschool-api.herokuapp.com/books')
.then((res) => {
    if(res.ok){
        return res.json();
    }
    else{
        throw new Error('Non ho trovato nulla')
    }
})
.then((cards) => {
    
    let mainRow = document.getElementById('mainRow')

    cards.forEach((card) => {
        let col = document.createElement('div');
        col.classList.add('col-12', 'col-md-4', 'col-lg-3');
        col.innerHTML = 
        `<div class="card mb-3">
            <img src="${card.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">€ ${card.price}</p>
                    <a href="#" class="btn btn-success add">ADD TO CART</a>
                    <a href="#" class="btn btn-primary scarta">REMOVE</a>
                </div>
        </div>`
        mainRow.appendChild(col);
    })

    let scartaCard = document.querySelectorAll('.scarta');
    scartaCard.forEach((item) => item.addEventListener('click', hide));

    let addButton = document.querySelectorAll('.add');
    addButton.forEach((item) => item.addEventListener('click', add))
})

.catch((err) => {
    console.log(err);
});