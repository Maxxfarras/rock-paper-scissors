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

function disableButtons () {
    allButtons.forEach(btn => {
        btn.disable = true; 
    });
}

const allButtons = document.querySelectorAll('.button');

let humanScore = 0
let computerScore = 0 

function playRound (humanSelection) {
    const computerSelection = getComputerChoice();
    let result = '';

    if (computerSelection === humanSelection) {
        result = ('Draw, Try again! '
        + '<br><br>Player Score: ' + humanScore + '<br>Computer Score: ' + computerScore);

    } else if ((computerSelection == 'Paper' && humanSelection == 'Rock') ||
               (computerSelection == 'Rock' && humanSelection == 'Scissors') ||
               (computerSelection == 'Scissors' && humanSelection == 'Paper')) {
        computerScore+=1;
        result = ('You Lose, ' + computerSelection + ' beats ' + humanSelection + '!'
        + '<br><br>Player Score: ' + humanScore + '<br>Computer Score: ' + computerScore);
        if (computerScore === 5) {
            result = ('<br><br>Computer Wins, Reload page to play again!')
        }
    } else {
        humanScore+=1;
        result = ('You Win, ' + humanSelection + ' beats ' + computerSelection + '!'
        + '<br><br>Player Score: ' + humanScore + '<br>Computer Score: ' + computerScore);
        if (humanScore === 5) {
            result = ('<br><br>You Win, Reload page to play again!')
        }
    }


    document.querySelector('.result').innerHTML = result;
    return;
}

allButtons.forEach(bt => {
    bt.addEventListener('click', () => {
        playRound(bt.innerHTML)
    })
});