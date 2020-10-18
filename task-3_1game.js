let numberOfPrompt;
let userPrize = 0;
let boxPrize;
let numberOfPocket;
let isPrompt;
let attempt;
let totalPrize = 0;
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
let maxRound = countMaxNumber.length - 1;
const min = countMaxNumber[0];
let max;
let i;

////  Start Game!

const isConfirm = confirm('Do you want to play a Game?');

if (!isConfirm) {
  alert('You did not become a billionaire, but can.');
} else {
  gameFn();

  while (confirm(`Do you want to play again?`)) {
    gameFn();
  }
}

console.log(`Total User Prize: ${totalPrize}`);

/// Function  of Start Game

function gameFn() {
  gameAgain = true;
  gameOver = true;
  userPrize = 0;
  i = 0;
  maxRound = countMaxNumber.length - 1;

  rouletteGame();

  if (gameAgain === true && gameOver === true) {
    for (i = 1; i < maxRound; i += 1) {
      if (gameOver && gameAgain) {
        if (confirm(`Do you want to continue?`)) {
          rouletteGame(countMaxNumber[i + 1], countSizeOfPrizes[i]);
        } else {
          alert(
            `Thank you for your participation. Your prize is: ${userPrize} $.`,
          );
          alert(`Game over! Thank you! Your prize is: ${userPrize} $.`);

          totalPrize += userPrize;
          gameAgain = false;
          gameOver = false;
          attempt = 0;
          i = 0;

          return console.log(`User Prize: ${userPrize} $`);
        }

        if (i === maxRound - 1) {
          alert(`Game over! Thank you! Your prize is: ${userPrize} $.`);
          totalPrize += userPrize;
          gameAgain = false;
          gameOver = false;
          attempt = 0;
          i = 0;

          console.log(`User Prize: ${userPrize} $`);
          break;
        }
      }
    }
  }
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

    if (isPrompt === null) {
      alert('You did not become a billionaire, but can.');
      alert(`Game over! Thank you! Your prize is: ${userPrize} $.`);

      if (confirm(`Do you want to continue?`)) {
        totalPrize += userPrize;
        gameAgain = false;
        gameOver = false;
        attempt = 0;
        i = 0;

        console.log(`User Prize: ${userPrize} $`);
        gameFn();
        return;
      } else {
        totalPrize += userPrize;
        gameAgain = false;
        gameOver = false;
        attempt = 0;
        i = 0;
        return console.log(`User Prize: ${userPrize} $`);
      }
    }

    if (attempt === attemptMax) {
      alert(`Thank you for your participation. Your prize is: ${userPrize} $.`);
      alert(` Game over! Thank you! Your prize is: ${userPrize} $.`);
      if (confirm(`Do you want to continue?`)) {
        totalPrize += userPrize;
        gameAgain = false;
        gameOver = false;
        attempt = 0;
        i = 0;

        console.log(`User Prize: ${userPrize} $`);
        gameFn();
        return;
      } else {
        totalPrize += userPrize;
        gameAgain = false;
        gameOver = false;
        attempt = 0;
        i = 0;

        return console.log(`User Prize: ${userPrize} $`);
      }
    }
  } while (
    numberOfPrompt !== numberOfPocket &&
    gameAgain === true &&
    gameOver === true
  );
  return;
}

////////////////////////////////////////////////

// let numberOfPrompt;
// let userPrize = 0;
// let boxPrize;
// let numberOfPocket;
// let isPrompt;
// let attempt;
// let totalPrize = 0;
// let gameAgain = true;
// let gameOver = true;
// const countMaxNumber = [0, 5, 10, 15, 20, 25];
// const countSizeOfPrizes = [
//   [100, 50, 25],
//   [200, 100, 50],
//   [400, 200, 100],
//   [800, 400, 200],
//   [1600, 800, 400],
// ];
// let maxRound = countMaxNumber.length - 1;
// const min = countMaxNumber[0];
// let max;
// let i;

// ////  Start Game!

// const isConfirm = confirm('Do you want to play a Game?');

// if (!isConfirm) {
//   alert('You did not become a billionaire, but can.');
// } else {
//   gameFn();
//   console.log(`Do you want to play again? (after game over5*)`);
//   while (confirm(`Do you want to play again? (after game over5*)`)) {
//     gameFn();
//   }
// }

// console.log(`Total User Prize: ${totalPrize}(gameFn)`);

// /// Function  of Start Game

// function gameFn() {
//   gameAgain = true;
//   gameOver = true;
//   userPrize = 0;
//   i = 0;
//   maxRound = countMaxNumber.length - 1;
//   console.log(`pered for`, gameAgain, gameOver, attempt, i);
//   rouletteGame();

//   if (gameAgain === true && gameOver === true) {
//     for (i = 1; i < maxRound; i += 1) {
//       console.log(gameAgain, gameOver, attempt, i);

//       if (gameOver && gameAgain) {
//         if (
//           confirm(`Do you want to continue? (next round${i + 1}/${maxRound})`)
//         ) {
//           rouletteGame(countMaxNumber[i + 1], countSizeOfPrizes[i]);
//         } else {
//           alert(
//             `Thank you for your participation. (round${
//               i + 1
//             }) Your prize is: ${userPrize}  $.`,
//           );
//           alert(
//             `(after null next round${
//               i + 1
//             }) Game over! Thank you! Your prize is: ${userPrize} $.`,
//           );

//           totalPrize += userPrize;
//           gameAgain = false;
//           gameOver = false;
//           attempt = 0;
//           i = 0;

//           // return;// сразу выкидывает из игры, без вопроса "Do you want to play again?"
//           return console.log(`User Prize: ${userPrize}(round${i + 1})`);
//         }

//         if (i === maxRound - 1) {
//           console.log(`maxRound i=: ${i}`);
//           alert(
//             `Game over5*${i + 1}! Thank you! Your prize is: ${userPrize} $.`,
//           );
//           totalPrize += userPrize;
//           gameAgain = false;
//           gameOver = false;
//           attempt = 0;
//           i = 0;

//           // return// сразу выкидывает из игры, без вопроса "Do you want to play again?"
//           console.log(`User Prize: ${userPrize}(Game over5*)`);
//           break;
//         }
//       }
//     }
//   }
// }

// /// Function  of  Game

// function rouletteGame(
//   maxNumber = countMaxNumber[1],
//   sizeOfPrizes = countSizeOfPrizes[0],
// ) {
//   attempt = 0;
//   const attemptMax = 3;
//   max = maxNumber;
//   boxPrize = sizeOfPrizes;
//   numberOfPocket = Math.round(Math.random() * (max - min) + min);
//   console.log(`Roulette pocket number: ${numberOfPocket}`);
//   do {
//     isPrompt = prompt(
//       `Please enteran integer number in range including ${min} and ${max}!\nAttempts left: ${
//         attemptMax - attempt
//       }\nTotal prize: ${userPrize}$\nPossible prize on current attempt: ${
//         boxPrize[0 + attempt]
//       }$ `,
//     );
//     if (isNaN(isPrompt) || isPrompt === '') {
//       alert('Is not a number! Please try again!');
//       continue;
//     }
//     if (Number(isPrompt) < min || Number(isPrompt) > max) {
//       alert(
//         `The entered number ${isPrompt} is not included in the interval from ${min} to ${max}!\nPlease try again!`,
//       );
//       continue;
//     }

//     numberOfPrompt = Number(isPrompt);
//     attempt += 1;
//     if (numberOfPrompt === numberOfPocket) {
//       switch (attempt) {
//         case 1:
//           userPrize += boxPrize[0];
//           break;
//         case 2:
//           userPrize += boxPrize[1];
//           break;
//         case 3:
//           userPrize += boxPrize[2];
//           break;
//       }
//       alert(`Congratulation, you won!  Your prize is: ${userPrize} $.`);
//       break;
//     }

//     if (isPrompt === null) {
//       alert('You did not become a billionaire, but can.');
//       alert(
//         `(after null isPrompt) Game over! Thank you! Your prize is: ${userPrize} $.`,
//       );

//       if (confirm(`Do you want to continue? (after null isPrompt)`)) {
//         totalPrize += userPrize;
//         gameAgain = false;
//         gameOver = false;
//         attempt = 0;
//         i = 0;

//         console.log(`User Prize: ${userPrize}(attemptMax)`);
//         gameFn();
//         return;
//         break;
//       } else {
//         totalPrize += userPrize;
//         gameAgain = false;
//         gameOver = false;
//         attempt = 0;
//         i = 0;
//         return console.log(`User Prize: ${userPrize}(after null isPrompt)`);
//       }
//       break;
//     }

//     if (attempt === attemptMax) {
//       alert(`Thank you for your participation. Your prize is: ${userPrize} $.`);
//       alert(
//         `(attemptMax) Game over! Thank you! Your prize is: ${userPrize} $.`,
//       );
//       if (confirm(`Do you want to continue? (attemptMax)`)) {
//         totalPrize += userPrize;
//         gameAgain = false;
//         gameOver = false;
//         attempt = 0;
//         i = 0;

//         console.log(`User Prize: ${userPrize}(attemptMax)`);
//         gameFn();
//         return;
//         break;
//       } else {
//         totalPrize += userPrize;
//         gameAgain = false;
//         gameOver = false;
//         attempt = 0;
//         i = 0;

//         return console.log(`User Prize: ${userPrize}(attemptMax)`);
//       }
//       break;
//     }
//   } while (
//     numberOfPrompt !== numberOfPocket &&
//     gameAgain === true &&
//     gameOver === true
//   );
//   return;
// }
