let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let errorMsg = document.getElementById('error');

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (num1, num2) => {
  return Math.abs(num1 - num2);
}

const compareGuesses = (humanGuess, computerGuess, targetNum) => {
  if (humanGuess > 9 || humanGuess < 0) {
    errorMsg.textContent = 'Choose a number between 0 and 9 only!!!';
  } else {
  if(getAbsoluteDistance(humanGuess, targetNum) < getAbsoluteDistance(computerGuess, targetNum)) {
    return true;
  } else {
    return false;
  }
}
}

const updateScore = (winner) => {
  if(winner === 'human') {
    humanScore++;
  } else if(winner === 'computer') {
    computerScore++;
  }
}

const advanceRound = () => {
  currentRoundNumber++;
}
