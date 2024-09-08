// *************************************************

// Practices 1

const num1 = 365;
const num2 = 82;

if (num1 > num2) {
  console.log('This number is big ', num1);
} else {
  console.log('This number is big ', num2);
}

// *************************************************

// Practices 2
function max_number(num1, num2) {
  if (num1 > num2) {
    const big_num1 = num1;
    return big_num1;
  } else {
    const big_num2 = num2;
    return big_num2;
  }
}

const bigNumber = max_number(36, 130);
console.log('Practices two big number', bigNumber);

// *************************************************

// Practices 3
function max_number(num1, num2) {
  if (num1 > num2) {
    const big_num1 = num1;
    return big_num1;
  } else {
    const big_num2 = num2;
    return big_num2;
  }
}

const numbers1 = max_number(36, 130);
const numbers2 = max_number(397, 160);

const total_big = max_number(numbers1, numbers2);
console.log('Practices three big number', total_big);

// *************************************************

// Practices 4
function max_number_three(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

const threeNumber = max_number_three(35, 28, 40);
console.log('Practices four big number', threeNumber);

// *************************************************

// Practices 5
function loop_big_num(numbers) {
  let max = 0;
  for (const item of numbers) {
    if (max < item) {
      max = item;
    }
  }
  return max;
}

const nums1 = 45;
const nums2 = 35;
const nums3 = 805;
const nums4 = 105;
const nums5 = 250;
const nums6 = 107;
const all_nums = [nums1, nums2, nums3, nums4, nums5, nums6];
// or
const new_nums = [98, 37, 51, 83, 4, 151, 84, 63, 16, 49, 62, 5];

const big_nums = loop_big_num(all_nums);
const new_big_nums = loop_big_num(new_nums);

console.log('Practices five big number', big_nums);
console.log('Practices five or  big number', new_big_nums);

// *************************************************

// Practices 6
// -------------------short cut max--------------
const Max = Math.max(27, 84, 92, 53, 303, 61, 94, 36, 74);
console.log('Practices six big number', Max);

// *************************************************

// all Practices max number
const Total_max = Math.max(
  num1,
  num2,
  bigNumber,
  total_big,
  threeNumber,
  big_nums,
  Max
);
console.log('All Practices big number', Total_max);
