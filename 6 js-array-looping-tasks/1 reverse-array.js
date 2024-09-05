// Task 1

// Write a JavaScript code to reverse the array colors without using the reverse method.
// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let reverse_set = [];

for (i = colors.length - 1; i >= 0; i--) {
  reverse_set.push(colors[i]);
}
console.log(reverse_set);

// output :  [ 'orange', 'yellow', 'green', 'blue', 'red' ]
