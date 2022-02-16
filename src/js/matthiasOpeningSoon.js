// onze functie countdown
const countdown = () => {
    const countDate = new Date('June 9, 2021 00:00:00').getTime(); // hier stellen we de datum, tijd in waar we willen naar aftellen
    const now = new Date().getTime(); // hier vragen we de huidige tijd op
    const gap = countDate - now; // het verschil tussen de datum waar we willen naar aftellen en de huidige tijd

    // Berekening van de tijden
    const second = 1000; // berekenen van het aantal seconden
    const minute = second * 60; // berekenen van het aantal minuten
    const hour = minute * 60; // berekenen van het aantal uren
    const day = hour * 24; // berekenen van het aantal dagen

    // onze berekening met floor ronden we af
    const textDay = Math.floor(gap / day); // het aantal dagen stoppen we in textDay
    const textHour = Math.floor((gap % day) / hour); // het aantal uren stoppen we in textHour % zorgt dat de rest van de dagen er af gehouden wordt
    const textMinute = Math.floor((gap % hour) / minute); // het aantal minuten stoppen we in textMinute % zorgt dat de rest van de uren er af gehouden wordt
    const textSecond = Math.floor((gap % minute) / second); // het aantal seconden stoppen we in textSecond zorgt dat de rest van de minuten er af gehouden wordt

    // hier stoppen we de verwerkte gewenste info in de juiste classe
    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

    //als onze gap minder is dan 900ms (verschil tussen countDate & huidige tijd) zullen we er voor zorgen dat alles van onze functie verdwijnt want teller is afgelopen
    if (gap < 999) {
        document.querySelector('.coming-soon').style.display = 'none';
    }
};
// Hier controleren we elke seconde dus zal onze tijd mooi per sec lopen
setInterval(countdown, 1000);
