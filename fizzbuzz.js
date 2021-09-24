/**
 * FizzBuzz
 * 
 * Write a function that takes a number
 * 
 * If the number is divisible  by 3, return "fizz
 * If the number is divisible by 5, return "buzz"
 * if the number is divisible by both 3 & 5, return "fizzbuzz"
 * Otherwise, return null;
 */
function fizzBuzz(number,) {
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FIZZBUZZ';
    }
    if (number % 3 === 0){
        return 'FIZZ';
    }
    if (number % 5 === 0){
        return 'BUZZ';
    }else {
        return NaN;
    }
}

module.exports = fizzBuzz;
