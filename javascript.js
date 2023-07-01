function gameAll() {
    
let playerScore = 0;
let computerScore = 0;
const computerScoreText = document.querySelector('span.computerScore');
const playerScoreText = document.querySelector('span.playerScore');
const result = document.querySelector('p.winner');


function getComputerChoice() {
    let answers = ["Rock", "Paper", "Scissors"];
    let randomNumber = Math.floor(Math.random() * answers.length);
    let randomAnswer = answers[randomNumber];
    return randomAnswer;
}

function playRound(playerSelection, computerSelection) {
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
        result.textContent = `You lose that round. Try harder! ${computerSelection} beats ${playerSelection}`;        
        computerScore++;
        computerScoreText.textContent = computerScore;
    }
    } else if(playerSelection == "Scissors") {
    if(computerSelection == "Paper") {
        result.textContent = `You won that round! ${playerSelection} beats ${computerSelection}`;
        playerScore++;
        playerScoreText.textContent = playerScore;
    } else {
        result.textContent = `You lose that round. Try harder! ${computerSelection} beats ${playerSelection}`;        
        computerScore++;
        computerScoreText.textContent = computerScore;
        }    
    }
}

function game() {
    let round = 0;
    let computerSelection;
    const buttons = document.querySelectorAll('button.playerPick');
   
    buttons.forEach(button => {
        button.addEventListener('click', function() {

        computerSelection = getComputerChoice();
        score = playRound(`${button.id}`, computerSelection);
        insertCompuerSelection(computerSelection);
        insertPlayerSelection(`${button.id}`);
        round++;
        if(round == 5) {
            buttons.forEach(button => {button.disabled = true;});
            gameOver(playerScore, computerScore);
        }
     })
    });

}

function insertPlayerSelection(playerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    const playerDiv = document.getElementById('playerScore');
    const playerImg = document.createElement('img');
    playerDiv.textContent = " ";
    playerImg.style.width = '80px';
    playerImg.style.height = '80px';
    
    if(playerSelection === "Paper") {
        playerImg.src = "images/paper.png";
        playerDiv.appendChild(playerImg);
    } else if(playerSelection === "Rock") {
        playerImg.src = "images/rock.png";
        playerDiv.appendChild(playerImg);
    } else {
        playerImg.src = "images/scissors.png";
        playerDiv.appendChild(playerImg);
    }

}

function insertCompuerSelection(computerSelection) {
        const computerDiv = document.getElementById('computerScore');
        const computerImg = document.createElement('img');
        computerDiv.textContent = " ";
        computerImg.style.width = '80px';
        computerImg.style.height = '80px';

        if(computerSelection === "Paper") {
            computerImg.src = "images/paper.png";
            computerDiv.appendChild(computerImg);
        } else if(computerSelection === "Rock") {
            computerImg.src = "images/rock.png";
            computerDiv.appendChild(computerImg);
        } else {
            computerImg.src = "images/scissors.png";
            computerDiv.appendChild(computerImg);
        }
}

function gameOver(playerScore, computerScore) {
    const againButton = document.querySelector('.result button');
    const buttons = document.querySelectorAll('button.playerPick');
    result.style.fontSize = '32px';
    againButton.style.visibility = 'visible';

    if(playerScore > computerScore) {
        result.textContent = "Congratulations! You won!";
    } else if(playerScore == computerScore) {
        result.textContent = "Draw! Maybe another game?";
    } else {
        result.textContent = "You lost! Try harder next game!";
    }

    againButton.addEventListener('click', () => {
        window.location.reload();
    })
}
    game();

}

gameAll();