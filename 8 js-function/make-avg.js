function make_avg(arr, size) {
  // console.log('Array number =', arr);

  let sum = 0;
  for (i = 0; i < size; i++) {
    sum = sum + arr[i];
  }

  // console.log('summation =', sum);

  let average = sum / size;
  return average;
}
let number = [10, 20, 30, 40, 50];
let size = number.length;
let result = make_avg(number, size);

// console.log('Langth =', size);

console.log('Average mark =', result);
