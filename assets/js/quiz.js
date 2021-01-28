// Inspiration and guidance for this project was taken from https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified
const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container')

let questions = document.getElementById('questions')
const answerBtns = Array.from(document.getElementsByClassName('answer-btn'));


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];




// questions.addEventListener('click', nextQuestion),
startBtn.addEventListener('click', startQuiz)

function startQuiz(){
    questionCounter = 0;
    score = 0;
    startBtn.classList.add('hide')
    questionContainer.classList.remove('hide')
    nextQuestion()
}

 function nextQuestion(){
     questionCounter++
    fetch('https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple')
    .then(res => {
        return res.json();
    })
    .then(loadedQuestions => {
        questions = loadedQuestions.results.map(loadedQuestions => {
            const formattedQuestion = {
                question: loadedQuestions.question
            };
            questions.innerHTML = formattedQuestion.question
             const answerChoices = [...loadedQuestions.incorrect_answers];
             formattedQuestion.answer = Math.floor(Math.random()*3) +1;
             answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestions.correct_answer);
             
            //  answerBtns.forEach( choice => {
            //      const number = choice.dataset['number'];
            //      choice.innerText = answerChoices[number]
            //     })
            answerbtns.forEach((choice, index) => {
                formattedQuestion['choice' + (index +1)] - choice
             })
             return formattedQuestion;
             choice.innerText = formattedQuestion
         });
         startQuiz();
    })
    .catch(err => {
        console.log(err)
    })
}

function answerSelected(){

}