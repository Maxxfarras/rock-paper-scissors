
let input = prompt('Choose Rock (1), Paper (2), Scissors (3)')

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

    if (input === '1') {
        return 'Rock';
    } else if (input === '2') {
        return 'Paper';
    } else if (input === '3') {
        return 'Scissors';
    } else {
        alert('Invalid Value, Try Again')
    }
}

console.log(getHumanChoice());