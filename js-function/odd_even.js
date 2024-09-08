// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(number) {
  if (number % 2 === 0) {
    let evenNumber = 'It is an even number = ' + true;
    return evenNumber;
  } else {
    let oddNumber = 'It is an even number = ' + false;
    return oddNumber;
  }
}

let value = 18;
let result = odd_even(value);

console.log(result);
