// import functions and grab DOM elements
const quizButton = document.getElementById('quiz-button');

const userGuessSpan = document.getElementById('user-guess');
// initialize state
let userGuess = 0;
let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber);
// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    console.log('math');

    const guess1 = prompt('Guess a number between 1 & 20.');

    if (randomNumber < userGuess) {
        return 'Too high, guess again.'
    } else if (randomNumber > userGuess) {
        return 'Too low, guess again.'
    } else {
        return 'Congrats! That\'s the number!';
    }
});
