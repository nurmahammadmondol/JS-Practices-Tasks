let word =
  "The English starts with the  letter 'A' It's the first letter and a vowel, just like  'অ' in Bengali. The letter 'A' is used in many  words and forms the o basis of English";
let A_count = 0;
let E_count = 0;
let I_count = 0;
let O_count = 0;
let U_count = 0;

// (word[i] === 'a' || word[i] === 'A')
for (i = 0; i < word.length; i++) {
  if (word[i] === 'a' || word[i] === 'A') {
    A_count++;
  }
}
console.log("The letter 'a' or 'A' appears ", A_count, 'times.');

// (word[i] === 'e' || word[i] === 'E')
for (i = 0; i < word.length; i++) {
  if (word[i] === 'e' || word[i] === 'E') {
    E_count++;
  }
}
console.log("The letter 'e' or 'E' appears ", E_count, 'times.');

// (word[i] === 'i' || word[i] === 'I')
for (i = 0; i < word.length; i++) {
  if (word[i] === 'i' || word[i] === 'I') {
    I_count++;
  }
}
console.log("The letter 'i' or 'I' appears ", I_count, 'times.');

// (word[i] === 'o' || word[i] === 'O')
for (i = 0; i < word.length; i++) {
  if (word[i] === 'o' || word[i] === 'O') {
    O_count++;
  }
}
console.log("The letter 'o' or 'O' appears ", O_count, 'times.');

// (word[i] === 'u' || word[i] === 'U')
for (i = 0; i < word.length; i++) {
  if (word[i] === 'u' || word[i] === 'U') {
    U_count++;
  }
}
console.log("The letter 'u' or 'U' appears ", U_count, 'times.');
