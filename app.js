// import functions and grab DOM elements
import { compareNumbers } from './utilis.js';

const quizButton = document.getElementById('quiz-button');

const userGuessSpan = document.getElementById('user-guess');

const userResult = document.getElementById('user-result');

const userNumber = document.getElementById('input');

// initialize state
let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber);

let userCount = 4;

let userInput = Number(userNumber.value);
// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    console.log('math');

    const confirm = prompt('Guess a number between 1 & 20.');

    if (confirm === false) {
        return;
    }

    if (compareNumbers(userInput, randomNumber) === 0) {
        userResult.textContent = 'You win!';
    } else if (compareNumbers(userInput, randomNumber) === -1) {
        userResult.textContent = 'Too low.';
    } else if (compareNumbers(userInput, randomNumber) === 1) {
        userResult.textContent = 'Too high.';
    } else {
        alert('Not a number.');
    }

    userGuessSpan.textContent = userCount--;

    if (userCount === 0) {
        return;
    }
});