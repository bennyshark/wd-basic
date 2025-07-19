const hello = () => console.log("Hello");

hello()
const helloParameter = () => console.log(`Hello ${name}`);

helloParameter("Ben");

const helloMultipleP = () => {console.log(`Hello ${name}`)
                             console.log(`Your are ${age} years old`)
};

hello("Ben", 12);

// Traditional function examples with values
function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  function square(n) {
    return n * n;
  }
  function cube(n) {
    return n * n * n;
  }
  
  console.log("Traditional Functions:");
  console.log("Add: ", add(10, 5));         // 15
  console.log("Subtract: ", subtract(10, 5)); // 5
  console.log("Multiply: ", multiply(10, 5)); // 50
  console.log("Divide: ", divide(10, 5));     // 2
  console.log("Square: ", square(4));         // 16
  console.log("Cube: ", cube(3));             // 27
  
  // Arrow function equivalents with the same values
const addArrow = (a, b) => a + b;
const subtractArrow = (a, b) => a - b;
const multiplyArrow = (a, b) => a * b;
const divideArrow = (a, b) => a / b;
const squareArrow = n => n * n;
const cubeArrow = n => n * n * n;

console.log("\nArrow Functions:");
console.log("Add: ", addArrow(10, 5));         // 15
console.log("Subtract: ", subtractArrow(10, 5)); // 5
console.log("Multiply: ", multiplyArrow(10, 5)); // 50
console.log("Divide: ", divideArrow(10, 5));     // 2
console.log("Square: ", squareArrow(4));         // 16
console.log("Cube: ", cubeArrow(3));             // 27
