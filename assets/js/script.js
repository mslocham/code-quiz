var questions = ["Commonly used data types DO NOT include:", "The condition in an if/else statement is enclosed with ___", "Arrays in JavaScript can be used to store ___", "String values must be enclosed within ___ when being assigned to variables.", "A very useful tool used during development and debugging for printing content to the debugger is:"];
var correctArr = ["alerts", "parenthesis", "all of the above", "quotes", "console.log"];
var incorrectArr1 = ["strings", "quotes", "numbers and strings", "commas", "JavaScript"];
var incorrectArr2 = ["booleans", "curly brackets", "other arrays", "curly brackets", "terminal/bash"];
var incorrectArr3 = ["numbers", "square brackets", "booleans", "parenthesis", "for loops" ];
var timerEl = document.getElementById("timer");
var taskIdCounter = 0;

function countdown() {
    var timeLeft = 60;
  
    
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
       
      }
    }, 1000);
  }
  


var buttonsEl = document.querySelector(".button-list");
var startButtonEl = document.createElement("button");
startButtonEl.textContent = "Start Quiz";

buttonsEl.appendChild(startButtonEl);

var startTextEl = document.createElement("h1");
startTextEl.textContent = "Let's Start the Quiz!" 
var questionEl = document.querySelector(".inner-content");

questionEl.appendChild(startTextEl);



var beginEl = function() {
    countdown();
    questionEl.textContent="";
    buttonsEl.remove();
    startQuiz();
};

var startQuiz = function() {
var testQuestions = document.querySelector(".content");
var questionField = document.createElement("div");


var questionText = document.createElement("h2");
questionField.appendChild(questionText);
testQuestions.appendChild(questionField);



var buttonOptions = document.createElement("div");
var button1 = document.createElement("button");
var button2 = document.createElement("button");
var button3 = document.createElement("button");
var button4 = document.createElement("button");
button1.className="btn correct";
buttonOptions.appendChild(button1);
buttonOptions.appendChild(button2);
buttonOptions.appendChild(button3);
buttonOptions.appendChild(button4);
testQuestions.appendChild(buttonOptions);




questionText.textContent = questions[taskIdCounter];
button1.textContent = correctArr[taskIdCounter];
button2.textContent = incorrectArr1[taskIdCounter];
button3.textContent = incorrectArr2[taskIdCounter];
button4.textContent = incorrectArr3[taskIdCounter];

button1.addEventListener("click", next);


var next = function() {
  taskIdCounter++;
questionText.textContent = questions[taskIdCounter];
button1.textContent = correctArr[taskIdCounter];
button2.textContent = incorrectArr1[taskIdCounter];
button3.textContent = incorrectArr2[taskIdCounter];
button4.textContent = incorrectArr3[taskIdCounter];

}





};








startButtonEl.addEventListener("click", beginEl);

