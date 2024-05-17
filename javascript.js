
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

function playRound (humanSelection, computerSelection) {

    if (computerSelection === humanSelection) {
        return 'Draw'
    } else if (computerSelection == 'Paper' && humanSelection == 'Rock'){
        return 'You Lose'
    } else if (computerSelection == 'Rock' && humanSelection == 'Scissors'){
        return 'You lose'
    } else if (computerSelection == 'Scissors' && humanSelection == 'Paper'){
        return 'You Lose'
    } else {
        return 'You Win!'
    }
}



console.log(playRound(humanSelection, computerSelection))
console.log(computerSelection)
console.log(humanSelection)
/*console.log(computerChoice)*/
