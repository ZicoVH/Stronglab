const texts = ['Meditatie', 'Pilates', 'Yoga']; // een array om de opvullen met de woordenlijst die we willen tonen
let count = 0; // count op 0 zetten
let index = 0; // index op 0 zetten
let currentText = ''; // currentText aanmaken voorlopig leeg
let letter = ''; // currentText aanmaken voorlopig leeg

// functie die zichzelf zal oproepen
(function type() {
    // voorwaarde als onze text lengte gelijk is aan count gaat count terug naar 0
    if (count === texts.length) {
        count = 0;
    }
    //currenText = aan het eerste woord van onze array, zal zo de array ook steeds doorlopen
    currentText = texts[count];
    // hier zullen we telkens slicen naar de volgende letter van onze currentText
    letter = currentText.slice(0, ++index);

    // we veranderen hier de content van onze classe .typing
    document.querySelector('.typing').textContent = letter;
    //voorwaarde als we alle letters van de current text hebben gehad gaat de teller omhoog (volgend woord) en index wordt weer op 0 gezet zodat we terug bij de eerste letter beginnen
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    //hier bepalen we de snelheid van uitvoeren
    setTimeout(type, 200);
})();
