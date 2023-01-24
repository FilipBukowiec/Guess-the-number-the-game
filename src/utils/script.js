let secretNumber = Math.trunc(Math.random() * 100 + 1);
const check = document.querySelector('.check');
const tryAgain = document.querySelector('.tryAgain');
const highscoreSpan = document.querySelector('.highscore');
const info = document.querySelector(".info");
const scoreSpan = document.querySelector('.score');
const win = "👏 You won the game";
const lost = "😢 You lost the game";
const boxNumber = document.querySelector(".secretNumber");


let score = 10;
let highscore = 0;


scoreSpan.textContent = score;

const number = document.querySelector('.secretNumber');

console.log(secretNumber, typeof secretNumber);


check.addEventListener('click', function () {
    const inputValue = Number(document.querySelector('.gameInput').value);
    console.log(inputValue, typeof inputValue);

    if (!inputValue) {
        info.textContent = "🖊 Please fill in the input field to start the game"
    }

    else if (secretNumber === inputValue) {
        info.textContent = win;
        document.querySelector("body").style.backgroundColor = "#60b347";
        boxNumber.style.backgroundColor = "gold";
        number.textContent = secretNumber;
    if (score > highscore) {
        highscoreSpan.textContent = score;
    };


    }
    else if (secretNumber > inputValue) {
        if (score > 1) {
            info.textContent = "⬇ The number is too low";
            score = score -1;
            scoreSpan.textContent = score;
        }    
        else {
            info.textContent = lost;
            scoreSpan.textContent = 0;
            document.querySelector("body").style.backgroundColor = "red";
        }
    }

    else if (inputValue > secretNumber) {
        if (score>1) {
        info.textContent = "⬆ The number is too high";
        score = score -1;
        scoreSpan.textContent = score;
    }
    else{
        info.textContent = lost;
        scoreSpan.textContent = 0;
        document.querySelector("body").style.backgroundColor = "red";
    }

}
})
;

tryAgain.addEventListener('click', function() {
    score = 10;
    scoreSpan.textContent = score;
    secretNumber = Math.trunc(Math.random() * 100 + 1);
    info.textContent = "🖊 Please fill in the input field to start the game";
    number.textContent = "?";
    document.querySelector('.gameInput').value = "";
    document.querySelector('body').style.backgroundColor= "#7d94fe";

})