// Array of choice options for game
const choiceArray = ["rock", "paper", "scissors"];


function getComputerChoice() {
    // Get computer's choice by randomly picking a number from 0 - 2
    let randomIndex = Math.floor(Math.random() * 3);
    // Index into choice array using the random number to get what option the computer chooses
    return choiceArray[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Get index of choice player entered
    let playerIndex = choiceArray.indexOf(playerSelection);
    // If index is -1, did not find player's choice so cannot play
    if (playerIndex === -1) {
        return `Not a valid choice, please try again`;
    }
    // Get index of choice computer entered
    let computerIndex = choiceArray.indexOf(computerSelection);

    // Compare index values
    // If both players pick same option, then tie
    if (playerIndex === computerIndex) {
        return `Both players chose ${playerSelection}. Tie!`;
    } // If player picks first item in array and computer picks last item in array, player wins
    else if (playerIndex === 0 && computerIndex === choiceArray.length) {
        return `${playerSelection} beats ${computerSelection}. You win!`;
    } // If it's reversed from previous case, computer wins
    else if (playerIndex === choiceArray.length && computerIndex === 0) {
        return `${computerSelection} beats ${playerSelection}. Sorry, you lose.`;
    } // If player's index is bigger than computer's index, player wins
    else if (playerIndex > computerIndex) {
        return `${playerSelection} beats ${computerSelection}. You win!`;
    } // Otherwise, computer wins
    else {
        return `${computerSelection} beats ${playerSelection}. Sorry, you lose.`;
    }
}