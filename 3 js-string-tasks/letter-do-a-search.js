// Practices-1
let nam = 'Count how many times a string has the letter a or A';
let count = 0;

for (let i = 0; i < nam.length; i++) {
  if (nam[i] === 'a' || nam[i] === 'A') {
    count++;
  }
}
console.log("he letter 'a' or 'A' appears " + count + ' times');

// Practices -2
let word = 'My Name is Nur Mahammad Mondol Robiul. I stady a web debelopment';
let number = 0;

for (let r = 0; r < word.length; r++) {
  if (word[r] === 'a' || word[r] === 'A') {
    number++;
  }
}
console.log('The a & A letter Number is ', number);
