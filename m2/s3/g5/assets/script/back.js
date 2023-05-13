// API

const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjlkNzg4Zjc0MDAwMTQyODc0NDYiLCJpYXQiOjE2ODM4ODA0MDcsImV4cCI6MTY4NTA5MDAwN30.18DtGCtDgAmkXHdrLYT_OUIE3oq43KdgAMScyNxYs_s";
const API_ENDPOINT = 'https://striveschool-api.herokuapp.com/api/product/';
const HEADERS = {
    headers: {
        'Authorization': API_KEY
    }
}
const form = document.getElementById('back-form');

// Verifico se c'è un id nell'url
let addressBarContent = new URLSearchParams(window.location.search);
let productId = addressBarContent.get('productID')
console.log(productId);

// Se c'è un productID faccio una GET request, per avere i dati di quello specifico prodotto
if(productId){

    // Modals e bottoni
    let modificaText = document.getElementById('modificaText');
    let creaText = document.getElementById('creaText');
    let backButton = document.getElementById('backButton');
    let modalChangeText = document.getElementById('modalChangeText');
    let showDeleteModal = document.getElementById('showDeleteModal')
    let deleteButton = document.getElementById('deleteButton');
    modificaText.classList.remove('d-none');
    creaText.classList.add('d-none');
    backButton.innerHTML = 'MODIFICA IL PRODOTTO';
    modalChangeText.innerHTML = 'Il prodotto è stato modificato con successo.'
    showDeleteModal.classList.remove('d-none');

    fetch(API_ENDPOINT + productId, HEADERS)
    .then((res) => {
        console.log(res);
        if(res.ok){
            return res.json();
        }
        else{
            throw new Error('OPS... Qualcosa è andato storto')
        }
    })
    .then((product) => {
        console.log(product);
        document.getElementById('nome').value = product.name;
        document.getElementById('description').value = product.description;
        document.getElementById('brand').value = product.brand;
        document.getElementById('immagine').value = product.imageUrl;
        document.getElementById('price').value = product.price;

    })
    .catch((err) => {
        console.log(err);
    })

    // DELETE Request
    deleteButton.addEventListener('click', function(){
        fetch(API_ENDPOINT + productId, {
            method: 'DELETE',
            headers: {
                Authorization: API_KEY
            }
        })
        .then((res) => {
            console.log(res);
            if(res.ok){
                console.log('Prodotto eliminato con successo');
                document.getElementById('nome').value =''
                document.getElementById('description').value = ''
                document.getElementById('brand').value = ''
                document.getElementById('immagine').value = ''
                document.getElementById('price').value = ''

                let alertDelete = document.getElementById('alert');
                alertDelete.classList.remove('d-none')
            }
            else{
                throw new Error('OPS... QUalcosa è andato storto')
            }
        })
        .catch((err) => {
            console.log(err);
        })
        
    })
}

// MOdalità Creazione, o modifica a seconda se c'è un productID o meno
form.addEventListener('submit', function(e){
    e.preventDefault();

    // Definizione valori input del nuovo prodotto

    let productName = document.getElementById('nome');
    let productDescription = document.getElementById('description');
    let productBrand = document.getElementById('brand');
    let productImage = document.getElementById('immagine');
    let productPrice = document.getElementById('price');

    // Definizione del payload da inviare

    let newItem = {
        name: productName.value,
        description: productDescription.value,
        brand: productBrand.value,
        imageUrl: productImage.value,
        price: productPrice.value 
    }

    console.log(newItem);

    // Eseguo la richiesta POST o PUT
    
    fetch(productId ? API_ENDPOINT + productId : API_ENDPOINT, {
        method: productId ? 'PUT' : 'POST',
        body: JSON.stringify(newItem),
        headers: {
            Authorization: API_KEY,
            'Content-type': 'application/json'
        },
    })
    .then((res) => {
        console.log(res);
        if(res.ok){
            console.log(productId ? 'prodotto modificato correttamente' : 'prodotto creato correttamente');
        }
        else{
            throw new Error('OPS... Qualcosa è andato storto!')
        }
    })
    .catch((err) => {
        console.log(err);
    })
})

let resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function(){
    document.getElementById('nome').value =''
    document.getElementById('description').value = ''
    document.getElementById('brand').value = ''
    document.getElementById('immagine').value = ''
    document.getElementById('price').value = ''
})