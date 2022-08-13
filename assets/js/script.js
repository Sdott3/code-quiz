// var timer = 60;
// var score = 0;

// // Get elements by class or id 
// var question = document.getElementById("questions");
// var choices = Array.from(document.getElementsByClassName("choice-text"));
// var countdown = document.getElementById("timer");


// // questions for quiz 
// var questions = [
//     {
//         question: "Hyper Text Markup Language Stands For?",  
//         answers:["JQuery", "XHTML", "CSS","HTML", ]
//         correctAnswer: "D"
//     },

//     {
//         "Cascading Style sheet stand for?", ["HTML", "JQuery",
//     "CSS", "XML"], "CSS"
//     },
//     new Question(
//         "Whis is a backend language?", ["PHP", "HTML", "React",
//     "All of the above"], "PHP"
//     ),
//     new Question(
//         "Whis is best for Artificial Intelligence?", ["React",
//          "Laravel", "Python", "Sass"], "Python"
//     )
    
// ];


// // Start Game function; click the start button
// function startQuiz() {
//     console.log("startBtn");
//     startButton.classList.add("hide");
// }



// // Select a answer
// function selectAnswer() {

// }


// // Alert if question is right or wrong
// // time is subtracted from the clock


// // Add event listener to start button



// //pseudocode thinking

// //need variables for start, questions, answers, timer, score, and leaderboard

// //global variables

// //Well aware Reddit is not a good source, but using querySelector for everything instead of getElmentById/ClassName, seems to work as needed.
// //https://www.reddit.com/r/javascript/comments/5vyf18/is_there_anything_wrong_with_using_queryselector/
// var secondsLeft = 60;


// var headerEl = document.querySelector("#header")
// var timeEl = document.querySelector("p.time");
// var scoreEl = document.querySelector("#score");
// var questionEl= document.querySelector("#question");
// var questionsEl = document.querySelector("#questions");
// //remember to change one of these to Trivia and not question/questions
// var welcomeEl = document.querySelector("#welcome");
// var rightOrWrongEl = document.querySelector("#rightOrWrong");
// var finalEl = document.querySelector("#final");
// var initialsInput = document.querySelector("#initials");
// var highscoresEl = document.querySelector("#highscores");
// var scoreListEl = document.querySelector("#score-list")
// var viewScrBtn = document.querySelector("#view-scores");
// var scoreList = [];

// //buttons (keeping these global since local scope seems to be causing issues)

// var answer1Btn = document.querySelector("#answer1");
// var answer2Btn = document.querySelector("#answer2");
// var answer3Btn = document.querySelector("#answer3");
// var answer4Btn = document.querySelector("#answer4");
// var startBtn = document.querySelector("#start");
// var answerBtn = document.querySelectorAll("button.answerBtn");
// var submitScrBtn = document.querySelector("#submit-score")
// var viewScrBtn = document.querySelector("#view-scores");
// var backBtn = document.querySelector("#back");

// //questions

// var questions = [
//     {
//     question: "What is an example of Camel-case?",
//     answers: ["1. camelcase", "2. Camelcase", "3 camelCase", "4. 🐪💼"],
//     correctAnswer: "2"
//     },
//     {
//     question: "what Does HTML stand for?",
//     answers: ["1. HyperText Markup language", "2. High-Tech Media Link", "3. Home Tab Marker Legend", "4 Harry Truman Makes Lasagna"],
//     correctAnswer: "0"
//     },
//     {
//     question: "What special character is allowed to be used when naming variables?",
//     answers: ["1. #", "2. *", "3. $", "4. @"],
//     correctAnswer: "2"
//     },
//     {
//     question: "What word usually starts a conditional statement in JavaScript?",
//     answers: ["1. When", "2. If", "3. How", "4. Activate Conditional"],
//     correctAnswer: "1"
//     },
//     {
//     question: "What is considered a proper Boolean value?",
//     answers: ["1. 45", "2. NULL", "3. The value of a very fit ghost", "4. TRUE"],
//     correctAnswer: "3"
//     }
// ];

// //source that helped format questions: https://stackoverflow.com/questions/37252041/storing-quiz-questions-in-array-of-objects

// //clock

// //WHEN all questions are answered or the timer reaches 0
// //THEN the game is over

// function countDown() {
//     var timerInterval = setInterval(function () {
//         secondsLeft--;
//         timeEl.textContent = `【┘】:${secondsLeft}s`;

//         if (secondsLeft === 0 || questionCount === questions.length) {
//             clearInterval(timerInterval);
//             questionsEl.style.display = "none";
//             finalEl.style.display = "block";
//             scoreEl.textContent = secondsLeft;
//             }
//         }, 1000);
// }

// //Start Game Function 

// //WHEN I click the start button
// //THEN a timer starts and I am presented with a question

// function startGame() {
//     welcomeEl.style.display = "none";
//     headerEl.style.display = "none";
//     questionsEl.style.display = "block";
//     questionCount = 0;

//     countDown();
//     setQuestion(questionCount);
// }



// function setQuestion(id) {
//     if(id < questions.length) {
//     questionEl.textContent = questions[id].question;
//     answer1Btn.textContent = questions[id].answers[0];
//     answer2Btn.textContent = questions[id].answers[1];
//     answer3Btn.textContent = questions[id].answers[2];
//     answer4Btn.textContent = questions[id].answers[3];
//   }
// }

// //Right or Wrong consequences

// function checkAnswers(event) {
//     event.preventDefault();

//     rightOrWrongEl.style.display = "block";
//     var p = document.createElement("p");
//     rightOrWrongEl.appendChild(p);

//     setTimeout(function () {
//         p.style.display = "none";
//     }, 1000);


// //WHEN I answer a question incorrectly
// //THEN time is subtracted from the clock

// if (questions[questionCount].correctAnswer === event.target.value) {
//     p.textContent = "You Got It!";
    
// } else if (questions[questionCount].correctAnswer !==event.target.value) {
//     secondsLeft = secondsLeft - 10;
//     p.textContent = "wrong!"
// }

// //WHEN I answer a question
// //THEN I am presented with another question

// if (questionCount < questions.length) {
//     questionCount++;
// }
// setQuestion(questionCount);
// };

// //leaderboard

// //WHEN the game is over
// //THEN I can save my initials and score

// function addScore(event) {
//     event.preventDefault();

//     finalEl.style.display = "none";
//     highscoresEl.style.display = "block";

//     var init = initialsInput.value.toUpperCase();
//     scoreList.push({ initials: init, score: secondsLeft });


//     scoreList = scoreList.sort((a, b) => {
//         if (a.score < b.score) {
//           return 1;
//         } else {
//           return -1;
//         }
//       });

//     scoreListEl.innerHTML="";
//     for (var i = 0; i < scoreList.length; i++) {
//         var li = document.createElement("li");
//         li.textContent = `${scoreList[i].initials}: ${scoreList[i].score}`;
//         scoreListEl.append(li);
//     }

    
//     storeScores();
//     displayScores();
// }

// function storeScores() {
//     localStorage.setItem("scoreList", JSON.stringify(scoreList));
// }

// function displayScores() {

//     var storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

//     if (storedScoreList !== null) {
//         scoreList = storedScoreList;
//     }
// }


// //button functions

// startBtn.addEventListener("click", startGame);

// answerBtn.forEach(item => {
//     item.addEventListener("click", checkAnswers);

// submitScrBtn.addEventListener("click", addScore);
// })

// backBtn.addEventListener("click", function() {
//     highscoresEl.style.display = "none";
//     welcomeEl.style.display = "block";
//     headerEl.style.display = "block";
//     secondsLeft = 60;
//     timeEl.textContent = `【┘】:${secondsLeft}s`;
// })

// viewScrBtn.addEventListener("click", function () {
//     if (highscoresEl.style.display === "none") {
//         highscoresEl.style.display = "block";
//         welcomeEl.style.display = "none";
//         headerEl.style.display = "none";
//     } else if (highscoresEl.style.display === "block") {
//         highscoresEl.style.display = "none";
//     } else {
//         return alert("Nobody here yet");
//     }
// });