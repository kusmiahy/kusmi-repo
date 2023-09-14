const allQuestions = document.querySelectorAll('.faq__question');

/**
 * Quand une question est cliquée, la réponse apparait et si on reclique elle disparait
 */

document.addEventListener("DOMContentLoaded", function() {
    allQuestions.forEach((question) => {
        question.addEventListener('click', () => {
            console.log("click");
            !question.classList.contains('faq__question--toggled') ? question.classList.add('faq__question--toggled') : question.classList.remove('faq__question--toggled'); 
        })
    })
})