//Un alert espone 5 numeri casuali diversi.
//Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
//Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati

//document ready (jq)
$(function(){

    //introduco il gioco
    alert('😃 Ciao! Ti verranno mostrati 5 numeri a caso(tra 1 e 100), hai 30 secondi per memorizzarli, dopodichè ti chiederò di scriverli uno alla volta! Mi raccomando non barare e buona fortuna!! 🍀 ')

    //funzione che genera numeri random
    /**
     * Funzione che genera numero random tra un min e un max
     * @param - min - valore minimo
     * @param - max - valore massimo
     */
    function getRandomNumbers (min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    // //invoco la funzione dei numeri random in un while
    var numeriRandom = [];
    while (numeriRandom.length < 5) {
        numeroSingolo = (getRandomNumbers(1, 100));

        // Mi accerto che i numeri randomizzati non siano già presenti nell'array numeriRandom
        if (numeriRandom.includes(numeroSingolo) == false){
            numeriRandom.push(numeroSingolo); 
        }
    }
    
    //imposto l'intervallo di 30sec
    var seconds = 30;
    var interval = setInterval(function(){  
        //mostro i numeri da memorizzare
        document.getElementById('numeriPc').innerHTML = "🔢  I numeri che dovrai memorizzare sono: " + numeriRandom;

        //Seleziono, imposto e mostro l'intervallo di 30sec utili al giocatore per memorizzare i 5 numeri
        var timer = document.getElementById('secondi'); 
        timer.innerHTML = "⏳ Timer: " + seconds + " secondi";

        //condizione che determina il funzionamento del timer
        if ( seconds === 0) {
            //nascondo i numeri una volta passati i 30sec
            $('#fase1').hide();
            clearInterval(interval);
            //"trucchetto" per terminare il setInterval e iniziare la funzione request (byRaffa)
            setTimeout(request, 1); //1 millisecondo
        } else {
            seconds--;
        }
    }, 1000); //1000 è la velocità con cui scorre il timer (1000 = 1sec)

    //funzione che chiede all'utente i 5 numeri che ha memorizzato
    var numeriUtente = [];
    var numeroUtente;
    function request(){
        //uso il ciclo while per chiedere fino a 5 volte un numero
        while(numeriUtente.length < 5){
            numeroUtente = Number(prompt("🎲 Inserisci uno dei 5 numeri che ricordi"));
            //validazione del numero inserito
            if (!numeriUtente.includes(numeroUtente)){
                numeriUtente.push(numeroUtente);
            }
        }  
        
        //verifico i numeri indovinati confrontando quelli inseriti con quelli random, nel caso in cui il numero risulta essere indovinato allora sarà pushato nell'arrey "indovinati"
        var indovinati = [];
        for ( var i = 0; i < numeriUtente.length; i++){
            if ( numeriRandom.includes(numeriUtente[i])){
                indovinati.push(numeriUtente[i]);
            }
        }
        //Comunico il puntegio
        $('#fase2').show();
        var esito = document.getElementById('risultato'); 
        esito.innerHTML = "Hai indovinato: " + indovinati.length + " numeri. 👈" + " I numeri indovinati sono: " + indovinati + ". ⛳";

    }
    
        
       
   






    

});
