// Array of choice options for game
const choiceArray = ["rock", "paper", "scissors"];

// Get computer's choice by randomly picking a number from 0 - 2
// Then index into choice array using the random number to get what option the computer chooses
function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * 3);
    return choiceArray[randomIndex];
}