
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

/*
PSEUDOCODE

1. Define constants
2. Make function to choose randomly a constant
*/ 

console.log(getComputerChoice());