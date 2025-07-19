// let isStudent = false;

// let message = isStudent ? "You are a student" : "You are not a student";
// console.log(message);

let purchaseAmount1 = 125;
let discount = purchaseAmount1 >= 100 ? 20 : 0;
console.log(`Your total is $${purchaseAmount1 - purchaseAmount1 * (discount/100)}`);

const purchaseAmount2 = 125;
const finalAmount = purchaseAmount2 >= 100 ? purchaseAmount2 * 0.8 : purchaseAmount2;

console.log(`Final amount to pay: $${finalAmount.toFixed(2)}`);
