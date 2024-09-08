// ***********************************************

// Practices 1
const num1 = 46;
const num2 = 27;

if (num1 < num2) {
  console.log('This number is min ', num1);
} else {
  console.log('This number is min', num2);
}

// ***********************************************

// Practices 2
function min_num(num1, num2) {
  if (num1 > num2) {
    return num2;
  } else {
    return num1;
  }
}

const min_number = min_num(96, 71);
console.log('practices two min number', min_number);

// ***********************************************

// Practices 3
function array_min(number) {
  let min = number[0];
  for (const serial of number) {
    if (min > serial) {
      min = serial;
    }
  }
  return min;
}

const numbers = [18, 92, 64, 9, 63, 52, 30, 5, 24];
const min_numbers = array_min(numbers);
console.log('practices three min number', min_numbers);

// ***********************************************

// Practices 4

const short_min_num = Math.min(88, 38, 27, 84, 93, 48, 62, 63, 30, 29, 52);
console.log('Short min number is', short_min_num);
