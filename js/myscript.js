// Dichiaro le mie variabili per età e chilometri, per questioni di scope.
let userAgeEl;
let userDistanceEl;

// Assegno un valore al mio bottone e controllo il uso evento.
const btnCalcolaEl = document.getElementById("btnCalcola");

btnCalcolaEl.addEventListener(
    "click",
    function () {
        // Assegno nomi alle variabili per js.
        userAgeEl = parseInt(document.getElementById("userAge").value);
        userDistanceEl = parseInt(document.getElementById("userDistance").value);
        console.log(userAgeEl, userDistanceEl);
    }
)




// // Chiedo all'utente quanti chilometri deve percorrere.
// let distanza = parseInt(prompt("Quanti chilometri devi percorrere?"));

// // Chiedo l'età dell'utente.
// let userAge = parseInt(prompt("Quanti anni hai?"));

// // Calcolo il prezzo del biglietto.
// let ticketPrice = distanza * 0.21;

// // Calcolo lo sconto.

// if (userAge < 18) {
//     let discount = ((ticketPrice / 100) * 20);
//     ticketPrice = ticketPrice - discount;
// }
// else if (userAge > 65) {
//     let discount = ((ticketPrice / 100) * 40);
//     ticketPrice = ticketPrice - discount;
// }

// console.log(ticketPrice);
// // Scrivo il prezzo finale, in euro.
// ticketPrice = (Math.round((ticketPrice * 100))) / 100;

// document.getElementById("final_price").innerHTML = "Il prezzo del tuo bigliettto è €" + ticketPrice + "."
