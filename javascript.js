/*
Get computer random answer:
Create random number from 0 to 1 and multiplie it 
with length of the array of possible answers(3) and
round it.
Get random pick from array of answers.
*/

function getComputerChoice() {
    let answers = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * answers.length);
    let randomAnswer = answers[randomNumber];
    return randomAnswer;
}

/*Play one round of the game:
WHEN get player choice make sure first letter will be
 upper and rest of word is lower.
 IF we have draw, say draw,
 return 0 for players score.
 ELSE IF player chose Paper,
    IF computer chose Rock,
    say "you won, Paper beats Rock",
    return 1 for player's score.
    ELSE, 
    say, "you lose, Scissors beats Paper",
    return 0 for player's score.
ELSE IF player chose Rock,
    IF computer chose Scissors,
    say, "you won, Rock beats Scissors",
    return 1 for player's score.
    ELSE,
     say, "you lose, Paper beats Scissors".
     return 0 for player's score.
ELSE IF player chose Scissors,
    IF computer chose Paper,
    say, "you won, Scissors beats Paper",
    return 1 for player's score.
    ELSE,
     say, "you lose, Rock beats Scissors",
     return 0 for player's score.
  */
function playRound(playerSelection, computerSelection) {

playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
let playerScore = 0;

if(playerSelection === computerSelection) {
        alert(`Draw! You both picked ${computerSelection}`);
} else if(playerSelection == "Paper") {
    if(computerSelection == "Rock") {
        alert(`You won that round! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
    } else {
        alert(`You lose that round. Try harder! ${computerSelection} beats ${playerSelection}`);
    }
} else if(playerSelection == "Rock") {
    if(computerSelection == "Scissors") {
        alert(`You won that round! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
    } else {
        alert(`You lost that round. Try harder! ${computerSelection} beats ${playerSelection}`);
    }
} else if(playerSelection == "Scissors") {
    if(computerSelection == "Paper") {
        alert(`You won that round! ${playerSelection} beats ${computerSelection}`);
        playerScore++;
    } else {
        alert(`You lost that round. Try harder! ${computerSelection} beats ${playerSelection}`);
    }
}
    return playerScore;
}

/*Function which run 5 times the round and keeps score, 
saying who is a winner or loser at the end of the game.
PROMPT message to user and get his answer.
CHECK who is winning and keep the value of score.
Repeat 4 more times.
IF player score is higher than or equal three,
the winner is player,
ELSE,
the winner is computer.*/
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

/*const playerSelection = "rock";
const computreSelection = getComputerChoice();
console.log(playRound(playerSelection, computreSelection));
*/

console.log(game());