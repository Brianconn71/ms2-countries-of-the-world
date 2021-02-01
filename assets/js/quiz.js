// This page is used for the quiz game in the index.html page
// Inspiration and guidance for this project was taken from https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified and https://www.youtube.com/watch?v=zZdQGs62cR8&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF&index=3&ab_channel=JamesQQuick 
// Constants
const question = document.getElementById('question');
const startBtn = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-container')
const answers = Array.from(document.getElementsByClassName('answer-btn'))

const max_questions = 3;

// lets
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript??',
        choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1,
    },
    {
        question:
            "What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },
    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
];

// // questions.addEventListener('click', nextQuestion),
startBtn.addEventListener('click', startQuiz)

function startQuiz(){
     questionCounter = 0;
     score = 0;
     availableQuestions=[...questions]
     startBtn.classList.add('hide')
     questionContainer.classList.remove('hide')
     nextQuestion()
}

function nextQuestion(){

    if(availableQuestions.length === 0 || questionCounter >= max_questions){
        //ges to end of page
        return window.location.assign('/end.html')
    }
      questionCounter++
      const questionIndex = Math.floor(Math.random() * availableQuestions.length)
      currentQuestion = availableQuestions[questionIndex]
      question.innerText = currentQuestion.question;

      answers.forEach(choice =>{
          const number = choice.dataset['number'];
          choice.innerText = currentQuestion['choice' + number];
      });

      availableQuestions.splice(questionIndex, 1);

      acceptingAnswers = true;
};

answers.forEach(choice =>{
    choice.addEventListener('click', e =>{
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number']

        let feedbackClass = 'incorrect'
        if(selectedAnswer == currentQuestion.answer){
            feedbackClass = 'correct'
        }
        selectedChoice.classList.add(feedbackClass)

        setTimeout(() => {
            selectedChoice.classList.remove(feedbackClass)
            nextQuestion()
        }, 1000)
    })

})
//     fetch('https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple')
//     .then(res => {
//         return res.json();
//     })
//     .then(loadedQuestions => {
//         questions = loadedQuestions.results.map( loadedQuestion => {
//             const formattedQuestion = {
//                 question: loadedQuestion.question
//             };
//             questions.innerHTML = formattedQuestion.question
//              const answerChoices = [...loadedQuestion.incorrect_answers];
//              formattedQuestion.answer = Math.floor(Math.random()*3) +1;
//              answerChoices.splice(formattedQuestion.answer - 1, 0, loadedQuestion.correct_answer);
            
//             answerBtns.forEach(answerBtn => {
//                 const number = answerBtn.dataset['number'];
//                 console.log(formattedQuestion)
//                 //answerBtn.innerText = answerChoices
//                 //formattedQuestion['answerBtn' + (index +1)] = answerBtn
//              })
             
//             //  console.log(formattedQuestion)
//             //  return formattedQuestion;
//          });
//          startQuiz();
//     })
//     .catch(err => {
//         console.log(err)
//     })
// }

// function answerSelected(){

// }