
/*let input = prompt('Choose Rock, Paper or Scissors!')*/

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
    let input = prompt('Choose Rock, Paper or Scissors!');
    input = input.charAt(0).toUpperCase() + input.slice(1); 
}
console.log(getHumanChoice());

const humanSelection = getHumanChoice()/*.charAt(0).toUpperCase() + getHumanChoice().slice(1)*/;
const computerSelection = getComputerChoice();

let humanScore = 0
let computerScore = 0 

function playRound () {

    if (computerSelection === humanSelection) {
        alert('Draw, Try again!');
        currentScore();
    } else if ((computerSelection == 'Paper' && humanSelection == 'Rock') || (computerSelection == 'Rock' && humanSelection == 'Scissors') || (computerSelection == 'Scissors' && humanSelection == 'Paper')) {
        alert('You Lose, ' + computerSelection + ' beats ' + humanSelection + '! ');
        computerScore+=1;
        currentScore();
    } else {
        alert ('You Win, ' + humanSelection + ' beats ' + computerSelection + '! ');
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

