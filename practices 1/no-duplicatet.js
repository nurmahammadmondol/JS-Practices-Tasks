function noDuplicatet(name) {
  let unique_list = [];
  for (let loop_name of name) {
    if (unique_list.includes(loop_name) === false) {
      unique_list.push(loop_name);
    }
  }

  return unique_list;
}
let names = [
  'Roni',
  'Mamun',
  'Ovi',
  'Rahul',
  'Ovi',
  'Nasir',
  'Tarek',
  'Roni',
  'Mamun',
];
let name_list = noDuplicatet(names);
console.log(name_list);

// *************************************

console.log('--------------------------------------');

// *****************************************

function Roll(number) {
  const Roll_list = [];

  for (const serial of number) {
    if (Roll_list.includes(serial) === false) {
      Roll_list.push(serial);
    }
  }

  return Roll_list;
}
const num = [
  1, 2, 1, 3, 1, 4, 5, 4, 6, 7, 8, 8, 9, 10, 11, 6, 12, 13, 14, 9, 15, 16, 17,
  10, 18, 19, 2, 20, 19, 16, 20,
];
const final_result = Roll(num);

console.log(final_result);

// *************************************

console.log('--------------------------------------');

// *****************************************

function club_student(name) {
  const serial = [];

  for (const items of name) {
    if (serial.includes(items) === false) {
      serial.push(items);
    }
  }

  return serial;
}

const student = [
  'Robi',
  'Ovi',
  'Nasir',
  'Robi',
  'Roni',
  'Mahamudul',
  'Ashik',
  'Royel',
  'Ovi',
  'Raju',
  'Arif',
  'Royel',
  'Fahim',
  'Nasir',
  'Raju',
  'Mahamudul',
];
const no_repait = club_student(student);
console.log(no_repait);
console.log(no_repait.length);
