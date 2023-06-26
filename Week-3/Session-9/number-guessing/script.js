"use strict";

const playGuessingGame = function (numToGuess, totalGuesses = 10) {
  let number;
  let count = 0;
  // to show prompt till either number matches or tries exceed
  while (totalGuesses > 0 && +number !== numToGuess) {
    if (!number) {
      totalGuesses = totalGuesses - 1;
      count++;
      number = prompt("Enter a number between 1 and 100.");
    }
    if (+number < numToGuess) {
      totalGuesses = totalGuesses - 1;
      count++;
      number = prompt("X is too small. Guess a larger number.");
    }
    if (+number > numToGuess) {
      totalGuesses = totalGuesses - 1;
      count++;
      number = prompt("X is too large. Guess a smaller number.");
    }
    if (isNaN(number)) {
      number = prompt("Please enter a number.");
    }
  }

  // return the number of tries at which correct answer was given
  if (+number === numToGuess) {
    return count;
  }

  // return 0 if correct answer was not given and tries got over
  if (totalGuesses <= 0) {
    return 0;
  }
};

console.log(playGuessingGame(7, 3));
