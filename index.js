let maxRounds = 5;
let roundsPlayed = 0;
let tieScore = 0;
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";
let computerSelection = "";

document.getElementById("rockButton").addEventListener("click", (e) => {
  game("rock");
});
document.getElementById("paperButton").addEventListener("click", (e) => {
  game("paper");
});
document.getElementById("scissorsButton").addEventListener("click", (e) => {
  game("scissor");
});
document.getElementById("restartButton").addEventListener("click", (e) => {
  restart();
});

function computerPlay() {
  randNum = Math.floor(Math.random() * 3);
  switch (randNum) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    default:
      return "scissor";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 2; // Tie
  } else if (
    (playerSelection === "rock" && computerSelection === "scissor") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissor" && computerSelection === "paper")
  ) {
    return 0; // Player wins
  }

  return 1; // Computer wins
}

function game(choice) {
  let playerSelection = choice;
  if (roundsPlayed < maxRounds) {
    let computerSelection = computerPlay();
    let result = playRound(playerSelection, computerSelection);

    // display result
    switch (result) {
      case 0:
        document.getElementById("winLose").innerHTML =
          playerSelection + " beats " + computerSelection;
        playerScore++;
        break;
      case 1:
        document.getElementById("winLose").innerHTML =
          computerSelection + " beats " + playerSelection;
        computerScore++;
        break;
      default:
        document.getElementById("winLose").innerHTML =
          computerSelection + " = " + playerSelection;
        tieScore++;
    }

    roundsPlayed++;
  }

  if (roundsPlayed >= maxRounds) {
    if (playerScore > computerScore) {
      document.getElementById("winLose").innerHTML = "You WIN!🥳";
      document.getElementById("winLose").style.color = "#32CD32";
    } else if (playerScore < computerScore) {
      document.getElementById("winLose").innerHTML = "You LOSE!😒";
      document.getElementById("winLose").style.color = "red";
    } else {
      document.getElementById("winLose").innerHTML = "You TIED!";
    }

    document.getElementById("rockButton").disabled = true;
    document.getElementById("paperButton").disabled = true;
    document.getElementById("scissorsButton").disabled = true;
  }

  const stats =
    "Round: " +
    roundsPlayed +
    "<br> Your Score: " +
    playerScore +
    " <br> Computer's score: " +
    computerScore +
    "<br> Ties: " +
    tieScore;

  document.getElementById("statsDiv").innerHTML = stats;
}

function restart() {
  console.log("RESTART");
  window.location.reload();
}
