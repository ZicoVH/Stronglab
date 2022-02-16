// functie die zichzelf zal oproepen
(function () {
    const time = new Date().getHours(); // van de huidige tijd vragen we de uren op deze steken we in time
    const checkbox = document.getElementById('checkbox'); // hier vragen we het element checkbox op

    // voorwaarde als het vroeger dan 8u of later dan 17u is
    if (time < 8 || time > 17) {
        // hier zullen we zorgen dat onze body dark wordt
        document.body.classList.toggle('dark');
        // verder willen we dat onze checkbox ook op true gemarkeerd wordt
        document.getElementById('checkbox').checked = true;
    }
    // verder willen we ook doormiddel van het change event ook naar het dark theme kunnen gaan dat doen we in onderstaande code
    checkbox.addEventListener('change', () => {
        document.body.classList.toggle('dark');
    });
})();
