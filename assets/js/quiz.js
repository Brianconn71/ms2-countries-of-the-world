// This page is used for the quiz game in the index.html page
// Inspiration and guidance for this project was taken from https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified and https://www.youtube.com/watch?v=zZdQGs62cR8&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF&index=3&ab_channel=JamesQQuick 
// Constants
const question = document.getElementById('question');
const startBtn = document.getElementById('start-btn');
const answerBtns = document.getElementById('answer-btns')
const questionContainer = document.getElementById('question-container');
const answers = Array.from(document.getElementsByClassName('answer-btn'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score')
const fullBar = document.getElementById('full-bar')
const finishedGame = document.getElementById('finishedGame')
const max_questions = 10;
const correct_bonus = 10;
const finalScore = document.getElementById('finalScore')
const newScore = localStorage.getItem('newScore')

// lets
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [];

// questions.addEventListener('click', nextQuestion),
startBtn.addEventListener('click', startQuiz)


// the below fetch, gets the questions and answers for the quiz form the open trivia database https://opentdb.com/
//Struggled badly with the quiz initially before I got inspiration and guidance from the set of videos on youtube located here: https://www.youtube.com/watch?v=3aKOQn2NPFs&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF&index=11&ab_channel=JamesQQuick

fetch('https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple')
    .then((res) => {
        return res.json();
    })
    .then((loadedQuestions) => {
        questions = loadedQuestions.results.map(loadedQuestion => {
            const formattedQuestion = {
                question: loadedQuestion.question
            };
            //questions.innerHTML = formattedQuestion.question
            const answerChoices = [...loadedQuestion.incorrect_answers];
            formattedQuestion.answer = Math.floor(Math.random() * 4) + 1;
            answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestion.correct_answer);

            answerChoices.forEach((choice, index) => {
                formattedQuestion['choice' + (index + 1)] = choice
            });
            return formattedQuestion;
        });
    })
    .catch((err) => {});


function startQuiz() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    startBtn.classList.add('hide')
    questionContainer.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {

    if (availableQuestions.length === 0 || questionCounter >= max_questions) {
        // Shows a new container after a user finishes the quiz
        questionContainer.classList.add('hide')
        finishedGame.classList.remove('hide')
    }
    questionCounter++
    progressText.innerHTML = `Question ${questionCounter}/${max_questions}`;
    // udate the progress bar
    fullBar.style.width = `${(questionCounter / max_questions)* 100}%`

    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex]
    question.innerHTML = currentQuestion.question;

    answers.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

answers.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number']

        let feedbackClass = 'incorrect'
        if (selectedAnswer == currentQuestion.answer) {
            feedbackClass = 'correct'
        }
        if (feedbackClass == "correct") {
            incrementScore(correct_bonus)
        }
        selectedChoice.classList.add(feedbackClass)

        setTimeout(() => {
            selectedChoice.classList.remove(feedbackClass)
            nextQuestion()
        }, 1000)
    })

})

function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
    // adding the last score saved in the local storage to the final score displayed on the end screen of the quiz
    finalScore.innerText = score;
    finalScore.style.fontWeight = "bold"
}

// my own custom function to start the game again once a user completes the quiz 
function playAgain() {
    questionContainer.classList.remove('hide')
    finishedGame.classList.add('hide')
    startQuiz()
}