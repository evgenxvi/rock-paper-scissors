let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";

const choiceRock = "rock";
const choicePaper = "paper";
const choiceScissors = "scissors";

function getHumanChoice() {
  humanChoice = prompt("Choose: Rock, Paper, or Scissors?").toLowerCase();

  if (humanChoice === choiceRock || humanChoice === choicePaper || humanChoice === choiceScissors) {
    return humanChoice;
  } else {
    console.log("Incorrect value. Please try again.");
    return getHumanChoice();
  }
}

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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Draw! Play Again.");
    return;
  }

  if (
    (humanChoice === choiceRock && computerChoice === choiceScissors) ||
    (humanChoice === choicePaper && computerChoice === choiceRock) ||
    (humanChoice === choiceScissors && computerChoice === choicePaper)
  ) {
    humanScore++;
    console.log(`You win! ${capitalizeChoice(humanChoice)} beats ${capitalizeChoice(computerChoice)}.`);
  } else {
    computerScore++;
    console.log(`You lose! ${capitalizeChoice(computerChoice)} beats ${capitalizeChoice(humanChoice)}.`);
  }
}

function capitalizeChoice(choice) {
  return choice.charAt(0).toUpperCase() + choice.slice(1);
}

for (let i = 0; i < 5; i++) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
}

console.log(`Your score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);