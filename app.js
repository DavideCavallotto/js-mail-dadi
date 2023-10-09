// # Valida la tua mail

// - creo un Array con all'interno diverse email per validare la mail che riceverò dall'utente
const listMail = [
    'alpha@gmail.com', 
    'bravo@gmail.com', 
    'charlie@gmail.com', 
    '', 
    'echo@gmail.com', 
    'foxtrot@gmail.com',   
]

    // - creo una variabile che mi dica quante è lungo l'Array
const lunghArray = listMail.length;
console.log(lunghArray)

// - chiedo la mail all'utente
    // - tramite un prompt chiede all'utente di inserire la sua email
let mailUser = prompt("Inserisci la tua email");
console.log(mailUser);

// - creo un ciclo for per confrontare la mail inserita con quelle del ciclo
for (let i = 0; i < lunghArray; i++ ) {
    const currentMail = listMail[i]    

    if (mailUser === currentMail) {
        console.log(currentMail, 'passed')
        
    } else if (mailUser !== currentMail)  {
        console.log(currentMail, 'unpassed')
        
    } 
   
}


