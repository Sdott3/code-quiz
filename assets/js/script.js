// quiz variables
var timer = 60;
var question = "";
var correctAnswer = "";
var activeQuestion = 0;
var scores = [];

var timeEl = document.querySelector("p.time");
var startBtnEl = document.querySelector("#start");
var initEl = document.querySelector("#intro");

var questionBlockEl = document.querySelector("#questions");
var questionEl = document.querySelector("#question");
var btn1 = document.querySelector("#answer1");
var btn2 = document.querySelector("#answer2");
var btn3 = document.querySelector("#answer3");
var btn4 = document.querySelector("#answer4");

var yesnoEl = document.querySelector("#yesno");
var submitScoreEl = document.querySelector("#submit-score");
var finalScoreEl = document.querySelector("#finalscore");
var scoreEl = document.querySelector("#score");
var highScoresEl = document.querySelector("#highscores");
var scoreListEl = document.querySelector("#score-list");

var initialsEl = document.querySelector("#initials");
var backEl = document.querySelector("#back");
var viewEl = document.querySelector("#view");
var clearEl = document.querySelector("#clear");

questionBlockEl.style.display = "none";
finalScoreEl.style.display = "none";
highScoresEl.style.display = "none";

// questions 
// WHEN I answer a question
//THEN I am presented with another question
var questions = [
    {
        question: "What does HTML stand for?",  
        answers:{
            a: "JQuery", 
            b: "XHTML", 
            c:  "CSS",
            d:  "HTML",
            },
            correctAnswer: "d"
    },
    {
        question: "What is considered a proper Boolean value?",
        answers: {
            a:  "45", 
            b:  "NULL", 
            c:  "The value of a very fit ghost", 
            d:  "TRUE"
        },
            correctAnswer: "c"
    },
    {
        question: "Whis is best for Artificial Intelligence??",
        answers: {
            a:  "React", 
            b:  "Laravel", 
            c:  "Python", 
            d:  "Sass",
        },
        correctAnswer: "c"
    },
    {
        question: "Which JavaScript method is used to write on browser's console?",
        answers: {
          a: "console.write()",
          b: "console.output()",
          c: "console.log()",
          d: "console.writeHTML()",
        },
        correctAnswer: "c",
      },
      {
        question: "Which JavaScript keyword is used to declare a variable?",
        answers: {
          a: "Var",
          b: "var",
          c: "let",
          d: "All the above.",
        },
        correctAnswer: "b",
    },
];

//function to set the active question
function setQuestion(idx) {
    if (idx < questions.length) {
      questionEl.textContent = questions[idx].question;
      btn1.textContent = questions[idx].answers.a;
      btn2.textContent = questions[idx].answers.b;
      btn3.textContent = questions[idx].answers.c;
      btn4.textContent = questions[idx].answers.d;
    }
}
  
function checkAnswer(e) {
    e.preventDefault();
  
    yesnoEl.style.display = "block";
    let feedbackEl = document.createElement("p");
    yesnoEl.appendChild(feedbackEl);
  
    setTimeout(function () {
      feedbackEl.style.display = "none";
    }, 1000);
  
    if (e.target.value === questions[activeQuestion].correctAnswer) {
      feedbackEl.textContent = "Correct!";
    } else {
      feedbackEl.textContent = "Wrong!";
      timer -= 10;
    }
    if (activeQuestion < questions.length) {
      activeQuestion += 1;
    }
    setQuestion(activeQuestion);
}
  
function saveScore(e) {
    e.preventDefault();
    finalScoreEl.style.display = "none";
    highScoresEl.style.display = "block";
    let initials = initialsEl.value;
    scores.push({ initials: initials, score: timer });
    buildScoreDisplay();
  
    storeScores();
    getScores();
}
  
function buildScoreDisplay() {
    scores.sort(function (a, b) {
      return b.score - a.score;
    });
    scoreListEl.innerHTML = "";
    for (let i = 0; i < scores.length; i++) {
      let scoreLineEl = document.createElement("li");
      scoreLineEl.textContent = scores[i].initials + ": " + scores[i].score;
      scoreListEl.appendChild(scoreLineEl);
    }
}
  
function storeScores() {
    localStorage.setItem("scores", JSON.stringify(scores));
}
  
function getScores() {
    let storedScores = JSON.parse(localStorage.getItem("scores"));
    if (storedScores !== null) {
      scores = storedScores;
    }
}
  
function clearScores() {
    localStorage.clear();
    scoreListEl.innerHTML = "";
}
  
function viewHighScores() {
    getScores();
    buildScoreDisplay();
    if (highScoresEl.style.display === "none") {
      highScoresEl.style.display = "block";
    } else {
      highScoresEl.style.display = "none";
    }
}
  
function restart() {
    highScoresEl.style.display = "none";
    initEl.style.display = "block";
    timer = 100;
    activeQuestion = 0;
    timeEl.textContent = `Time: ${timer}`;
}
  
// function to initialize quiz
function initQuiz() {
    //hide intro
    initEl.style.display = "none";
    // show first question
    questionBlockEl.style.display = "block";
    questionCount = 0;
    startTimer();
    setQuestion(activeQuestion);
}
  
function startTimer() {
    let timerInterval = setInterval(function () {
      timer--;
      timeEl.textContent = `Time: ${timer}`;
  
      if (timer <= 0 || activeQuestion === questions.length) {
        clearInterval(timerInterval);
        questionBlockEl.style.display = "none";
        yesnoEl.style.display = "none";
        finalScoreEl.style.display = "block";
        scoreEl.textContent = timer;
      }
    }, 1000);
}
  
//listeners
startBtnEl.addEventListener("click", initQuiz);
btn1.addEventListener("click", checkAnswer);
btn2.addEventListener("click", checkAnswer);
btn3.addEventListener("click", checkAnswer);
btn4.addEventListener("click", checkAnswer);
submitScoreEl.addEventListener("click", saveScore);
backEl.addEventListener("click", restart);
viewEl.addEventListener("click", viewHighScores);
clearEl.addEventListener("click", clearScores);