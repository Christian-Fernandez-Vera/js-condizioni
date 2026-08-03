/**
 * Esercizio 1: Chiedi l'età dell'utente tramite prompt. Se l'utente è maggiorenne, stampa a console "Accesso consentito al locale".
 * Esercizio 2:
 * Il costo del biglietto è di 36 €. Chiedi il peso della valigia in kg. Se il peso supera i 23kg, c'è un supplemento di 20 €, infine stampa il prezzo del biglietto.
 * 3. Chiedi un numero all'utente. Stampa se è pari o dispari.
 *4. Un parco divertimenti richiede un'altezza minima di 140cm e almeno 14 anni per le montagne russe. Chiedi questi dati all'utente e stampa se può accedere alle montagne russe.
 *5. Chiedi l'età all'utente. Se è minorenne stampa "Ciao", se è over60 stampa "Salve", altrimenti stampa "Benvenuto".
 *6. Chiedi se l'utente ha la tessera fedeltà. Se ha la tessera applica uno sconto del 10% al prezzo inserito, altrimenti lascia il prezzo intero. Stampa il prezzo.
 *7. Chiedi all'utente che giorno è oggi. Se è "sabato" o "domenica" stampa "Buon weekend!", altrimenti stampa "Buon lavoro".
 *8. Chiedi username e password. Se sono rispettivamente "admin" e "1234", stampa "Login effettuato", altrimenti stampa "Credenziali errate".
 *9. Chiedi un voto da 1 a 10. Stampa "Insufficiente" se < 6, "Sufficiente" se tra 6 e 7, "Buono" se tra 8 e 9, "Ottimo" se 10.
 *10. Chiedi quante ore si resta nel parcheggio. Se sono <= 2 ore costa 5€, se sono <= 5 ore costa 10€, altrimenti costa 15€.
 *11. Chiedi l'età e il genere ("M" o "F"). Se è uomo e ha >= 67 anni o donna e ha >= 62 anni, stampa "Puoi andare in pensione", altrimenti "Devi ancora lavorare".
 *12. Simula il lancio di una moneta. Se il numero è minore di 0.5 stampa "Testa", altrimenti stampa "Croce".
 *13. Chiedi il totale del carrello e-commerce. Se la spesa è superiore a 50€, stampa "Spedizione gratuita", altrimenti calcola e stampa un costo di spedizione fisso di 5€.
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

// const { Component } = require("react");


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

// const numUtente = Number(prompt("Esercizio 3: inserisci un numero"));
// if (numUtente % 2 === 0) {
//     console.log(`Il numero ${numUtente} e' pari`);
// } else {
//     console.log(`Il numero ${numUtente} e' dispari`);
// }


// ==========================================

// const altezzaUtente = Number(prompt("Esercizio 4: inserisci la tua altezza in cm"));
// const etaUtente = Number(prompt("Esercizio 4: inserisci la tua età"));

// if (altezzaUtente >=140 && etaUtente >=14 ) {
//     console.log(`Puoi accedere alle montagne russe`);
// } else {
//     console.log(`Non puoi accedere alle montagne russe`)
// }

// ==========================================

// const etaUtente = Number(prompt("Esercizio 5: inserisci la tua età"));

// if (etaUtente < 18) {
//     console.log("Ciao");
// }
// else if (etaUtente >60) {
//     console.log("Salve");
// }
// else {
//     console.log("Benvenuto")
// }

// ==========================================

// const prezzoOriginale = Number(prompt("Esercizio 6: Inserisci il prezzo del prodotto (€) : "));
// const haTesseraFedelta = prompt("Hai la tessera fedeltà?").toLowerCase() === "si";

// if (haTesseraFedelta) {
//     const prezzoConLoSconto = prezzoOriginale * 0.9;
//     console.log(`Prezzo con lo sconto aplicato: ${prezzoConLoSconto.toFixed(2)} €`)
// } else {
//     console.log(`Prezzo regolare senza sconto: ${prezzoOriginale.toFixed(2)} €`);
// }

// ==========================================

// const giornoDellaSettimana = prompt("Esercizio 7: che giorno è oggi?").toLowerCase();   
// if (giornoDellaSettimana === "sabato" || giornoDellaSettimana === "domenica") {
//     console.log("Buon weekend!");
// } else {
//     console.log("Buon lavoro");
// }

// ==========================================

// const username = prompt("Esercizio 8: inserisci username");
// const password = prompt("Inserisci la password");

// if (username === "admin" && password === "1234") {
//     console.log("Login effettuato")
// } else {
//     console.log("Credenziali errate")
// }

// ==========================================

// const votoUtente = Number(prompt("Esercizio 9: Inserisci il tuo voto da 1 al 10:"))

// if (votoUtente < 6) {
//     console.log(" Voto Insufficente");
// }
// else if (votoUtente >= 6 && votoUtente <=7) {
//     console.log("Voto Sufficiente");
// }
// else if (votoUtente >= 8 && votoUtente <= 9) {
//     console.log("Voto Buono");
// }
// else if (votoUtente === 10) {
//     console.log("Voto Ottimo");
// }
// else {
//     console.log("Il voto inserito non è valido.");
// }

// ==========================================

// const oreParcheggio = Number(prompt("Esercizio 10: Quante ore resti nel parcheggio?"))

// if (oreParcheggio <= 2) {
//     console.log("Il costo del parcheggio è 5€")
// } else if (oreParcheggio <= 5) {
//     console.log("Il costo del parcheggio è 10")
// } else {
//     console.log("Il costo del parcheggio è 15")   
// }

// ==========================================

// const etaUtente = Number(prompt("Esercizio 11: Inserisci la tua età"))
// const genereUtente = prompt("Esercizio 11: Inserisci il tuo genere (M o F)").toUpperCase();

// if ((genereUtente === "M" && etaUtente >=67 )|| (genereUtente === "F" && etaUtente >= 62)) {
//     console.log("Puoi andare in pensione")
// } else {
//     console.log("Devi ancora lavorare")
// }

// ==========================================

// const lancioMoneta = Math.random()

// if (lancioMoneta < 0.5) {
//     console.log("Testa")
// } else {
//     console.log("Croce")
// }

// ==========================================

const carrelloSpesa = Number(prompt("Esercizio 13: Qual'è l'ammonto totale del tuo carrello della spesa?"))

if (carrelloSpesa >= 50) {
    console.log("Spedizione Gratuita")
} else {
    const costoFinale = carrelloSpesa + 5
    console.log(`Il costo di spedizione è di 5€. Totale a pagare: ${carrelloSpesa}`)
}









