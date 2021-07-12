// declaring variables and functions
const person = prompt("Hello  What is your name?");
alert("Welcome " + person + " Lets play the game 'Ques the number'?");
alert("Please decide the range of the numbers in the game between 0 and 25:")
let minNumber = prompt("Choose your low number:");
let maxNumber = prompt("Choose your high number:")
const answer = (minNumber, maxNumber) => {
    min = Math.ceil(minNumber);
    max = Math.floor(maxNumber);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const userNumber = (minNumber, maxNumber) => {
    let inputNumber = prompt("Choose a number between " + minNumber + " and " + maxNumber + " .");
    return inputNumber;
}
// game and loop
const game = (minNumber, maxNumber) => {
    let computerNumber = answer(minNumber, maxNumber);
    for (maxAttempts = 1; maxAttempts <= 5; maxAttempts++) {
        let personNumber = userNumber(minNumber, maxNumber);
        if ((5 - maxAttempts) >= 2 && personNumber != computerNumber) {
            alert("Not correct, you have " + (5 - maxAttempts) + " more attempts. Try again.");
        } else if ((5 - maxAttempts) == 1 && personNumber != computerNumber) {
            alert("Not correct, you have one more attempt.");
        } else if (personNumber != computerNumber) {
            alert("Not correct, you have lost. Game over!")
            alert("Goodbye " + person + ", see you next time!");
        } else {
            alert("Congratulations! You have won!");
            alert("Goodbye " + person + ", see you next time!");
            break;
        }
    }
}
//calling the function to start the game.
game(minNumber, maxNumber);