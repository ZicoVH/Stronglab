// een array om de .getDay int (0-6) om te zetten naar een string van de dag
const days = ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'];

function showTime() {
    // een nieuwe data aanmaken
    const date = new Date();
    // opvragen van de dag, voor bv zaterdag is dit int 6, door die te laten overlopen op de array wordt plek nummer 6 verkregen
    // waardoor ipv "6", "zaterdag" wordt teruggegeven
    let day = days[date.getDay()]; // 0 - 6
    // opvragen van het uur
    let hour = date.getHours(); // 0 - 23
    // opvragen van de minuten
    let minutes = date.getMinutes(); // 0 - 59
    // opvragen van de seconden
    let seconds = date.getSeconds(); // 0 - 59
    // overlopen van de functie alwaysdoubledigit om altijd bv 03 weer te geven ipv 3, dus double digit
    day = alwaysdoubledigit(day);
    hour = alwaysdoubledigit(hour);
    minutes = alwaysdoubledigit(minutes);
    seconds = alwaysdoubledigit(seconds);

    // functie om altijd double digits weer te geven
    function alwaysdoubledigit(a) {
        if (a < 10) {
            return '0' + a;
        } else {
            return a;
        }
    }
    // om een mooie uitkomst te krijgen met het uur, minuten, seconden en dag op één lijn
    const time = hour + ':' + minutes + ':' + seconds + ' | ' + day;

    // om de div met id clock aan te passen naar de huidige tijd
    document.getElementById('clock').innerText = time;
    document.getElementById('clock').textContent = time;

    setTimeout(showTime, 1000);
}
// om de volledige functie te laten werken
showTime();
