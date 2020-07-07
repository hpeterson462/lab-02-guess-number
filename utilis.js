export function compareNumbers(guess, correctNumber) {

    if (correctNumber === guess) {
        return 0;
    } else if (correctNumber < guess) {
        return 1;
    } else if (correctNumber > guess) {
        return -1;
    } else {
        return 'Please guess again.';
    }
}