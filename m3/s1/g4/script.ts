const arrayNegozio:[] = [];

fetch('Abbigliamento.json')
.then((res) => {
    console.log(res)
    if(res.ok){
    return res.json()
    }
    else{
        throw new Error('OPs... Qualcosa è andato storto!')
    }
    })
.then(data => {
    console.log(data);
    
})