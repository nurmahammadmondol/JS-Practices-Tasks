// ****************************************
// product discount
// Practices 1

const fastNoDiscount = 100;
const secondDiscount = 90;
const threeDiscount = 70;

function Product_discount(product) {
  if (product <= 100) {
    const product_dis = product * fastNoDiscount;
    return product_dis;
  } else if (product <= 200) {
    const product_dis = product * secondDiscount;
    return product_dis;
  } else {
    const product_dis = product * threeDiscount;
    return product_dis;
  }
}

const Biscuite = 2;
const Total_discount = Product_discount(Biscuite);
console.log(Total_discount);

// ****************************************
// price discount
// Practices 2

function Price_discount(product) {
  if (product <= 100) {
    const price = product;
    return price;
  } else if (product <= 200) {
    const price = (product * 90) / 100;
    return price;
  } else if (product <= 300) {
    const price = (product * 80) / 100;
    return price;
  } else {
    const price = (product * 70) / 100;
    return price;
  }
}

const product_price = 500;
const Total_Price = Price_discount(product_price);

console.log(Total_Price);

// ****************************************
// layer discount
// Practices 2

// function layerDiscount(product) {
//   if (product <= 5) {
//     const noDiscount = product * 5
//     return noDiscount
//   }

//   else if (product <= 10) {
//     const noDiscount = product * 5;
//     const discount_1_product = product - noDiscount
//     const dis_one = discount_1_product *

//   }

// }

// const products = 2;
// const Total_layer_discount=layerDiscount(products)
