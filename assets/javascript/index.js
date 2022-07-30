var highscoresBody = document.querySelector("#highscoresBody");
var startBtn = document.querySelector("#startBtn");
var indexTimer = document.querySelector("#indexTimer");
var indexBody = document.querySelector("#indexBody");
var startingHtml = document.querySelector("#startingHtml");
var localStoragePlayerName = document.querySelector('#nameInput');
var localStorageHighScore = localStorage.getItem('score');
var currentScore = 0;
var timeLeft = 5;
var questionIndex = 0;
var questionArr = [
    function question1() {
      var question1 = document.createElement("p");
      question1.setAttribute("class", "text-center fs-4 text-primary");
      question1.innerHTML = "What does CSS stand for?";
      document.getElementById("indexBody").appendChild(question1);
      var answer1 = document.createElement("button");
      answer1.setAttribute("class", "btn btn-primary answer-correct");
      answer1.setAttribute("onClick", "answerCorrect()");
      answer1.innerHTML = "Cascade Style Sheet";
      document.getElementById("indexBody").appendChild(answer1);
      var answer2 = document.createElement("button");
      answer2.setAttribute("class", "btn btn-primary answer-wrong");
      answer2.setAttribute("onClick", "answerIncorrect()");
      answer2.innerHTML = "Custom Styling Strategy";
      document.getElementById("indexBody").appendChild(answer2);
      var answer3 = document.createElement("button");
      answer3.setAttribute("class", "btn btn-primary answer-wrong");
      answer3.setAttribute("onClick", "answerIncorrect()");
      answer3.innerHTML = "Creative Spending Space";
      document.getElementById("indexBody").appendChild(answer3);
      var answer4 = document.createElement("button");
      answer4.setAttribute("class", "btn btn-primary answer-wrong");
      answer4.setAttribute("onClick", "answerIncorrect()");
      answer4.innerHTML = "Clap Silly String";
      document.getElementById("indexBody").appendChild(answer4);
    },
    function question2() {
      var question1 = document.createElement("p");
      question1.setAttribute("class", "text-center fs-4 text-primary");
      question1.innerHTML = "Which is not a coding language?";
      document.getElementById("indexBody").appendChild(question1);
      var answer1 = document.createElement("button");
      answer1.setAttribute("class", "btn btn-primary answer-wrong");
      answer1.setAttribute("onClick", "answerIncorrect()");
      answer1.innerHTML = "CSS";
      document.getElementById("indexBody").appendChild(answer1);
      var answer2 = document.createElement("button");
      answer2.setAttribute("class", "btn btn-primary answer-correct");
      answer2.setAttribute("onClick", "answerCorrect()");
      answer2.innerHTML = "Coeducation";
      document.getElementById("indexBody").appendChild(answer2);
      var answer3 = document.createElement("button");
      answer3.setAttribute("class", "btn btn-primary answer-wrong");
      answer3.setAttribute("onClick", "answerIncorrect()");
      answer3.innerHTML = "JavaScript";
      document.getElementById("indexBody").appendChild(answer3);
      var answer4 = document.createElement("button");
      answer4.setAttribute("class", "btn btn-primary answer-wrong");
      answer4.setAttribute("onClick", "answerIncorrect()");
      answer4.innerHTML = "HTML";
      document.getElementById("indexBody").appendChild(answer4);
    },
    function question3() {
        var question1 = document.createElement("p");
        question1.setAttribute("class", "text-center fs-4 text-primary");
        question1.innerHTML = "What are people who write computer code called?";
        document.getElementById("indexBody").appendChild(question1);
        var answer1 = document.createElement("button");
        answer1.setAttribute("class", "btn btn-primary answer-wrong");
        answer1.setAttribute("onClick", "answerIncorrect()");
        answer1.innerHTML = "Cryptographers";
        document.getElementById("indexBody").appendChild(answer1);
        var answer2 = document.createElement("button");
        answer2.setAttribute("class", "btn btn-primary answer-correct");
        answer2.setAttribute("onClick", "answerCorrect()");
        answer2.innerHTML = "Programmers";
        document.getElementById("indexBody").appendChild(answer2);
        var answer3 = document.createElement("button");
        answer3.setAttribute("class", "btn btn-primary answer-wrong");
        answer3.setAttribute("onClick", "answerIncorrect()");
        answer3.innerHTML = "Manufacturers";
        document.getElementById("indexBody").appendChild(answer3);
        var answer4 = document.createElement("button");
        answer4.setAttribute("class", "btn btn-primary answer-wrong");
        answer4.setAttribute("onClick", "answerIncorrect()");
        answer4.innerHTML = "Professors";
        document.getElementById("indexBody").appendChild(answer4);
      },
      function question4() {
        var question1 = document.createElement("p");
        question1.setAttribute("class", "text-center fs-4 text-primary");
        question1.innerHTML = "Which of these is not run using a computer program?";
        document.getElementById("indexBody").appendChild(question1);
        var answer1 = document.createElement("button");
        answer1.setAttribute("class", "btn btn-primary answer-wrong");
        answer1.setAttribute("onClick", "answerIncorrect()");
        answer1.innerHTML = "Car";
        document.getElementById("indexBody").appendChild(answer1);
        var answer2 = document.createElement("button");
        answer2.setAttribute("class", "btn btn-primary answer-correct");
        answer2.setAttribute("onClick", "answerIncorrect()");
        answer2.innerHTML = "Rocket Ship";
        document.getElementById("indexBody").appendChild(answer2);
        var answer3 = document.createElement("button");
        answer3.setAttribute("class", "btn btn-primary answer-wrong");
        answer3.setAttribute("onClick", "answerIncorrect()");
        answer3.innerHTML = "Train";
        document.getElementById("indexBody").appendChild(answer3);
        var answer4 = document.createElement("button");
        answer4.setAttribute("class", "btn btn-primary answer-wrong");
        answer4.setAttribute("onClick", "answerCorrect()");
        answer4.innerHTML = "Bicycle";
        document.getElementById("indexBody").appendChild(answer4);
      },
      function question5() {
        var question1 = document.createElement("p");
        question1.setAttribute("class", "text-center fs-4 text-primary");
        question1.innerHTML = "Which is a coding language?";
        document.getElementById("indexBody").appendChild(question1);
        var answer1 = document.createElement("button");
        answer1.setAttribute("class", "btn btn-primary answer-wrong");
        answer1.setAttribute("onClick", "answerIncorrect()");
        answer1.innerHTML = "Bite";
        document.getElementById("indexBody").appendChild(answer1);
        var answer2 = document.createElement("button");
        answer2.setAttribute("class", "btn btn-primary answer-correct");
        answer2.setAttribute("onClick", "answerIncorrect()");
        answer2.innerHTML = "Gnaw";
        document.getElementById("indexBody").appendChild(answer2);
        var answer3 = document.createElement("button");
        answer3.setAttribute("class", "btn btn-primary answer-wrong");
        answer3.setAttribute("onClick", "answerIncorrect()");
        answer3.innerHTML = "Itch";
        document.getElementById("indexBody").appendChild(answer3);
        var answer4 = document.createElement("button");
        answer4.setAttribute("class", "btn btn-primary answer-wrong");
        answer4.setAttribute("onClick", "answerCorrect()");
        answer4.innerHTML = "Scratch";
        document.getElementById("indexBody").appendChild(answer4);
      }
]

function startGame() {
    localStorage.setItem('name', localStoragePlayerName);
  startingHtml.remove();
  setTimer();
  nextQuestion();
}

function nextQuestion() {
    indexBody.textContent = '';
    questionArr[questionIndex]();
    questionIndex ++;
}


function setTimer() {
  countdown = setInterval(function() {
    document.getElementById('indexTimer').innerHTML='time left:' + timeLeft;
    timeLeft --;
    if (timeLeft <= 0) {
        document.getElementById('indexTimer').innerHTML=''
        endQuiz();
    }
  }, 1000)
}

function answerCorrect() {
    console.log("correct");
    addPoint();
    nextQuestion();
};

function answerIncorrect() {
alert('incorrect');
};

function addPoint() {
    currentScore ++;
    document.getElementById('currentPoints').innerHTML='current score:' + currentScore
};

function endQuiz() {
localStorage.setItem('score', currentScore);
indexBody.textContent = '';
document.getElementById('indexBody').innerHTML="Your score is " + currentScore + "!";
document.getElementById('highScoresBody').innerHTML='stuff';
}

startBtn.addEventListener("click", startGame);