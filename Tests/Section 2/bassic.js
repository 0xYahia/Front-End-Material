"use strict";
function addTwoNumber(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const num1 = 10; // 5.0
const num2 = 2.8;
const printR = true;
const resultPhrases = "Result is: ";
addTwoNumber(num1, num2, printR, resultPhrases);
