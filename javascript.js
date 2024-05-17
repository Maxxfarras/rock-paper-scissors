
let input = prompt('Choose Rock, Paper or Scissors!')

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return 'Rock';
    } else if (randomNumber === 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getHumanChoice () {
    return input;
}

const humanSelection = getHumanChoice().charAt(0).toUpperCase() + getHumanChoice().slice(1);
const computerSelection = getComputerChoice();

let humanScore = 0
let computerScore = 0 

function playRound (humanSelection, computerSelection) {

    if (computerSelection === humanSelection) {
        alert('Draw, Try again!');
    } else if ((computerSelection == 'Paper' && humanSelection == 'Rock') || (computerSelection == 'Rock' && humanSelection == 'Scissors') || (computerSelection == 'Scissors' && humanSelection == 'Paper')) {
        alert('You Lose, ' + computerSelection + ' beats ' + humanSelection + '! ');
        computerScore+=1;
        currentScore();
    } else {
        alert ('You Win, ' + humanSelection + ' beats ' + computerSelection + '! ') + ('Your Score: ' + humanScore + 1)
        humanScore+=1;
        currentScore();
    }
}

function currentScore () {
    console.log('Score: Human: ' + humanScore + ' Computer: ' + computerScore);
}



console.log(playRound(humanSelection, computerSelection))

