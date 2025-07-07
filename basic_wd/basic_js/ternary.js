// let isStudent = false;

// let message = isStudent ? "You are a student" : "You are not a student";
// console.log(message);

let purchaseAmount = 125;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);