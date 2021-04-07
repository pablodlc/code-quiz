var timer = 0;

var body = document.body;
var removeEl = document.querySelector("#removeMe");


function startQuiz() {
    // Removing existing elements and image
    removeEl.remove();
}

// For reference from first try
// function createGameScreen() {
//     // 
    
//     // Creating first question #homescreen HTML w/ style
//     var columnEl = document.createElement("img");
//     columnEl.setAttribute("src", "assets/images/column.jpg");
//     document.querySelector(".flex-item").appendChild(columnEl);

//     var questionEl = document.createElement("p");
//     questionEl.textContent = "Commonly used data types DO NOT include:";
//     document.querySelector(".flex-item").appendChild(questionEl);


// }