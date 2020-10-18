let numberOfPrompt;
let userPrize = 0;
let boxPrize;
let numberOfPocket;
let isPrompt;
let attempt;

let gameAgain = true;
let gameOver = true;
const countMaxNumber = [0, 5, 10, 15, 20, 25];
const countSizeOfPrizes = [
  [100, 50, 25],
  [200, 100, 50],
  [400, 200, 100],
  [800, 400, 200],
  [1600, 800, 400],
];
const maxRound = countMaxNumber.length - 1;
const min = countMaxNumber[0];
let max;

////  Start Game!

const isConfirm = confirm('Do you want to play a Game?');
if (!isConfirm) {
  alert('You did not become a billionaire, but can.');
} else {
  gameFn();
}

/// Function  of Start Game

function gameFn() {
  do {
    gameAgain = true;
    gameOver = true;
    userPrize = 0;
    rouletteGame();
    while (gameAgain === true && gameOver === true) {
      for (let i = 1; i < maxRound; i += 1) {
        // while (gameAgain === true && gameOver === true) {
        console.log(gameAgain, gameOver, attempt);

        if (gameOver && gameAgain) {
          if (
            confirm(`Do you want to continue? (next round${i + 1}/${maxRound})`)
          ) {
            rouletteGame(countMaxNumber[i + 1], countSizeOfPrizes[i]);
          } else {
            alert(
              `Thank you for your participation. (round${
                i + 1
              }) Your prize is: ${userPrize}  $.`,
            );
            alert(
              `(after null next round${
                i + 1
              }) Game over! Thank you! Your prize is: ${userPrize} $.`,
            );

            gameAgain = false;
            gameOver = false;
            attempt = 0;
            break;
          }

          if (i === maxRound - 1) {
            // console.log(`${i}`);
            alert(`Game over5*${i}! Thank you! Your prize is: ${userPrize} $.`);
            // console.log(`Game over5*! Thank you! Your prize is: ${userPrize} $.`);

            gameAgain = false;
            gameOver = false;
            attempt = 0;
            break;
          }
        }
      }
    }
  } while (confirm(`Do you want to play again? (after game over5*)`));
}

/// Function  of  Game

function rouletteGame(
  maxNumber = countMaxNumber[1],
  sizeOfPrizes = countSizeOfPrizes[0],
) {
  attempt = 0;
  const attemptMax = 3;
  max = maxNumber;
  boxPrize = sizeOfPrizes;
  numberOfPocket = Math.round(Math.random() * (max - min) + min);
  console.log(`Roulette pocket number: ${numberOfPocket}`);
  do {
    isPrompt = prompt(
      `Please enteran integer number in range including ${min} and ${max}!\nAttempts left: ${
        attemptMax - attempt
      }\nTotal prize: ${userPrize}$\nPossible prize on current attempt: ${
        boxPrize[0 + attempt]
      }$ `,
    );
    if (isNaN(isPrompt) || isPrompt === '') {
      alert('Is not a number! Please try again!');
      continue;
    }
    if (Number(isPrompt) < min || Number(isPrompt) > max) {
      alert(
        `The entered number ${isPrompt} is not included in the interval from ${min} to ${max}!\nPlease try again!`,
      );
      continue;
    }

    if (isPrompt === null) {
      alert('You did not become a billionaire, but can.');
      alert(
        `(after null isPrompt) Game over! Thank you! Your prize is: ${userPrize} $.`,
      );

      if (confirm(`Do you want to continue? (after null isPrompt)`)) {
        gameFn();
      } else {
        gameAgain = false;
        gameOver = false;
        attempt = 0;
        break;
      }
    }
    numberOfPrompt = Number(isPrompt);
    attempt += 1;
    if (numberOfPrompt === numberOfPocket) {
      switch (attempt) {
        case 1:
          userPrize += boxPrize[0];
          break;
        case 2:
          userPrize += boxPrize[1];
          break;
        case 3:
          userPrize += boxPrize[2];
          break;
      }
      alert(`Congratulation, you won!  Your prize is: ${userPrize} $.`);
      break;
    }
    if (attempt === attemptMax) {
      alert(`Thank you for your participation. Your prize is: ${userPrize} $.`);
      alert(
        `(attemptMax) Game over! Thank you! Your prize is: ${userPrize} $.`,
      );
      if (confirm(`Do you want to continue? (attemptMax)`)) {
        gameFn();
      } else {
        gameAgain = false;
        gameOver = false;
        attempt = 0;
        break;
      }
    }
  } while (
    numberOfPrompt !== numberOfPocket &&
    gameAgain === true &&
    gameOver === true
  );
  return console.log(`Total User Prize: ${userPrize}`);
}
