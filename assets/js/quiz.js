// This page is soley used for the quiz game in the index.html page
// Inspiration and guidance for this project was taken from https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified and https://www.youtube.com/watch?v=zZdQGs62cR8&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF&index=3&ab_channel=JamesQQuick 
const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container')

let questions = document.getElementById('questions')
const answerBtns = Array.from(document.getElementsByClassName('answer-btn'));


let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

const maxQuestions = 10


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
        questions = loadedQuestions.results.map( loadedQuestion => {
            const formattedQuestion = {
                question: loadedQuestion.question
            };
            questions.innerHTML = formattedQuestion.question
             const answerChoices = [...loadedQuestion.incorrect_answers];
             formattedQuestion.answer = Math.floor(Math.random()*3) +1;
             answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestion.correct_answer);
            
            answerBtns.forEach(answerBtn => {
                const number = answerBtn.dataset['number'];
                console.log(formattedQuestion)
                //answerBtn.innerText = answerChoices
                //formattedQuestion['answerBtn' + (index +1)] = answerBtn
             })
             
            //  console.log(formattedQuestion)
            //  return formattedQuestion;
         });
         startQuiz();
    })
    .catch(err => {
        console.log(err)
    })
}

function answerSelected(){

}