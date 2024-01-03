`use strict`;

// Declaring constants
const again = document.querySelector(`.again`);
const number = document.querySelector(`.number`);
const check = document.querySelector(`.check`);
const message = document.querySelector(`.message`);
const score1 = document.querySelector(`.score`);
const highscore = document.querySelector(`.highscore`);

// functions
const displayMessage = function (displayMessage) {
  message.textContent = displayMessage;
};
const displayScore = function (displayScore) {
  score1.textContent = displayScore;
};
const displayHighScore = function (highScore) {
  highscore.textContent = highScore;
};
// Game logic

// Game Init
let score, playing, randomNumber, guess;
let highScoreNum = 0;

function gameInit() {
  score = 15;
  playing = true;
  displayScore(score);
  displayMessage(`Start guessing...`);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  guess = Number(document.querySelector(`.guess`).value);
  console.log(randomNumber);
}

gameInit();

function checkClick() {
  console.log(randomNumber); // 10
  guess = Number(document.querySelector(`.guess`).value); // 15
  console.log(guess);
  playing = true;
  // console.log(playing);
  if (playing) {
    if (document.querySelector(`.guess`).value === ``) {
      displayMessage(`Input Number`);
    } else if (guess > 20 || guess < 1) {
      displayMessage(`Select between 1 & 20`);
    }

    // when guess !== randomNumber
    else if (guess !== randomNumber && guess < 21 && guess > 0) {
      if (score > 1) {
        let alertMessage =
          guess > randomNumber
            ? `Wrong. Try a Lower Number`
            : `Wrong. Try a Higher Number`;
        displayMessage(alertMessage);
        score--;
        displayScore(score);
      } else {
        displayMessage(`Game Over`);

        score = 0;
        displayScore(score);
      }
    } else if (guess === randomNumber) {
      console.log(guess, randomNumber);

      displayMessage(`You guessed right🎉`);
      document.querySelector(`body`).style.backgroundColor = `Green`;
      document.querySelector(`.number`).style.width = `30rem`;
      document.querySelector(`.number`).textContent = randomNumber;
      if (score > highScoreNum) {
        highScoreNum = score;
        displayHighScore(highScoreNum);
      }

      // check.addEventListener(`click`, () => {
      //   displayMessage(`Click again to play another round`);
      //   displayScore(score);
      // });
    }
  }
}

check.addEventListener(`click`, checkClick);

again.addEventListener(`click`, gameInit);
