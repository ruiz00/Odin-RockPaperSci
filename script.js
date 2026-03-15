function playGame() {
  let humanScore = 0;
  let computerScore = 0;


  function getComputerChoice() {
    const randomNumber = Math.random();
    if (randomNumber < 0.33) {
      return "rock";
    } else if (randomNumber < 0.66) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function getHumanChoice() {
    let choice = prompt("Please enter rock, paper, or scissors:");
    return choice;
  }
  function playRound(humanChoice, computerChoice) {
    
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
  }

  for (let i = 1; i <= 5; i++) {
    console.log(`--- Round ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Score -> Human: ${humanScore}, Computer: ${computerScore}`);
  }

  console.log("--- FINAL RESULT ---");
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Game over! The computer won.");
  } else {
    console.log("The game ended in a draw!");
  }
}

playGame();