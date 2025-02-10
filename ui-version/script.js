let humanScore = 0;
let computerScore = 0;

const choiceRock = "rock";
const choicePaper = "paper";
const choiceScissors = "scissors";

const resultDisplay = document.getElementById("result");
const humanScoreDisplay = document.getElementById("humanScore");
const computerScoreDisplay = document.getElementById("computerScore");

document
  .getElementById("rock")
  .addEventListener("click", () => playRound(choiceRock));
document
  .getElementById("paper")
  .addEventListener("click", () => playRound(choicePaper));
document
  .getElementById("scissors")
  .addEventListener("click", () => playRound(choiceScissors));

function getComputerChoice() {
  const randomChoice = Math.floor(Math.random() * 3) + 1;

  if (randomChoice === 1) {
    return choiceRock;
  } else if (randomChoice === 2) {
    return choicePaper;
  } else if (randomChoice === 3) {
    return choiceScissors;
  }
}

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  if (humanChoice === computerChoice) {
    resultDisplay.textContent = `Draw! Both chose ${capitalizeChoice(
      humanChoice
    )}.`;
    return;
  }

  if (
    (humanChoice === choiceRock && computerChoice === choiceScissors) ||
    (humanChoice === choicePaper && computerChoice === choiceRock) ||
    (humanChoice === choiceScissors && computerChoice === choicePaper)
  ) {
    humanScore++;
    resultDisplay.textContent = `You win! ${capitalizeChoice(
      humanChoice
    )} beats ${capitalizeChoice(computerChoice)}.`;
  } else {
    computerScore++;
    resultDisplay.textContent = `You lose! ${capitalizeChoice(
      computerChoice
    )} beats ${capitalizeChoice(humanChoice)}.`;
  }

  updateScores();
}

function updateScores() {
  humanScoreDisplay.textContent = humanScore;
  computerScoreDisplay.textContent = computerScore;
}

function capitalizeChoice(choice) {
  return choice.charAt(0).toUpperCase() + choice.slice(1);
}
