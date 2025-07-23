// nested objects = Objects inside of other Objects.
//                  Allows you to represent more comples data sturctures
//                  Child Object is enclosed by a Parent Object

//                  Person{Address{}, ContactInfo{}}
//                  ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}

const person = {
    fullName: "Sponge Square",
    age: 30,
    isStudent: true,
    hobbies: ["Karate", "Jellyfish", "Cooking"],
    address: {
        street: "124 Conch St.",
        city: "Bikini Bottom",
        country: "Int. Water"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[1]);
console.log(person.address.street);

// loop through properties of nested objects
for(const property in person.address){
    console.log(person.address[property]);
}


// ------------------Adress-----------

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this.country = country;
    }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", 
                            "Bikini Bottom", "Int. Water");


const person2 = new Person("Patrick", 34, "128 Conch St.", 
"Bikini Bottom", "Int. Water");

console.log(person1.address.country);