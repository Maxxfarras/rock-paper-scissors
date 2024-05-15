
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
    /*if (input === '1') {
        return 'Rock';
    } else if (input === '2') {
        return 'Paper';
    } else if (input === '3') {
        return 'Scissors';
    } else {
        alert('Invalid Value, Try Again')
    }*/
}

let humanChoice = getHumanChoice().charAt(0).toUpperCase() + getHumanChoice().slice(1);
let computerChoice = getComputerChoice();

function playGame (humanChoice, computerChoice) {
    
}
