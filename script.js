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
        alert(`Both players chose ${playerSelection}. Tie!`);
        return 0;
    } // If player picks first item in array and computer picks last item in array, player wins
    else if (playerIndex === 0 && computerIndex === choiceArray.length - 1) {
        alert(`${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}. You win!`);
        return 1;
    } // If it's reversed from previous case, computer wins
    else if (playerIndex === choiceArray.length - 1 && computerIndex === 0) {
        alert(`${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}. Sorry, you lose.`);
        return -1;
    } // If player's index is bigger than computer's index, player wins
    else if (playerIndex > computerIndex) {
        alert(`${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}. You win!`);
        return 1;
    } // Otherwise, computer wins
    else {
        alert(`${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}. Sorry, you lose.`);
        return -1;
    }
}

function playGame() {
    let playerScore = 0;
    let playerSelection;
    let computerSelection;
    const numRounds = 5;
    for (let i = 0; i < numRounds; i++) {
        playerSelection = prompt("What do you pick?", "").toLowerCase();
        computerSelection = getComputerChoice();
        playerScore += playRound(playerSelection, computerSelection);
    }

    if (playerScore > 0) {
        alert(`After ${numRounds} rounds, you won!`);
    } else if (playerScore < 0) {
        alert(`After ${numRounds} rounds, you lost.`);
    } else {
        alert(`After ${numRounds} rounds, you tied!`);
    }
    
}