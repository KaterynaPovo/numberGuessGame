let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

const compareGuesses = (humanScore, computerScore, secretScore) => {
    secretScore = generateTarget();
    const valueHum = Math.abs(humanScore - secretScore);
    const valueComp = Math.abs(computerScore - secretScore);

    if (valueHum > valueComp) {
        return false;
    } else if (valueHum < valueComp) {
        return true;
    } else if (valueComp === valueHum) {
        return true;
    } else if (humanScore >= 10 || humanScore <= 0) {
        alert('Error! Please enter a value between 0 and 9.');
      }
}

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore +=1;
    } else if (winner === 'computer') {
        computerScore +=1;
    }
}

const advanceRound = () => {
    return currentRoundNumber +=1;
}