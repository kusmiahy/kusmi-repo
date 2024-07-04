const allQuestions = document.querySelectorAll('.single__title-container');



/**
 * Quand une question est cliquée, la réponse apparait et si on reclique elle disparait
 */

document.addEventListener("DOMContentLoaded", function () {
    if(allQuestions) {
        allQuestions.forEach((question) => {
            question.addEventListener('click', () => {
                !question.classList.contains('single__title-container--toggled') ? question.classList.add('single__title-container--toggled') : question.classList.remove('single__title-container--toggled');
            })
        })
    } else {
        console.log('existe pas');
    }
})
