// Inspiration and guidance for this project was taken from https://www.youtube.com/watch?v=riDzcEQbX6k&ab_channel=WebDevSimplified
const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container')

startBtn.addEventListener('click', startQuiz)

function startQuiz(){
    console.log('started')
    startBtn.classList.add('hide')
    questionContainer.classList.remove('hide')
    nextQuestion()
}

function nextQuestion(){

}

function answerSelected(){

}