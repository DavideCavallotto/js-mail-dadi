// # Valida la tua mail

// - creo un Array con all'interno diverse email per validare la mail che riceverò dall'utente
const listMail = [
    'alpha@gmail.com', 
    'bravo@gmail.com', 
    'charlie@gmail.com', 
    'delta@gmail.com', 
    'echo@gmail.com', 
    'foxtrot@gmail.com',   
]

console.log(listMail)

    // - creo una variabile che mi dica quante è lungo l'Array
const lunghArray = listMail.length;
console.log(lunghArray)

// - chiedo la mail all'utente
    // - tramite un prompt chiede all'utente di inserire la sua email
let mailUser = prompt("Inserisci la tua email");
console.log(mailUser, 'mail inserita dall\'utente');

let currentMail;
// - dichiaro una variabile trovato uguale a false
let trovato = false;
// - creo un ciclo for per confrontare la mail inserita con quelle del ciclo
for (let i = 0; i < lunghArray; i++ ) {
    currentMail = listMail[i];

    if (mailUser === currentMail) {
        trovato = true;
    }
   
}

// currentMail = 'foxtrot@gmail.com';
// - se la variabile 'trovato' è uguale a 'true'
//     - stampo passed
if (trovato === true) {
    console.log('passed');
} else {
    // - altrimenti
    //     - stampo unpassed 
    console.log('unpassed');
}


// # Dadi

// - assegno un numero random da 1 a 6 al giocatore
playerNum = Math.floor(Math.random() * (6 - 1) + 1);
console.log(playerNum, 'numero del player');

// - assegno un numero random da 1 a 6 al computer
computerNum = Math.floor(Math.random() * (6 - 1) + 1);
console.log(computerNum, 'numero del computer');
// - confronto i numeri usciti
//     - se il numero del giocare è più alto
//         - stampo: winner
if (playerNum > computerNum) {
    console.log('winner')

}
//     - altrimenti
//         - stampo: loser
else  {
    console.log('loser')
}

