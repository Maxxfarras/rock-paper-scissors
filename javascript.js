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

let buttonRock = document.querySelector('.button-rock')
let buttonPaper = document.querySelector('.button-paper')
let buttonScissors = document.querySelector('.button-paper')

buttonRock.addEventListener('click', () => {
    let buttonSelection = 'Rock'
});

    
buttonPaper.addEventListener('click', () => {
    let buttonSelection = 'Paper'
});
    
buttonScissors.addEventListener('click', () => {
    let buttonSelection = 'Scissors'
});

let humanScore = 0
let computerScore = 0 

function playRound () {
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
    console.log('------------------------------------------------------');
}

/*function playGame(){
    for (let i = 0; i <= 4; i++) {
        playRound();  
    }
    winner();
}*/

function winner () {
    if (humanScore > computerScore) {
        alert('You Win!')
    } else if (computerScore > humanScore) {
        alert('Computer Wins!')
    } else {
        alert('Draw, Play Again!')
    }
}