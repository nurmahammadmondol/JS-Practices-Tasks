// *********************************
// practices 1
function wood(chairWood, tableWood, bedWood) {
  const perChairWood = 4;
  const perTableWood = 10;
  const perBedWood = 35;

  const chairTotalWood = perChairWood * chairWood;
  const tableTotalWood = perTableWood * tableWood;
  const bedTotalWood = perBedWood * bedWood;

  const TotalWood = chairTotalWood + tableTotalWood + bedTotalWood;

  return TotalWood;
}

const chairWood = 6;
const tableWood = 2;
const bedWood = 2;

const totalWood = wood(chairWood, tableWood, bedWood);
console.log('Total kaj a wood lagbe', totalWood);

// *********************************
// practices 2
function myShopping(shirtPrice, pantPrice, shoePrice) {
  const perShirtPrice = 500;
  const perPantPrice = 400;
  const perShoePrice = 900;

  const total_shirt_price = perShirtPrice * shirtPrice;
  const total_pant_price = perPantPrice * pantPrice;
  const total_shoe_price = perShoePrice * shoePrice;

  const Total_price = total_shirt_price + total_pant_price + total_shoe_price;

  return Total_price;
}

let shirt = 3;
let pant = 2;
let shoe = 1;

const Total_shopping = myShopping(shirt, pant, shoe);
console.log('Total Shopping price', Total_shopping);
