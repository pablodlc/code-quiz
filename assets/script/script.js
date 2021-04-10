var body = document.body;
// Adding event listener to #startBtn
document.querySelector("#startBtn").addEventListener("click", startQuiz);
// declaring removeEl is #removeMe 
var removeEl = document.querySelector("#removeMe");


var questions = [
    ["Commonly used data types do NOT include:", "strings", "booleans", "alerts", "numbers"],
    ["The condition in an if/else statement is enclosed with:", "quotes", "curly brackets", "parenthesis", "square brackets"],
    ["Arrays in JavaScipt can be used to store:", "numbers and strings", "other arrays", "booleans", "all of the above"],
    ["String values must be enclosed within __________ when being assigned to variables.", "commas", "curly brackets", "quotes", "parenthesis"],
    ["A very useful tool used during development and debugging for printing content to the debugger is:", "JavaScript", "terminal/bash", "for loops", "console log"],
];




function startQuiz() {
    removeEl.remove();

    alert([questions[0][0]] + [questions[0][3]]);

    for (var i = 0; i < questions.length; i++) {
        var htmlEl = [];
        var questionsLength = questions[i].length;
        // console.log(questions[i][0]);

        var j = 0;
        while (j < 5) {
            var whileEl = [questions[i][j]];
            htmlEl = [...whileEl];


            console.log(htmlEl);
            j++;
        }

        // for (var j = 1; j < questionsLength; j++) {

        //     var btnA = questions[i][j];
        //     console.log(btnA);

        //     console.log("B. " + questions[i][j + 2]);

        //     console.log("C. " + questions[i][j + 3]);

        //     console.log("D. " + questions[i][j + 4]);
        i++;
    }
}
// }
