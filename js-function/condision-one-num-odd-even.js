//**************************************************//

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function odd_even_num(number) {
  if (number % 2 === 1) {
    let odd_num_multiply = number * 2;
    return odd_num_multiply;
  } else {
    let even_num_division = number / 2;
    return even_num_division;
  }
}

let unnon_number = odd_even_num(60);
let unnon2_number = odd_even_num(55);
let unnon3_number = odd_even_num(46);
let unnon4_number = odd_even_num(23);

console.log(unnon_number);
console.log(unnon2_number);
console.log(unnon3_number);
console.log(unnon4_number);
