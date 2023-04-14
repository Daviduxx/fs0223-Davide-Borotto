let myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(e){       // submit è un tipo di eventi riservato ai form.
     e.preventDefault();                             // quando un form viene inviato si attiva il parametrto action, che se non è specificato ritorna la 
                                                     // stessa pagina, RICARICANDOLA. Bisogna prevenire questo comportamento passando un parametro alla callback dell'event listener
 
})

