let playerScore = 0;
let computerScore = 0;
let round = 0;
const result = document.querySelector('p.winner');


function getComputerChoice() {
    let answers = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * answers.length);
    let randomAnswer = answers[randomNumber];
    return randomAnswer;
}

function playRound(playerSelection, computerSelection) {

const playerScoreText = document.querySelector('.playerScore');
const computerScoreText = document.querySelector('.computerScore');
playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

if(playerSelection === computerSelection) {
        result.textContent = `Draw! You both picked ${computerSelection}`;
} else if(playerSelection == "Paper") {
    if(computerSelection == "Rock") {
        result.textContent = `You won that round! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        playerScoreText.textContent = playerScore;
    } else {
        result.textContent = `You lose that round. Try harder! ${computerSelection} beats ${playerSelection}`;
        computerScore++;
        computerScoreText.textContent = computerScore;
    }
} else if(playerSelection == "Rock") {
    if(computerSelection == "Scissors") {
        result.textContent = `You won that round! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        playerScoreText.textContent = playerScore;
    } else {
        result.textContent = `You lose that round. Try harder! ${computerSelection} beats ${playerSelection}`;        computerScore++;
        computerScoreText.textContent = computerScore;
    }
} else if(playerSelection == "Scissors") {
    if(computerSelection == "Paper") {
        result.textContent = `You won that round! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        playerScoreText.textContent = playerScore;
    } else {
        result.textContent = `You lose that round. Try harder! ${computerSelection} beats ${playerSelection}`;        computerScore++;
        computerScoreText.textContent = computerScore;
    }
   
}
}

const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
    button.addEventListener('click', function() {
    round++;
    playRound(`${button.id}`, getComputerChoice()); 
    if(round == 5)
    if(playerScore > computerScore){
       return result.textContent = "Congratulations!";
    } else {
       return result.textContent = "You lost";
    }
    
    })
});





/*
function game() {
    
    let recordOfScore = 0;
    let playerSelection;
    let computerSelection

    for(let i = 0; i < 5; i++) {
         playerSelection = prompt("Pick rock/paper/scissors");
         computerSelection = getComputerChoice();
        //console.log(playRound(playerSelection, computreSelection));
       // playRound(playerSelection,computerSelection);
        if(playRound(playerSelection,computerSelection) == 1){
            recordOfScore++;
        }
        console.log("Player: " + playerSelection);
        console.log("Computer: " + computerSelection);
        console.log(recordOfScore);
    }
    if(recordOfScore >= 3) {
        return "You won!";
    } else {
        return "You lost!";
    }
     
}
*/

