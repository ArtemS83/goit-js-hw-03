const min = 0;
let max;
let numberOfPrompt;
let userPrize = 0;
let boxPrize;
let numberOfPocket;
let isPrompt;

/// Function  of  Game
const rouletteGame = function (maxNumber = 5, sizeOfPrizes = [100, 50, 25]) {
  let attempt = 0;
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
      if (confirm(`Do you want to continue?`)) {
        rouletteGame(maxNumber, sizeOfPrizes);
      }
      break;
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

      if (confirm(`Do you want to play again?`)) {
        rouletteGame();
      }
      break;
    }
  } while (numberOfPrompt !== numberOfPocket);
  return console.log(`Total User Prize: ${userPrize}`);
};

////  Start Game!
const isConfirm = confirm('Do you want to play a game?');
if (!isConfirm) {
  alert('You did not become a billionaire, but can.');
} else {
  rouletteGame();

  if (confirm(`Do you want to continue?`)) {
    rouletteGame(10, [200, 100, 50]);
  }

  alert(`Game over! Thank you! Your prize is: ${userPrize} $.`);
}
