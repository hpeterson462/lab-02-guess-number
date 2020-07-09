export function compareNumbers(guess, correctNumber) {

    if (correctNumber === guess) {
        return 'You win!';
    } else if (correctNumber < guess) {
        return 'Too high';
    } else if (correctNumber > guess) {
        return 'Too low';
    } else {
        return 'Please guess again.';
    }
}