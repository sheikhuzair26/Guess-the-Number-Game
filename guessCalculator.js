
let background = document.body.style.backgroundImage;

function easyGame() {
    document.querySelector("#easyGuess").style = "display : flex;";
    document.querySelector("#easyButton").style = "display : flex;";
    document.querySelector("#mainSec").style = "display : none;";
    document.querySelector("footer").style = "display : none;";
    document.querySelector("h1").style = "display : none;";
    document.querySelector("h2").style = "display : none;";
    document.querySelector("h3").style = "display : flex;";

      background = "url('pop2.jpg')";
}
function mediumGame() {
    document.querySelector("#mediumGuess").style = "display : flex;";
    document.querySelector("#mediumButton").style = "display : flex;";
    document.querySelector("#mainSec").style = "display : none;";
    document.querySelector("footer").style = "display : none;";
    document.querySelector("h1").style = "display : none;";
    document.querySelector("h2").style = "display : none;";
    document.querySelector("h3").style = "display : flex;";

    background = "url('amazing.jpg')";
}
function hardGame() {
    document.querySelector("#hardGuess").style = "display : flex;";
    document.querySelector("#hardButton").style = "display : flex;";
    document.querySelector("#mainSec").style = "display : none;";
    document.querySelector("footer").style = "display : none;";
    document.querySelector("h1").style = "display : none;";
    document.querySelector("h2").style = "display : none;";
    document.querySelector("h3").style = "display : flex;";

    background = "url('aside.jpg')";
}

let randomIndexEasy = parseInt(Math.random() * 100);
let randomIndexMedium = parseInt(Math.random() * 500);
let randomIndexHard = parseInt(Math.random() * 1000);


function easyFunction() {

    let name = document.querySelector("#easyGuess").value;

    console.log(randomIndexEasy);

    if (name == randomIndexEasy) {
        alert("CongRatulations You Won ");
    }
    else {
        if (name > randomIndexEasy) {
            alert("Too Big Value ");
        }
        else if (name < randomIndexEasy) {
            alert("You Are So Far Keep Going");
        };
    };
};


function mediumFunction() {

    let name = document.querySelector("#mediumGuess").value;

    console.log(randomIndexMedium);

    if (name == randomIndexMedium) {
        alert("CongRatulations You Won Medium Battle ");
    }
    else {
        if (name > randomIndexMedium) {
            alert("Too big VAlue");
        }
        else if (name < randomIndexMedium) {
            alert("You are so Far Keep Going");
        };
    };
};

function hardFunction() {

    let name = document.querySelector("#hardGuess").value;

    console.log(randomIndexHard);

    if (name == randomIndexHard) {
        alert("CongRatulations you have Won Hardest Battle");
    }
    else {
        if (name > randomIndexHard) {
            alert("too big VAlue");
        }
        else if (name < randomIndexHard) {
            alert("You are So Far Keep Going");
        };
    };
};