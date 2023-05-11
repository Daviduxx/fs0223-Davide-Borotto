
const API_KEY = 'gcBSMfzqTvwdlKqrSUCdUMy0guyVkp8oMVXkFzH8RbAVLzVoar4OSl7E';
const API1 = `https://api.pexels.com/v1/search?query=nature`
const API2 = `https://api.pexels.com/v1/search?query=sea`
const loadButton = document.getElementById('load');
const secondaryButton = document.getElementById('secondaryLoad');

window.onload = function(){
    let svgCoontainers = document.querySelectorAll('svg');
        
    svgCoontainers.forEach((svg) => {
        svg.remove();
    })

    let card = document.querySelectorAll('.card');
        card.forEach((card) => {
            let imageContainer = document.createElement('div')
            imageContainer.classList.add('img-container');
            let image = document.createElement('img');

            imageContainer.append(image)
            card.prepend(imageContainer)
        })

    let editButtons = document.querySelectorAll('.btn-group button:last-of-type')
    console.log(editButtons);
    editButtons.forEach((buttons) => {
        buttons.innerHTML = 'Hide'
    })

    editButtons.forEach((buttons) => {
        buttons.addEventListener('click', function(){
            this.parentElement.closest('.card').classList.add('d-none')
        })
    })
}

const getPhotos = function(API){
    fetch(API, {
            method: 'GET',
            headers:{
            'Authorization' : API_KEY}
    })
    .then((res) => {
        console.log(res);
        if(res.ok){
            return res.json();
        }
        else{
            throw new Error('OPS... Qualcosa è andato storto')
        }
    })
    .then((photos) => {
        console.log(photos);

        let imageContainerArray = document.querySelectorAll('.img-container img')

        for(let i = 0; i < imageContainerArray.length; i++){
            imageContainerArray[i].setAttribute('src', photos.photos[i].src.original)
        }

        let ids = document.querySelectorAll('small');

        for(let i = 0; i < ids.length; i++){
            ids[i].innerHTML = photos.photos[i].id
        }
    })
    .catch((err) => {
        console.log(err);
    })
}

loadButton.addEventListener('click', function(){
   
    getPhotos(API1)
})

secondaryButton.addEventListener('click', function(){
   
    getPhotos(API2)
})