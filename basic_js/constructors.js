// constructor = special method for defining the 
//               properties and methods of objects

function Car(make, model, year, color){ // Car constructor is a reusable method
    this.make = make,                   // were we can define the properties and 
    this.model = model,                 // method of objects we created
    this.year = year,                         
    this.color = color
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}
// to use this constructor, create an instance of an object

const car1 = new Car("Ford", "Mustang", 2024, "red");
const car2 = new Car("Chavrolet", "Camaro", "2025", "blue");

car1.drive();
car2.drive();
console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

 