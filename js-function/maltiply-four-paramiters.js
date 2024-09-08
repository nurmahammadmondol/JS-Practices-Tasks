// Task-1-------------
// Take four parameters. Multiply the four numbers and then return the result

function multiply(num1, num2, num3, num4) {
  console.log(num1, num2, num3, num4);

  let multiply_numbers = num1 * num2 * num3 * num4;
  return multiply_numbers;
}

let result = multiply(12, 32, 7, 26);
console.log('Total four number multiply is =', result);
