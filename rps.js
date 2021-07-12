let choices = ["rock", "paper", "scissors"];

function computerPlay() {
    let compChoice = Math.floor(Math.random() * choices.length);
    return choices[compChoice];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    /* Fail Conditions */
    if (playerSelection == choices[0] && computerSelection == choices[1]) {
        // rock vs paper
        return "You Lose! Paper beats Rock";
    } else if (playerSelection == choices[1] && computerSelection == choices[2]) {
        // paper vs scissors
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection == choices[2] && computerSelection == choices[0]) {
        // scissors vs rock
        return "You Lose! Rock beats Scissors";

    /* Tie Condition */
    } else if (playerSelection == computerSelection ) {
        // same choice
        return "Tie!";

    /* Win Conditions */
    } else {
        return `You Win! ${playerSelection.replace(/^\w/, (c) => c.toUpperCase())} beats ${computerSelection.replace(/^\w/, (c) => c.toUpperCase())}`;
    } 
}

function validChoice(playerSelection) {
    if(choices.indexOf(playerSelection.toLowerCase()) >= 0 ) {
        return true;
    } else {
        return false;
    }
}

function bestOfFive() {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1} of 5:`);
        let playerSelection = "";

        do {
            playerSelection = prompt("Rock, Paper, or Scissors? ");
        } while (!validChoice(playerSelection));

        let computerSelection = computerPlay();
        
        let roundResult = playRound(playerSelection, computerSelection)

        if (roundResult == "Tie!") {
            i--;
        } else if (roundResult[4] == "W") {
            userScore++;
        } else if (roundResult[4] == "L") {
            computerScore++;
        }

        console.log(roundResult);

        /* Game results */
        if (userScore == 3) {
            console.log("You won the game!")
            break;
        } else if (computerScore == 3) {
            console.log("You lose the game!")
            break;
        }
    }
}

const result = document.querySelector('#result');

const rock = document.querySelector('#rock');
rock.addEventListener('click', function (e) {
    result.textContent = playRound("rock", computerPlay());
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function (e) {
    result.textContent = playRound("paper", computerPlay());
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function (e) {
    result.textContent = playRound("scissors", computerPlay());
});