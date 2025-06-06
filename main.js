const gameplayInfoText = document.getElementById("gameplay-info-text")
const playerEmoji = document.getElementById("player-emoji");
const computerEmoji = document.getElementById("computer-emoji");
const choices = ["rock", "paper", "scissors"];
const gameReset = document.getElementById("reset-btn");
let computerScore = document.getElementById("computer-score");
let playerScore = document.getElementById("player-score");
let playerScoreCount = 0;
let computerScoreCount = 0;

function playGame(playerChoice){
    let computerChoice = choices[Math.trunc(Math.random() * 3)];
    if (playerChoice == "rock"){
        playerEmoji.textContent = "✊";
    } else if (playerChoice == "paper"){
        playerEmoji.textContent = "✋";
    } else if (playerChoice == "scissors"){
        playerEmoji.textContent = "✌️";
    }
    
    if (computerChoice == "rock"){
        computerEmoji.textContent = "✊";
        if (computerChoice == playerChoice){
            gameplayInfoText.textContent = "Draw";
        } else if (playerChoice == "paper"){
            gameplayInfoText.textContent = "Player Wins";
            playerScoreCount++;
            playerScore.innerHTML = `${playerScoreCount}`;
        } else if (playerChoice == "scissors"){
            gameplayInfoText.textContent = "Computer Wins";
            computerScoreCount++;
            playerScore.innerHTML = `${computerScoreCount}`;
        }

    } else if (computerChoice == "paper"){
        computerEmoji.textContent = "✋";
        if (computerChoice == playerChoice){
            gameplayInfoText.textContent = "Draw";
        } else if (playerChoice == "rock"){
            gameplayInfoText.textContent = "Computer Wins";
            computerScoreCount++;
            computerScore.innerHTML = `${computerScoreCount}`;
        } else if (playerChoice == "scissors"){
            gameplayInfoText.textContent = "Player Wins";
            playerScoreCount++;
            playerScore.innerHTML = `${playerScoreCount}`;
        }

    } else if (computerChoice == "scissors"){
        computerEmoji.textContent = "✌️";
        if (computerChoice == playerChoice){
            gameplayInfoText.textContent = "draw";
        } else if (playerChoice == "rock"){
            gameplayInfoText.textContent = "Player Wins";
            playerScoreCount++;
            playerScore.innerHTML = `${playerScoreCount}`;
        } else if (playerChoice == "paper"){
            gameplayInfoText.textContent == "Computer Wins";
            computerScoreCount++;
            computerScore.innerHTML = `${computerScoreCount}`;
        }

    }
}

gameReset.addEventListener("click", () => {
    playerScore.innerHTML = `0`;
    computerScore.innerHTML = `0`;
})