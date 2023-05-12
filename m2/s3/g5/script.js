// API

const API_KEY = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVkZjlkNzg4Zjc0MDAwMTQyODc0NDYiLCJpYXQiOjE2ODM4ODA0MDcsImV4cCI6MTY4NTA5MDAwN30.18DtGCtDgAmkXHdrLYT_OUIE3oq43KdgAMScyNxYs_s";
const API_ENDPOINT = 'https://striveschool-api.herokuapp.com/api/product/';
const HEADERS = {
    headers: {
        'Authorization': API_KEY
    }
}

// Creo la funzione che esegue la GET Request
const getProducts = function(){

    fetch(API_ENDPOINT, HEADERS)
    .then((res) => {
        console.log(res);
        if(res.ok){
            return res.json();
        }
        else{
            throw new Error('OPs... Qualcosa è andato storto!')
        }
    })
    .then((data) => {
        console.log(data);

        data.forEach((product) => {
            let productTemplate = `
            <div class="col-12 col-md-4 col-lg-3">
            <div class="card">
              <img src="${product.imageUrl}" class="card-img-top" alt="${product.description}">
              <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.brand}</p>
                <p class="card-text">${product.description}</p>
                <p class="card-text">${product.price}</p>
                <a href="backoffice.html?productID=${product._id}" class="btn btn-primary">MODIFICA</a>
              </div>
            </div>
          </div>
            `
        
        let mainRow = document.getElementById('product-row');

        mainRow.innerHTML += productTemplate;
        })
    })
    .catch((err) => {
        console.log(err);
    })
}

// Chiamo la funzione getProducts al caricamento della pagina
window.onload = function(){
   getProducts()
}