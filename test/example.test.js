// IMPORT MODULES under test here:
// import example from '../example.js';
import { compareNumbers } from '../utilis.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const answer1 = 5;
    const answer2 = 2;
    const answer3 = 8;

    const expected1 = 3;
    const expected2 = 4;
    const expected3 = 8;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = compareNumbers(answer1, expected1);
    const actual2 = compareNumbers(answer2, expected2);
    const actual3 = compareNumbers(answer3, expected3);


    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, 1);
    expect.equal(actual2, -1);
    expect.equal(actual3, 0);
});
