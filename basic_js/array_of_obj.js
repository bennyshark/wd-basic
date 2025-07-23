
const fruits = [{name: "apple", color: "red", calories: 95},
                {name: "orange", color: "orange", calories: 45},
                {name: "banana", color: "yellow", calories: 105}];

fruits.push({name: "grapes", color: "purple", calories: 62});
console.log(`${fruits[3].color} before for each`)

// for each

fruits.forEach(fruit => console.log(fruit.name))