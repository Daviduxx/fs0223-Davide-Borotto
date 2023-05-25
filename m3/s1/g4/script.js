fetch('Abbigliamento.json')
    .then(function (res) {
    console.log(res);
    if (res.ok) {
        return res.json();
    }
    else {
        throw new Error('OPs... Qualcosa è andato storto!');
    }
})
    .then(function (data) {
    console.log(data);
});
