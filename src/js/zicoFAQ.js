// alles selecteren onder de constante questions die een class hebben 'question'
const questions = document.querySelectorAll('.question');
// een for loop toepassen op deze constante
questions.forEach(function (question) {
    // constante aanmaken btn waarin de button gestoken wordt met class "question-btn"
    const btn = question.querySelector('.question-btn');
    // op deze btn wordt een eventlistener bij op geplaatst die een class gaat toevoegen/wegnemen als er op geklikt wordt
    btn.addEventListener('click', function () {
        questions.forEach(function (item) {
            if (item !== question) {
                // "show-text" wegnemen als de btn waarop geklikt wordt niet hoort bij de positie waar de show-text staat
                // met andere woorden, dat er maar telkens 1 vraag "openstaat" en de rest gesloten wordt
                item.classList.remove('show-text');
            }
        });
        // als er op de button geklikt wordt zal  de tekst zichtbaar worden, als er nog is op geklikt wordt verdwijnt de tekst
        question.classList.toggle('show-text');
    });
});
