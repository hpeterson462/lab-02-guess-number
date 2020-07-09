// import functions and grab DOM elements
import { compareNumbers } from './guess.js';

const quizButton = document.getElementById('quiz-button');

const userGuessSpan = document.getElementById('user-guess');

const userResultSpan = document.getElementById('user-result');

// initialize state
let randomNumber = Math.ceil(Math.random() * 20);

let userCount = 4;

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {

    if (userCount > 0) {
        const userInput = Number(prompt('Guess a number between 1 & 20.'));

        if (userInput === 0) {
            return;
        }

        const userResults = compareNumbers(userInput, randomNumber);
        if (userResults === 'Please guess again.') {
            alert('This isn\'t a number. Try again.');
        } else {
            userResultSpan.textContent = userResults;
        }
        userCount--;
        userGuessSpan.textContent = userCount;

        if (userCount === 0) {
            return document.getElementById('user-result').textContent = 'Good Game.';
        }
    }
});

