/**
 * Pari e Dispari
 * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
 * Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 * Sommiamo i due numeri
 * Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
 * Dichiariamo chi ha vinto.
 * 
 */

alert('REGOLE DEL GIOCO\n\nFai la tua previsione e scegli un numero!\n\nSe la somma del tuo numero è quello scelto dal pc è pari o dispari come hai prognosticato allora hai vinto, altrimenti hai perso!')

/********************************************************************************************************* */
//L'UTENTE SCEGLIE PARI O DISPARI
var userPariDispari = prompt('Scegli: pari o dispari').toLocaleLowerCase().trim();
//Controllo 
while ( userPariDispari !== 'pari' && userPariDispari !== 'dispari' && userPariDispari !== undefined ){
    userPariDispari = prompt('ERRORE! devi digitare "pari" o "dispari". Ritenta, grazie!')
}


//L'UTENTE SCEGLIE UN NUMERO DA 1 A 5
var userNumber = parseInt ( prompt('Inserisci un numero da 1 a 5') );
//Controllo 
while ( userNumber < 1 || userNumber > 5 || isNaN(userNumber) ){
    userNumber = prompt('ERRORE! Inserire un numero compreso tra 1 e 5. Ritenta, grazie!')
}

/********************************************************************************************************* */
//Restituisce un numero random tra 1 e 5 tramite la funzione
var pcNumber = randomNumber (1, 5);

//Somma del numero inserito dall'utente ed il numero random generato dalla funzione
var somma = userNumber + pcNumber;

//Stabilisce se il risultato della somma, tramite la funzione, è pari o dispari  
var confronto = pariDispari (somma);

/********************************************************************************************************* */

//STAMPA ESITO GIOCO
console.log('Hai scelto: "' + userPariDispari + '" ed il numero: ' + userNumber);
console.log('Il computer ha estratto il numero: ' + pcNumber);
alert('La somma dei numeri è ' + somma + '. Il risultato ottenuto è ' + confronto);
console.log('La somma dei numeri è ' + somma + '. Il risultato ottenuto è ' + confronto);

//CONTROLLO VINCITORE
if (confronto === userPariDispari){
    alert('HAI VINTO!')
    console.log("HAI VINTO!!")
}else{
    alert('HAI PERSO!')
    console.log("HAI PERSO!!")
}

/**********************************************************************************************************
 * UTILITIES
 **********************************************************************************************************/
//Funzione per generare un numero random tra un numero min ed un numero max
function randomNumber (nMin, nMax){
    var numero = Math.floor (Math.random() * (nMax - nMin + 1 ) + 1);
    return numero;
}

//Funzione di per stabilire se un numero è pari o dispari 
function pariDispari (numero){
    var confronto;
    if (numero % 2 === 0){
        confronto = "pari";
    }else{
        confronto = "dispari";
    }
    return confronto;
}