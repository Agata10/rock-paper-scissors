
function getComputerChoice() {
    let answers = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * answers.length);
    let randomAnswer = answers[randomNumber];
    return randomAnswer;
}

function playRound(playerSelection, computerSelection) {

playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
console.log("Player " + playerSelection);
console.log("Comp + " + computerSelection);

if(playerSelection === computerSelection) {
    return `Draw! You both picked ${computerSelection}`;
} else if(playerSelection == "Paper"){
    if(computerSelection == "Rock"){
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
} else if(playerSelection == "Rock"){
    if(computerSelection == "Scissors"){
        return `You won! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
} else if(playerSelection == "Scissors"){
    if(computerSelection == "Paper"){
     return `You won! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

    
}

const playerSelection = "rock";
const computreSelection = getComputerChoice();
console.log(playRound(playerSelection, computreSelection));
