let wrongGuessNumber = 0;

function general() {
    document.querySelector("#mainSec").style = "display : none;";
    document.querySelector("footer").style = "display : none;";
    document.querySelector("h1").style = "display : none;";
    document.querySelector("h2").style = "display : none;";
    document.querySelector("h3").style = "display : flex;";

}

function backFunction() {
    window.location.reload();
}


function easyGame() {
    general();
    document.querySelector("#easyGuess").style = "display : flex;";
    document.querySelector("#easyButton").style = "display : flex;";
    document.querySelector("#firstPopSec p").style = "display : flex;";
    document.querySelector("#secondPopSec p").style = "display : none;";
    document.querySelector("#thirdPopSec p").style = "display : none;";
    document.querySelector("#easyBack").style = "display : flex;";
    document.body.style.backgroundImage = "url('pop2.jpg')";

}
function mediumGame() {
    general();
    document.querySelector("#mediumGuess").style = "display : flex;";
    document.querySelector("#mediumButton").style = "display : flex;";
    document.querySelector("#firstPopSec p").style = "display : none;";
    document.querySelector("#secondPopSec p").style = "display : flex;";
    document.querySelector("#thirdPopSec p").style = "display : none;";
    document.querySelector("#mediumBack").style = "display : flex;"
    document.body.style.backgroundImage = "url('amazing.jpg')";
}
function hardGame() {
    general();
    document.querySelector("#hardGuess").style = "display : flex;";
    document.querySelector("#hardButton").style = "display : flex;";
    document.querySelector("#secondPopSec p").style = "display : none;";
    document.querySelector("#firstPopSec p").style = "display : none;";
    document.querySelector("#thirdPopSec p").style = "display : flex;";
    document.querySelector("#hardBack").style = "display : flex;"
    document.body.style.backgroundImage = "url('aside.jpg')";
}

let randomIndexEasy = parseInt(Math.random() * 100);
let randomIndexMedium = parseInt(Math.random() * 500);
let randomIndexHard = parseInt(Math.random() * 1000);


function easyFunction() {

    let name = parseInt(document.querySelector("#easyGuess").value);
    console.log(randomIndexEasy);

    if (name === randomIndexEasy) {
        alert("CongRatulations You Won! Your Wrong Guess are " + wrongGuessNumber);
        wrongGuessNumber = 0;           //Random number Generate Again
    }
    else {
        if (name > randomIndexEasy) {
            alert("Too Big Value ");
            wrongGuessNumber++;     //Attempts wrong

        }
        else if (name < randomIndexEasy) {
            alert("You Are So Far Keep Going");
            wrongGuessNumber++;
        };
    };
};

function mediumFunction() {

    let name = parseInt(document.querySelector("#mediumGuess").value);
    console.log(randomIndexMedium);

    if (name === randomIndexMedium) {
        alert("CongRatulations You Won Medium Battle! Your Wrong Guess are " + wrongGuessNumber);
        wrongGuessNumber = 0;
    }
    else {
        if (name > randomIndexMedium) {
            alert("Too big VAlue");
            wrongGuessNumber++;
        }
        else if (name < randomIndexMedium) {
            alert("You are so Far Keep Going");
            wrongGuessNumber++;
        };
    };
};

function hardFunction() {

    let name = parseInt(document.querySelector("#hardGuess").value);
    console.log(randomIndexHard);

    if (name === randomIndexHard) {
        alert("CongRatulations you have Won Hardest Battle! Your Wrong Guess are " + wrongGuessNumber);
        wrongGuessNumber = 0;

    }
    else {
        if (name > randomIndexHard) {
            alert("too big VAlue");
            wrongGuessNumber++;
        }
        else if (name < randomIndexHard) {
            alert("You are So Far Keep Going");
            wrongGuessNumber++;
        };
    };
};