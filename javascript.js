
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

let humanScore = 0
let computerScore = 0 

function playRound () {

    let input = prompt('Write Rock, Paper or Scissors');
    const humanSelection = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
    const computerSelection = getComputerChoice();

    if (computerSelection === humanSelection) {
        console.log('Draw, Try again!');
        currentScore();
    } else if ((computerSelection == 'Paper' && humanSelection == 'Rock') || (computerSelection == 'Rock' && humanSelection == 'Scissors') || (computerSelection == 'Scissors' && humanSelection == 'Paper')) {
        console.log('You Lose, ' + computerSelection + ' beats ' + humanSelection + '! ');
        computerScore+=1;
        currentScore();
    } else {
        console.log('You Win, ' + humanSelection + ' beats ' + computerSelection + '! ');
        humanScore+=1;
        currentScore();
    }
}

function currentScore () {
    console.log('Score: Human: ' + humanScore + ' Computer: ' + computerScore);
}

function playGame(){
    for (let i = 0; i <= 5; i++) {
        playRound();  
    }
    winner();
}

function winner () {
    if (humanScore > computerScore) {
        alert('You Win!')
    } else {
        alert('Computer Wins!')
    }
}

