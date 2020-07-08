// import functions and grab DOM elements
import { compareNumbers } from './guess.js';

const quizButton = document.getElementById('quiz-button');

const userGuessSpan = document.getElementById('user-guess');

const userResult = document.getElementById('user-result');

// initialize state
let randomNumber = Math.ceil(Math.random() * 20);
console.log(randomNumber);

let userCount = 4;

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {

    if (userCount === -1) {
        return document.getElementById("user-result").textContent = 'Good Game.';
    }

    const userInput = Number(prompt('Guess a number between 1 & 20.'));

    if (userInput === false) {
        return;
    }

    if (compareNumbers(userInput, randomNumber) === 0) {
        userResult.textContent = 'You win!';
    } else if (compareNumbers(userInput, randomNumber) === -1) {
        userResult.textContent = 'Too low';
    } else if (compareNumbers(userInput, randomNumber) === 1) {
        userResult.textContent = 'Too high';
    } else {
        alert('This isn\'t a number. Try again.');
    }

    userGuessSpan.textContent = userCount--;

    if (userCount === -1) {
        return document.getElementById('user-result').textContent = 'Sorry, you lost.';
    }


});

