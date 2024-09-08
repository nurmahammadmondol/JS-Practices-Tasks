// Practices 1

function bigMobile(phone) {
  let expancivPhone = phone[0];
  for (let rate of phone) {
    if (rate.price > expancivPhone.price) {
      expancivPhone = rate;
    }
  }
  return expancivPhone;
}

const all_phone = [
  { name: 'Vivo', model: 'y11', price: 14000, camera: '12mp' },
  { name: 'Oppo', model: 's7', price: 12000, camera: '18mp' },
  { name: 'realme', model: 'e13', price: 27000, camera: '15mp' },
  { name: 'iPhone', model: '15pro', price: 140000, camera: '50mp' },
  { name: 'sammsang', model: 't12', price: 30000, camera: '14mp' },
];
const bestPhone = bigMobile(all_phone);

console.log(bestPhone);

// *********************************************
// Practices 2

function result(GPA) {
  let greatResult = GPA[0];
  for (let point of GPA) {
    if (point.CGPA > greatResult.CGPA) {
      greatResult = point;
    }
  }

  return greatResult;
}

const marks = [
  { name: 'Asif Rahaman', Roll: 709668, semester: '3th', CGPA: 2.14 },
  { name: 'Nasir Uddin', Roll: 709734, semester: '3th', CGPA: 2.34 },
  { name: 'Nur Mahammad', Roll: 709607, semester: '3th', CGPA: 3.24 },
  { name: 'Asikur Rahamn ovi', Roll: 709736, semester: '3th', CGPA: 2.24 },
  { name: 'Raju islam', Roll: 716690, semester: '1th', CGPA: 3.21 },
  { name: 'Mamun', Roll: 709619, semester: '1th', CGPA: 2.0 },
  { name: 'Biplob', Roll: 709668, semester: '3th', CGPA: 2.96 },
];

const hightest_result = result(marks);
console.log('Great Result is this collage', hightest_result);
