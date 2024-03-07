function getComputerChoice() {
  const choices = ["ROCK", "PAPER", "SCISSORS"];
  const i = Math.round(Math.random() * 2);
  console.log(`ComputerSelection : ${choices[i]}`);
  return choices[i];
}
let wins = 0;
let losts = 0;
let draws = 0;

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

function palyGame() {
  let playerSelection = prompt(
    "Choose your item (rock,paper or scissors"
  ).toUpperCase();
 
    let result = playRound(playerSelection, getComputerChoice());
    console.log(`PlayerSelection: ${playerSelection}`);
    console.log(`${result}
                     `);
  
}

function gameResult() {
  for (let i = 0; i <= 4; i++) {
    palyGame();
  }
  if (wins > losts) {
    console.log("YOU WIN THE GAME !");
  } else if (losts > wins) {
    console.log("COMPUTER WINS THE GAME !");
  } else {
    console.log("THE GAME ENDS WITH A DRAW !");
  }
}

gameResult();
