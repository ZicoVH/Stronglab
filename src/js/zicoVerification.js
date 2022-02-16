(function type() {
    // opvragen van de submitbutton
    const submit = document.getElementById('submitbutton');
    // heel de schrijf je eigen review opvragen
    const insturen = document.getElementById('insturen');
    submit.addEventListener('click', function (e) {
        // zodra er op de submit button geklikt wordt een pop up weergeven met alert tekst
        alert('Jouw review is succesvol verstuurd. Zodra deze is verwerkt kan u deze bekijken op de pagina!');
        // de hele schrijf je eigen review resetten zodat je terug vanaf "blanco" begint
        insturen.reset();
    });
})();
