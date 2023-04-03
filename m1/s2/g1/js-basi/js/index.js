function myFunction() {
    let input = document.getElementById('input').value;
    let lunghezzaParola = input.length;
    const myArray = input.split('');
    console.log(myArray);
    let vowels = 0;
    for (let i = 0; i < myArray.length; i++) {
        if(myArray[i] == 'a' || myArray[i] == 'e' || myArray[i] == 'i' || myArray[i] == 'o' || myArray[i] == 'u')  {
            vowels++;
        }
    }
    let spazi = 0;
    for (let i = 0; i < myArray.length; i++) {
        if(myArray[i] == ' '){
            spazi++
        }
    }
    console.log(spazi);
    console.log(vowels);
    lunghezzaParola = lunghezzaParola - spazi;
    console.log(lunghezzaParola);
    document.getElementById('output').innerHTML = 'La frase ' + '"'  + input + '"' + ' è composta da ' + '<strong>' + vowels + ' vocali ' + '</strong>' + 'ed è lunga ' + '<strong>' + lunghezzaParola + ' caratteri' + '</strong>' + ' e ' + '<strong>' + spazi + ' spazi' + '</strong>';
}