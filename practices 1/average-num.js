// ******************************************************

// Even Numbers average
function odd_num_multiply(numbers) {
  let arr_odd_num = [];
  for (let odd_num of numbers) {
    if (odd_num % 2 === 1) {
      arr_odd_num.push(odd_num);
    }
  }
  console.log('All odd numbers', arr_odd_num);

  let sum = 0;
  for (let summation of arr_odd_num) {
    sum = sum + summation;
  }
  console.log('odd numbers summation is the', sum);

  const size = arr_odd_num.length;
  const average = sum / size;
  return average;
}

const arr = [12, 53, 84, 25, 75, 4, 22, 91, 34, 33, 16, 47];
const number = odd_num_multiply(arr);
console.log('Average odd number is', number);

// ******************************************************

// Even Numbers average
function even_num(number) {
  const even_number = [];

  for (const even of number) {
    if (even % 2 === 0) {
      even_number.push(even);
    }
  }

  let sum = 0;
  for (const summation of even_number) {
    sum += summation;
  }

  const size = even_number.length;
  const average = sum / size;

  return average;
}

const num = [13, 24, 56, 78, 31, 63, 48, 50, 25, 9, 30, 46];
const result = even_num(num);
console.log('Average even number is', result);
