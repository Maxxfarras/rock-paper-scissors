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

const allButtons = document.querySelectorAll('.button');

let humanScore = 0
let computerScore = 0 

function playRound (humanSelection) {
    const computerSelection = getComputerChoice();
    let result = '';

    if (computerSelection === humanSelection) {
        result = 'Draw, Try again!';
        
    } else if ((computerSelection == 'Paper' && humanSelection == 'Rock') || (computerSelection == 'Rock' && humanSelection == 'Scissors') || (computerSelection == 'Scissors' && humanSelection == 'Paper')) {
        result = ('You Lose, ' + computerSelection + ' beats ' + humanSelection + '! ');
        computerScore+=1;
    } else {
        result = ('You Win, ' + humanSelection + ' beats ' + computerSelection + '! ');
        humanScore+=1;
    }

    document.querySelector('.result').innerHTML = result;
    return;
}

allButtons.forEach(bt => {
    bt.addEventListener('click', () => {
        playRound(bt.innerHTML)
    })
});