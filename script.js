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
        // If player won, score increases by 1
        // If player ties, score does not change
        // If player loses, score decreases by 1
        playerScore += playRound(playerSelection, computerSelection);
    }

    // Evaluate player's score after game finishes
    // If positive, player wins
    // If zero, player ties
    // If negative, player loses
    if (playerScore > 0) {
        alert(`After ${numRounds} rounds, you won!`);
    } else if (playerScore === 0) {
        alert(`After ${numRounds} rounds, you tied!`);
    } else {
        alert(`After ${numRounds} rounds, you lost.`);
    }
    
}