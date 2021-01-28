// Inspiration and guidance for this project was taken from https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified
const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container')

let questions = document.getElementById('questions')
// questions.addEventListener('click', nextQuestion),
startBtn.addEventListener('click', startQuiz)

function startQuiz(){
    console.log('started')
    startBtn.classList.add('hide')
    questionContainer.classList.remove('hide')
    nextQuestion()
}

 function nextQuestion(){
    fetch('https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple')
    .then(res => {
        return res.json();
    })
    .then(loadedQuestions => {
        console.log(loadedQuestions.results);
        questions = loadedQuestions.results.map(loadedQuestions => {
            const formattedQuestion = {
                question: loadedQuestions.question
            };
            questions.innerHTML = formattedQuestion.question
             const answerChoices = [loadedQuestions.incorrect_answers];
             formattedQuestion.answer = Math.floor(Math.random()*3) +1;
             answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestions.correct_answer);

            answerChoices.forEach((choice, index) => {
                 formattedQuestion['choice' + (index +1)] - choice
             })

             return formattedQuestion;
         });
         startQuiz();
    })
    .catch(err => {
        console.log(err)
    })
}

function answerSelected(){

}