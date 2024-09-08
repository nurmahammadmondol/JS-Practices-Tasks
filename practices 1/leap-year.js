function leapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0) {
    let leap_year4 = 'Yes, This year is a leap year.  ' + true;

    return leap_year4;
  } else if (year % 400 === 0) {
    let leap_year400 = 'Yes, This year is a leap year.  ' + true;

    return leap_year400;
  } else {
    let not_leap_year = 'This year is not a leap year.  ' + false;

    return not_leap_year;
  }
}

const target_year = 2005;
const target_year2 = 2032;
const values = leapYear(target_year);
const values2 = leapYear(target_year2);
console.log(values, values2);
