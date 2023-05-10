addedBookArray = []

const hide = function(){
    this.parentElement.parentElement.classList.add('d-none');
}

const removeBook = function(){
    this.parentElement.remove();
}

const add = function(){
    let newBookAdded = document.createElement('li');
    newBookAdded.innerHTML = this.parentElement.firstChild.nextElementSibling.innerHTML;
    console.log(this.parentElement.firstChild)
    list.appendChild(newBookAdded);
    addedBookArray.push(this.parentElement.firstChild.nextElementSibling.innerHTML)
    let addedBook = localStorage.setItem('book', JSON.stringify(addedBookArray))

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
    console.log(cards);
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

    let list = document.getElementById('list');
    let scartaCard = document.querySelectorAll('.scarta');
    console.log(scartaCard);
    scartaCard.forEach((item) => item.addEventListener('click', hide));

    let addButton = document.querySelectorAll('.add');
    console.log(addButton);
    addButton.forEach((item) => item.addEventListener('click', add))
})
.catch((err) => {
    console.log(err);
});

// scartaCard.forEach((item) => item.addEventListener('click', () => this.classList.add('d-none')))