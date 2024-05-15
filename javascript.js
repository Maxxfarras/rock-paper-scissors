
let input = prompt('Choose Rock (1), Paper (2), Scissors (3)')

let humanScore = 0
let computerScore = 0

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

let humanChoice = getHumanChoice().charAt(0).toUpperCase() + getHumanChoice().slice(1);
let computerChoice = getComputerChoice();

function playGame (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'Draw'
    } else if (humanChoice === 'Paper' && computerChoice === 'Rock') {
        'You Win';
    }
}

playGame(humanChoice, computerChoice)
console.log(humanChoice)
console.log(computerChoice)
