/**
 * Esercizio 1: Chiedi l'età dell'utente tramite prompt. Se l'utente è maggiorenne, stampa a console "Accesso consentito al locale".
 * Esercizio 2:
 * Il costo del biglietto è di 36 €. Chiedi il peso della valigia in kg. Se il peso supera i 23kg, c'è un supplemento di 20 €, infine stampa il prezzo del biglietto.
 * 3. Chiedi un numero all'utente. Stampa se è pari o dispari.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */

// console.log('JS ok!')
// ==========================================

// const etaUtente = Number(prompt("Esercizio 1: inserisci la tua età"));
// if (etaUtente >= 18) {
//     console.log('Accesso consentito al locale');
// }


// ==========================================

// let costoBiglietto = 36;
// const pesoValigia = Number(prompt("Esercizio 2: inserisci il peso della valigia in kg"));
// const supplemento = 20
// if (pesoValigia > 23) {
//     costoBiglietto += 20;
// }
// console.log(`Il costo del biglietto è: ${costoBiglietto} €`);


// ==========================================

const numUtente = Number(prompt("Esercizio 3: inserisci un numero"));
if (numUtente % 2 === 0) {
    console.log(`Il numero ${numUtente} e' pari`);
} else {
    console.log(`Il numero ${numUtente} e' dispari`);
}
