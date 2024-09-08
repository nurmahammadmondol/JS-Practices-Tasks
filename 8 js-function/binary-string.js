function Binary(string) {
  console.log(string);

  let count = 0;
  for (i = 0; i < Length; i++) {
    if (string[i] === '0') {
      count++;
    }
  }
  return count;
}

let binary_str = '1001010111001';
let Length = binary_str.length;
let result = Binary(binary_str);

console.log(result);
