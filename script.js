const message = document.querySelector(".message");
const playerScore = document.querySelector(".player");
const roundNumber = document.querySelector(".round");
const computerScore = document.querySelector(".computer");

function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const i = Math.round(Math.random() * 2);
  return choices[i];
}
let wins = 0;
let losts = 0;
let draws = 0;
let round = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "ROCK") {
    switch (computerSelection) {
      case "ROCK":
        draws++;
        return "Tie game";

      case "PAPER":
        losts++;
        return "You lose PAPER beats ROCK";

      case "SCISSORS":
        wins++;
        return "You win ROCK beats SCISSORS";

      default:
        return "Your choice is not defined";
    }
  } else if (playerSelection === "PAPER") {
    switch (computerSelection) {
      case "PAPER":
        draws++;
        return "Tie game";

      case "SCISSORS":
        losts++;
        return "You lose SCISSORS beats PAPER";

      case "ROCK":
        wins++;
        return "You win PAPER beats ROCK";

      default:
        return "Your choice is not defined";
    }
  } else if (playerSelection === "SCISSORS") {
    switch (computerSelection) {
      case "SCISSORS":
        draws++;
        return "Tie game";

      case "ROCK":
        losts++;
        return "You lose ROCK beats SCISSORS";

      case "PAPER":
        wins++;
        return "You win SCISSORS beats PAPER";

      default:
        return "Your choice is not defined";
    }
  }
}

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const resetButton = document.querySelector('.reset');

rockButton.addEventListener("click", function () {
  game("ROCK");
});
paperButton.addEventListener("click", function () {
  game("PAPER");
});
scissorsButton.addEventListener("click", function () {
  game("SCISSORS");
});
resetButton.addEventListener("click", function () {
  wins = 0;
  losts = 0;
  draws = 0;
  round = 0;
  roundNumber.innerHTML = `Round : ${round++}`;
  playerScore.innerHTML = `Player score : ${wins}`;
  computerScore.innerHTML = `Computer score : ${losts}`;
  message.innerHTML = "Can you beat the computer";
  message.style.color = 'black';


});

function game(player) {
  if (wins < 5 && losts < 5) {
    let playerSelection = player;
    const computerSelection = getComputerChoice();
    let roundText = playRound(playerSelection, computerSelection);

    message.innerHTML = roundText || "Can you beat the computer";

    roundNumber.innerHTML = `Round : ${round++}`;
    playerScore.innerHTML = `Player score : ${wins}`;
    computerScore.innerHTML = `Computer score : ${losts}`;
  }
  if (wins == 5) {
    message.innerHTML = "Player wins the game";
    message.style.color = 'green';
  }
  if (losts == 5) {
    message.innerHTML = "Computer wins the game";
    message.style.color = 'red';

  }
}
game();
