// API

const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjlkNzg4Zjc0MDAwMTQyODc0NDYiLCJpYXQiOjE2ODM4ODA0MDcsImV4cCI6MTY4NTA5MDAwN30.18DtGCtDgAmkXHdrLYT_OUIE3oq43KdgAMScyNxYs_s";
const API_ENDPOINT = 'https://striveschool-api.herokuapp.com/api/product/';
const HEADERS = {
    headers: {
        'Authorization': API_KEY
    }
}

// Verifico se c'è un id nell'url
let addressBarContent = new URLSearchParams(window.location.search);
let productId = addressBarContent.get('productID')
console.log(productId);

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

        let moreRow = document.getElementById('moreRow');

        let showProduct = `
        <div class="col card my-5 p-5">
        <div class="row g-0">
        <div class="col-md-4">
          <img src="${product.imageUrl}" class="img-fluid rounded-start" alt="${product.name}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title fs-1">${product.name}</h5>
            <p class="card-text fs-3">${product.description}</p>
            <p class="card-text card-brand fs-3">${product.brand}</p>
            <p class="card-text fs-4">€ ${product.price}</p>
            <a href="index.html" class="btn card-button">TORNA INDIETRO</a>
          </div>
        </div>
      </div>
    </div>`
    moreRow.innerHTML = showProduct;
    })
    .catch((err) => {
        console.log(err);
    })