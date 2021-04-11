var body = document.body;

// this to target #removeMe in HTML in order to remove from DOM
var removeEl = document.querySelector("#removeMe");
// this to have startquiz() fire when the user clicks #startBtn
document.querySelector("#startBtn").addEventListener("click", startQuiz);
// this is the timer, defaulting to 75
var timer = 75;
// this to use as an iterator placeholder in a loop
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
    //     {
    //         question: "Arrays in JavaScipt can be used to store:",
    //         answerA: "numbers and strings",
    //         answerB: "other arrays",
    //         answerC: "booleans",
    //         answerD: "all of the above",
    //         correct: "all of the above"
    //     },
    //     {
    //         question: "String values must be enclosed within __________ when being assigned to variables.",
    //         answerA: "commas",
    //         answerB: "curly brackets",
    //         answerC: "quotes",
    //         answerD: "parenthesis",
    //         correct: "quotes"
    //     },
    //     {
    //         question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    //         answerA: "JavaScript",
    //         answerB: "terminal/bash",
    //         answerC: "for loops",
    //         answerD: "console log",
    //         correct: "for loops"
    //     },
];

// this for shorthand later for readability
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
    // var htmlEl = [];
    // // this to use currentQuestion as the placeholder in the iterator to follow
    // var questionsLength = questions[currentQuestion].length;

    for (var i = 0; i < questions.length; i++) {

        var questionString = questions[i].question;
        h2El.textContent = questionString;
        body.appendChild(h2El);

        var btnAString = questions[i].answerA;
        btnAEl.textContent = "A. " + btnAString;
        // this to set class "quizButton" on all buttons in the quiz; using same syntax on following three buttons.
        btnAEl.className = "quizButton";
        body.appendChild(btnAEl);

        var btnBString = questions[i].answerB;
        btnBEl.textContent = "B. " + btnBString;
        btnBEl.className = "quizButton";
        body.appendChild(btnBEl);

        var btnCString = questions[i].answerC;
        btnCEl.textContent = "C. " + btnCString;
        btnCEl.className = "quizButton";
        body.appendChild(btnCEl);

        var btnDString = questions[i].answerD;
        btnDEl.textContent = "D. " + btnDString;
        btnDEl.className = "quizButton";
        body.appendChild(btnDEl);

        timerEl.textContent = "TIME: " + timer;
        body.appendChild(timerEl)

        quizMessageEl.textContent = "Click on your answer or type A, B, C, or D on your keyboard!";
        body.appendChild(quizMessageEl);

        userAnswer();


        i++;
    }
}

function userAnswer() {
    alert("BOOM!");
    // document.querySelectorAll(".quizButton").answer.addEventListener("click", function () {
    //     alert("BOOM!");
    // });
}

