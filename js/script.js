/*Quali campi inserire nel form:
Una casella di testo per il form del passeggero
Una casella numerica per i km
Una tendina per selezionare la fascia d'età (Maggiorenne, Minorenne, Over65)
NON E' NECESSARIA ALCUNA VALIDAZIONE
Come calcolare  il prezzo:
il prezzo del biglietto è definito in base ai km(0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,
Cosa stampare sul biglietto:
Nome passeggero
Codice treno(inseriamo una stringa a caso, per ora)
Numero carrozza(randomizziamo una carrozza da 1 a 12)
Prezzo(stampato con due decimali)
Tariffa applicata all'utente (Tariffa minori, Tariffa ordinaria, Tariffa Over65) */



/*STEP

1 - creare variabili per targetizzare elementi in html necessari;
2 - creare variabili che raccolgano dati dagli input necessari per effettuare calcolo al click del button.

3 - applicare al button generate listenevent();
3a - lavorare all'interno del bottone per eseguire i calcoli appropriati;
- prezzo base biglietto kms * 0.21;
- casistiche in cui viene applicato lo sconto con 2 if;
4 - a seconda della fascia di età selezionata nella sezione offerta viene stampato valore appropriato.
5- carrozza genera un numero random da 0 a 12 con math.
6 - Stampa di tutti gli elementi nelle rispettive sezioni dopo aver premuto il bottone.
7 - programmare bottone reset per svuotare gli input al click;

*/

// Var Campi di inserimento dati
var nameField = document.getElementById('name');
var kmsField = document.getElementById('kms');
var ageField = document.getElementById('age');
var generateBtn = document.getElementById('generate-btn');
var resetBtn = document.getElementById('reset-btn');



//Display output (elements)
var passengerDisplay = document.getElementById('passenger');
var offerDisplay = document.getElementById('offer');
var carDisplay = document.getElementById('car');
var trainDisplay = document.getElementById('train');
var priceDisplay = document.getElementById('price');

// display section
var ticketSection = document.getElementById('ticket-section');


// Bottone generazione biglietto
generateBtn.addEventListener('click', function () {

    // Var DATI inseriti

    var nameValue = nameField.value;
    console.log('Nome inserito: ', nameValue);
    var kmsValue = kmsField.value;
    console.log('Distanza percorsa: ', kmsValue);
    var ageValue = ageField.value;
    console.log('Fascia età:', ageValue);


    var price = kmsValue * 0.21;
    var priceRange = 'Tariffa ordinaria';
    var randomCar = Math.floor(Math.random() * 12) + 1;
    var randomTrain = Math.floor(90000 + Math.random() * 9000);
    console.log(randomTrain);


    // se minorenne
    if (ageValue === 'min') {
        price *= 0.8;
        priceRange = 'Tariffa Minori';
    }

    // se over 65
    if (ageValue === 'over65') {
        price *= 0.6;
        priceRange = 'Tariffa Senior';
    }

    //controllo

    console.log(price);
    console.log(priceRange);



    // stampa dati negli appositi campi
    passengerDisplay.innerHTML = nameValue;
    offerDisplay.innerHTML = priceRange;
    carDisplay.innerHTML = randomCar;
    trainDisplay.innerHTML = randomTrain;
    priceDisplay.innerHTML = '€ ' + price.toFixed(2);


    // reset valori inserimento
    nameField.value = '';
    ageField.value = 'maj';


    //visibilità sezione biglietto
    ticketSection.classList.remove('hidden');

});

// Bottone reset totale 
resetBtn.addEventListener('click', function () {
    nameField.value = '';
    kmsField.value = '10';
    ageField.value = 'maj';

    // Reset nasconde di nuovo la sezione biglietto
    ticketSection.classList.add('hidden');
});







