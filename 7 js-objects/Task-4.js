// Task-4
// Count the number of properties.

// Input:
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

let student = {
  name: 'Nur Mahammad Mondol',
  age: 21,
  city: 'Rangpur',
  isStudent: true,
};

let allProperties = Object.keys(student).length;
console.log(allProperties);

// ****************************************//

const Book = {
  name: 'Javascript',
  page: 701,
  program: 'One Thousend',
  price: 400,
  created: 'nur mahammad',
};

var BookProperties = Object.keys(Book).length;
console.log(BookProperties);
