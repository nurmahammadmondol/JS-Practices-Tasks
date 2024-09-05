// ************************************************************************
// Variable & datatype Tasks

var str = 'i am a new programer in this would';
let numbers = 30;
const bulian = true;

console.log(str);
console.log(numbers);
console.log(bulian);

// ************************************************************************
// Operators Tasks

var numbers1 = 50;
var numbers2 = 30;
let result_sum = numbers1 + numbers2;
let result_minus = numbers1 - numbers2;
let result_multiplication = numbers1 * numbers2;
let result_division = numbers1 / numbers2;

console.log(result_sum);
console.log(result_minus);
console.log(result_multiplication);
console.log(result_division);

// ************************************************************************
// Condition Tasks

let point = 4.78;

if (point >= 5.0) {
  console.log('BIg Result GPA', point);
} else {
  console.log('low result GPA', point);
}

// ************************************************************************
// Objects Tasks

let person = {
  name: 'Nur Mahammad',
  age: 22,
  isStudent: true,
  profession: 'stady web development',
};
console.log(person);
// add object
person.class = '12';
console.log(person);

// excess property
console.log(Object.keys(person));
//or//
let key = Object.keys(person);
console.log(key);

// excess values
console.log(Object.values(person));
//or//
let value = Object.values(person);
console.log(value);

// ************************************************************************
// Array Tasks

let arr = [23, 76, 93, 46, 72, 50, 15];
console.log(arr);

// minus
arr.pop();
console.log(arr);
// add
arr.push(2002);
console.log(arr);

// ************************************************************************
// Looping Tasks

// for লুপ টাস্ক
for (i = 1; i <= 10; i++) {
  console.log(i);
}

// while লুপ টাস্ক
let loop_num = 20;
while (loop_num >= 10) {
  console.log(loop_num);
  loop_num--;
}

// for লুপ ও অ্যারে টাস্ক
let names = ['Alice', 'Bob', 'Charlie', 'Roni', 'ovi', 'fahim'];
for (i = 0; i < names.length; i++) {
  console.log(names[i], i);
}

// for লুপ ও অবজেক্ট টাস্ক
let grocery_store = {
  Rice: 'various types',
  Flour: 'maida, atta',
  Spices: 'turmeric, cumin, coriander, etc.',
  Pulses: 'dal, chickpeas, etc.',
  Cooking_Oil: 'vegetable oil, mustard oil',
};

for (let store in grocery_store) {
  console.log(store + ':' + grocery_store[store]);
}

// মাল্টিপ্লিকেশন টেবিল টাস্ক
let three = 3;
for (i = 1; i <= 10; i++) {
  console.log(three, 'x', i, '=', three * i);
}

// ************************************************************************
//Function + Tasks

function Two_num(num1, num2) {
  return num1 + num2;
}
console.log(Two_num(5, 10));
console.log(Two_num(40, 40));
console.log(Two_num(2896, 375));

// Function - Tasks
function min(number1, number2) {
  return number1 - number2;
}
console.log(min(39, 14));
console.log(min(50, 34));
console.log(min(6985, 2549));

// Function multiplication tasks

function mul(number3, number4) {
  return number3 * number4;
}
console.log(mul(40, 4));
console.log(mul(23, 2));
console.log(mul(96, 51));

// Function division Tasks

function division(number5, number6) {
  return number5 / number6;
}
console.log(division(50, 4));
console.log(division(44, 8));
console.log(division(942, 58));
console.log(division(1942, 67));
