var body = document.body;

// this to target #removeMe in HTML in order to remove from DOM
var removeEl = document.querySelector("#removeMe");
// this to have startquiz() fire when the user clicks #startBtn
document.querySelector("#startBtn").addEventListener("click", startQuiz);
// this is the timer, defaulting to 75
var timer = 75;
// this to use as an iterator placeholder for the questions
var currentQuestion = 0;

// This is the text that will be diplayed on the DOM, separated as objects in an array to grab in a later function
var questions = [
    {
        question: "Commonly used data types do NOT include:",
        answerA: "strings",
        answerB: "booleans",
        answerC: "alerts",
        answerD: "numbers",
        correct: "alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with:",
        answerA: "quotes",
        answerB: "curly brackets",
        answerC: "parenthesis",
        answerD: "square brackets",
        correct: "parenthesis"
    },
    {
        question: "Arrays in JavaScipt can be used to store:",
        answerA: "numbers and strings",
        answerB: "other arrays",
        answerC: "booleans",
        answerD: "all of the above",
        correct: "all of the above"
    },
    {
        question: "String values must be enclosed within __________ when being assigned to variables.",
        answerA: "commas",
        answerB: "curly brackets",
        answerC: "quotes",
        answerD: "parenthesis",
        correct: "quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answerA: "JavaScript",
        answerB: "terminal/bash",
        answerC: "for loops",
        answerD: "console log",
        correct: "for loops"
    },
];

// this for shorthand later for readability
var quizEl = document.createElement("div");
var h2El = document.createElement("h2");
var btnAEl = document.createElement("button");
var btnBEl = document.createElement("button");
var btnCEl = document.createElement("button");
var btnDEl = document.createElement("button");
var timerEl = document.createElement("h3");
var quizMessageEl = document.createElement("h4");



// when user clicks #startBtn, 
function startQuiz() {
    // this removes removeEl from the DOM
    removeEl.remove();
    // this calls a function to generate the content displayed on the DOM
    generateHTML();
}

// this to generate the HTML elements to display on the DOM
function generateHTML() {

    if (timer <= 0) {
        gameOver();
    }
    if (currentQuestion > 4) {
        gameOver();
    }
    else {

        // this to generate the question property value as an <h2> El
        var questionString = questions[currentQuestion].question;
        h2El.textContent = questionString;
        body.appendChild(quizEl);
        quizEl.appendChild(h2El);

        // this is make the quiz buttons, grabbing the answers as the button text. Repeating below for next three buttons.
        var btnAString = questions[currentQuestion].answerA;
        btnAEl.textContent = "A. " + btnAString;
        // this to set class "quizButton" on all buttons in the quiz; using same syntax on following three buttons.
        btnAEl.className = "quizButton";
        // this to give each button in the quiz a unique id
        btnAEl.id = btnAString;
        // This makes the click event, passing the current id as an arguement. Repeat three times below.
        btnAEl.onclick = function (event) {
            userAnswer(this.id);
        }
        quizEl.appendChild(btnAEl);

        var btnBString = questions[currentQuestion].answerB;
        btnBEl.textContent = "B. " + btnBString;
        btnBEl.className = "quizButton";
        btnBEl.id = btnBString;
        btnBEl.onclick = function (event) {
            userAnswer(this.id);
        }
        quizEl.appendChild(btnBEl);

        var btnCString = questions[currentQuestion].answerC;
        btnCEl.textContent = "C. " + btnCString;
        btnCEl.className = "quizButton";
        btnCEl.id = btnCString;
        btnCEl.onclick = function (event) {
            userAnswer(this.id);
        }
        quizEl.appendChild(btnCEl);

        var btnDString = questions[currentQuestion].answerD;
        btnDEl.textContent = "D. " + btnDString;
        btnDEl.className = "quizButton";
        btnDEl.id = btnDString;
        btnDEl.onclick = function (event) {
            userAnswer(this.id);
        }
        quizEl.appendChild(btnDEl);

        timerEl.textContent = "TIME: " + timer;
        body.appendChild(timerEl)

        quizMessageEl.textContent = "Click on your answer now!";
        quizEl.appendChild(quizMessageEl);
    }
}

function userAnswer(clicked) {
    var answer = clicked;

    if (answer === questions[currentQuestion].correct) {
        timer = timer + 10;
        quizMessageEl.textContent = "Right!";
        quizEl.appendChild(quizMessageEl);
        currentQuestion++;
        // generateHTML();
    }
    else {
        timer = timer - 10;
        quizMessageEl.textContent = "Wrong.";
        quizEl.appendChild(quizMessageEl);
        currentQuestion++;

    }


    generateHTML();
}

function gameOver() {
    let hiScores = confirm("Game Over! Would you like to see the hi-scores?");
    // if (hiScores)
}

