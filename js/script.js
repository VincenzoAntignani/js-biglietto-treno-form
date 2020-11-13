// Partendo dall'esercizio di due giorni fa, aggiungiamo una sezione (div) con i campi di input per chiedere all'utente nome-cognome, età (select) e numero di km da percorrere.
// Creiamo un finto biglietto del treno con:
// Nome passeggero
// Codice treno (numero casuale tra 90000 e 100000 escluso)
// Numero carrozza (numero casuale tra 1 e 9)
// Prezzo calcolato
// Categoria selezionata dall'utente (offerta)


// Dobbiamo generare qualcosa al click, come fare? Con .addEventListeners
var generaBiglietto = document.getElementById("btn_genera");
generaBiglietto.addEventListener("click",

  function() {
    var yourName = document.getElementById("name").value;
    console.log(yourName);

    var yourKm = document.getElementById("km").value;
    console.log(yourKm);

    var yourAge = document.getElementById("age").value;
    console.log(yourAge);

    // Prezzo di un km percorso
    var euroKm = 0.21;
    console.log("Costo di un km: " + euroKm);

    ///Prezzo base
    var euroTot = yourKm * euroKm ;
    console.log("Costo del viaggio: " + euroTot);

    // Sconto per minorenni
    var saleUnderage = euroTot / 1.20;
    // console.log(saleUnderage);

    // Sconto per Over65
    var saleSenior = euroTot / 1.40;
    // console.log(saleSenior);

    // Messaggio offerta
    var msgOffer = "";

    // Applicazione del prezzo
    if (yourAge == "minorenne") {

      document.getElementById("final_price").innerHTML = "€ " + saleUnderage.toFixed(2);
      console.log("scontato: " + saleUnderage.toFixed(2));

      msgOffer = "Offerta riservata a minorenni";

    } else if (yourAge == "over65") {

      document.getElementById("final_price").innerHTML = "€ " + saleSenior.toFixed(2);
      console.log("scontato senior: " + saleSenior.toFixed(2));

      msgOffer = "Offerta Gold Senior";

    } else {

      document.getElementById("final_price").innerHTML = "€ " + euroTot.toFixed(2);
      console.log("standard: " + euroTot.toFixed(2));

      msgOffer = "Prezzo standard";
    }

    // Generazione biglietto
    var nameUtent = document.getElementById("name").value;
    document.getElementById("name_passenger").innerHTML = nameUtent;

    var numCarriage = Math.floor(Math.random() * 10) + 1;
    document.getElementById("number_carriage").innerHTML = numCarriage;

    var numCode = Math.floor(Math.random() * 10000) + 90000;
    document.getElementById("number_code").innerHTML = numCode;


    document.getElementById("offer").innerHTML = msgOffer;

    // Far apparire il biglietto del treno

  }
);






// // Chiedere km da percorrere
// var kmToGo = parseInt(prompt("Per quanti km vuoi viaggiare?"));
// console.log(kmToGo);
//
// // Chiedere età
// var yourAge = parseInt(prompt("Qual'è la tua età?"));
// console.log(yourAge);
//
// // Prezzo di un km percorso
// var euroKm = 0.21;
// console.log(euroKm);
//
// //Prezzo calcolato in base ai km
// var euroTot = kmToGo * euroKm ;
// console.log(euroTot);
// // document.getElementById('ticket_price').innerHTML = euroTot;
//
// // Determinazione del minorenne
// var underage = 18;
// console.log(underage);
//
// // Determinazione del minorenne
// var senior = 65;
// console.log(senior);
//
// // Sconto minorenne
// var saleUnderage = euroTot / 1.20 ;
// console.log(saleUnderage);
//
// // Sconto Over65
// var saleSenior = euroTot / 1.40;
// console.log(saleSenior);
