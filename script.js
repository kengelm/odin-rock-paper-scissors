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
        alert(`Not a valid choice, you lose`);
        return -1;
    }
    // Get index of choice computer entered
    let computerIndex = choiceArray.indexOf(computerSelection);

    // Compare index values
    if (playerIndex === computerIndex) {
        alert(`Both players chose ${playerSelection}. Tie!`);
        return 0;
    } else if ((computerIndex + 1) % 3 === playerIndex) {
        alert(`${playerSelection[0].toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}. You win!`);
        return 1;
    } else {
        alert(`${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}. Sorry, you lose.`);
        return -1;
    }
}

function declareWinner(playerScore, numRounds) {
    if (playerScore > 0) {
        alert(`After ${numRounds} rounds, you won!`);
    } else if (playerScore === 0) {
        alert(`After ${numRounds} rounds, you tied!`);
    } else {
        alert(`After ${numRounds} rounds, you lost.`);
    } 
}

function playGame() {
    // Initialize player's score, player's selection, computer's selection, and number of rounds
    let playerScore = 0;
    let playerSelection;
    let computerSelection;
    const numRounds = 5;

    // Play game
    for (let i = 0; i < numRounds; i++) {
        // Ask player what they choose and make it lowercase
        playerSelection = prompt("What do you pick?", "").toLowerCase();
        // Get what computer chooses
        computerSelection = getComputerChoice();
        // Play round and get score
        playerScore += playRound(playerSelection, computerSelection);
    }

    declareWinner(playerScore, numRounds);
   
}

playGame();