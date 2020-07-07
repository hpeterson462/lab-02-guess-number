// IMPORT MODULES under test here:
// import example from '../example.js';

const { compareNumbers } = require("../utilis");

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess1 = 1;
    const guess2 = 2;
    const guess3 = 3;
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const acutal1 = compareNumbers(guess1);
    const actual = false;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
