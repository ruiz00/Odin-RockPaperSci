// Global variables for scores
let humanScore = 0;
let computerScore = 0;
const winningScore = 5;

// DOM Elements
const roundResultDiv = document.querySelector("#round-result");
const humanScoreSpan = document.querySelector("#human-score");
const computerScoreSpan = document.querySelector("#computer-score");
const finalWinnerH2 = document.querySelector("#final-winner");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice) {
  // Stop the game if someone already won
  if (humanScore === winningScore || computerScore === winningScore) return;

  const computerChoice = getComputerChoice();
  let message = "";

  if (humanChoice === computerChoice) {
    message = `It's a tie! Both chose ${humanChoice}.`;
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    message = `You win the round! ${humanChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    message = `You lose the round! ${computerChoice} beats ${humanChoice}.`;
  }

  // Update the UI
  roundResultDiv.textContent = message;
  humanScoreSpan.textContent = humanScore;
  computerScoreSpan.textContent = computerScore;

  checkGameOver();
}

function checkGameOver() {
  if (humanScore === winningScore) {
    finalWinnerH2.textContent = "Victory! You reached 5 points first!";
    finalWinnerH2.style.color = "green";
  } else if (computerScore === winningScore) {
    finalWinnerH2.textContent = "Game Over! The computer reached 5 points.";
    finalWinnerH2.style.color = "red";
  }
}

// Event Listeners for Buttons
document.querySelector("#rock").addEventListener("click", () => playRound("rock"));
document.querySelector("#paper").addEventListener("click", () => playRound("paper"));
document.querySelector("#scissors").addEventListener("click", () => playRound("scissors"));