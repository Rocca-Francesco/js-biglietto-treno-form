// Assegno un valore al mio bottone e controllo il uso evento.
const btnCalcolaEl = document.getElementById("btnCalcola");

btnCalcolaEl.addEventListener(
    "click",
    function () {
        // Assegno un valore alle mie variabili per età e chilometri.
        const userAgeEl = document.getElementById("userAge").value;
        const userDistanceEl = document.getElementById("userDistance").value;

        // Rimuovo valori dal form.
        document.getElementById("userAge").value = "";
        document.getElementById("userDistance").value = "";

        // Controllo che i dati inseriti siano numeri.
        if (isNaN(userAgeEl) || isNaN(userDistanceEl)) {
            alert("Inserire dei numeri.");
        }
        else {
            // Calcolo il prezzo del biglietto.
            let ticketPrice = userDistanceEl * 0.21;

            // Calcolo lo sconto.

            if (userAgeEl < 18) {
                // Calcolo percentuale sconto.
                let discount = ((ticketPrice / 100) * 20);
                // Applico sconto.
                ticketPrice = ticketPrice - discount;
            }
            else if (userAgeEl >= 65) {
                // Calcolo percentuale sconto.
                let discount = ((ticketPrice / 100) * 40);
                // Applico sconto.
                ticketPrice = ticketPrice - discount;
            }

            // Riporto i dati inseriti dall'utente.
            document.getElementById("userAgeInt").innerHTML = "L'età inserita è " + userAgeEl + " anni.";
            document.getElementById("userDistanceInt").innerHTML = "La distanza inserita sono " + userDistanceEl + " km."
            // Scrivo il prezzo finale, in euro.
            ticketPrice = (Math.round((ticketPrice * 100))) / 100;

            document.getElementById("userTicket").innerHTML = "Il prezzo del tuo bigliettto è €" + ticketPrice + ".";
        }
    }
);


