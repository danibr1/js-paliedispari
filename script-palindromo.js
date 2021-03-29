/**
 * Palidroma
 * Chiedere all’utente di inserire una parola
 * Creare una funzione per capire se la parola inserita è palindroma
 */

 alert('REGOLE DEL GIOCO\n\nInserisci una parola, ti dirò se è palindroma o no')

 /********************************************************************************************************* */

//Inserisci una parola da invertire
var userWord = prompt('Inserisci una parola').toLowerCase().trim();
console.log('La parola inserita è ', userWord);

//Stampa della paroal invertita
var  wordReverted = reverseWord(userWord);
console.log('La parola invertita è: ', wordReverted);


//Confronto la parola inserita con la parola inverita grazie alla funzione
if (userWord === wordReverted){
    alert('La parole E\' palindroma')
    console.log('La parola inserita E\' palindroma')
}else{
    //Messaggio se la parola non è palindroma
    alert('La parole NON è palindroma')
    console.log('La parola NON è palindroma');
}


/***********************************************************************************************************
 * UTILITIES
 ***********************************************************************************************************/
/**
 * Funzione per invertire le lettere della parola 
 * @param {*} word parola da invertire
 * @returns 
 */

function reverseWord(word) {
    //Inizializzo la variabile che restituirà la parola invertita
    var reverse = '';

    //Ciclo per invertire la parola lettera per lettera dalla lunghezza della parola -1 (parte da zero) e decremento fino ad arrivare alla posizione array zero (<=0)
    for (var i = word.length - 1; i >= 0; i--){
        reverse += word[i];
    }
    //Restituisco all'esterno il risultato per la variabile dalla funzione
    return reverse;
}