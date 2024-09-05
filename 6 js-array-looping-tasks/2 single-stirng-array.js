// Task 3

// Use a for...of loop to concatenate all the elements of an array into a single string.
// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
let single_string = ' ';

for (let word of numbers) {
  single_string += word;
}
console.log(single_string);
