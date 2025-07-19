// object = A collection of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          object = {key:value,
//                    function()}

// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name



const person1 = {
    firstName: "Spongebob",
    lastName: "Squarepanrs",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi I'm Sponge")},
}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 45,
    isEmployed: true,
    sayHello: () => console.log("Hi I'm Patrick"),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person2.sayHello();

// ------------ THIS --------------

const person1t = {
    name: "Spongebob",
    favFood: "burger",
    sayHello: function(){console.log(`Hi I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

const person2t = {
    name: "Patrick",
    favFood: "fries",
    sayHello: function(){console.log(`Hi I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1t.eat();
person2t.eat();
