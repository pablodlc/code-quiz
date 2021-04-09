var timer = 75;
document.querySelector(".timer").textContent = timer;

var body = document.body;
var removeEl = document.querySelector("#removeMe");
var hAndSEl = document.querySelector(".hideAndSeek");


function clearPage() {
    // Removing existing elements
    removeEl.remove();
    hAndSEl.style = "visibility: visible";
}

function right() {
    timer = timer + 10;
    document.querySelector(".timer").textContent = timer;
}

function wrong() {
    timer = timer - 10;
    if (timer <= 0) {
        var hiScore = confirm("You lost and the browser broke my fourth wall.\nPress OK to see the High Scores");
        if (hiScore) {
            alert("This is the HiScore page. It was programatically updated by manipulating the DOM using JavaScript. It's retro-chic, kitcshy, and fun. It's like John Waters took Shigeru Miyamoto out for a night on the town, watching Jeopardy! on the bar's TVs and playing a sticky Trivial Pursuit board game, and a divine hand reached out and smacked Shigeru upside the head in that too dark Baltimore brewery.  He pulled out his laptop and there was born what you see here; a master's magnum opus HiScores page.")
        }

        location.reload();
    }
    document.querySelector(".timer").textContent = timer;
}


















// Adding event listeners
// document.querySelector(btnA).addEventListener("click", function() {
//     console.log("A");
// });

// document.querySelector(btnB).addEventListener("click", function() {
//     console.log("B");
// });

// document.querySelector(btnC).addEventListener("click", function() {
//     console.log("C");
// });
// document.querySelector(btnD).addEventListener("click", function() {
//     console.log("D");
// })