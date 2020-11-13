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
    console.log(yourName)

    var yourKm = document.getElementById("km").value;
    console.log(yourKm)

    var yourAge = document.getElementById("age").value;
    console.log(yourAge)

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
