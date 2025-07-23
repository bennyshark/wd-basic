// destructuring = extract values from arrays and objects,
//                 then assign them to variables in a convenient way
//                 [] = to perform array destructuring
//                 {} = to perform object destructuring

// --------------SWAP THE VALUE OF TWO VARIABLES---------------

let a = 1;
let b = 2;

[a, b] = [b, a]; // [destructuring] = [array]

console.log(a);
console.log(b);

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);


// -----------------ASSIGN ARRAY ELEMENTS TO VARIABLES----------

const colors2 = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colors2;

console.log(firstColor);
console.log(secondColor);
console.log(extraColors);


// -----------------EXTRACT VALUES FROM OBJECTS-----------

const person1 = {
    firstName: "Spongebob",
    lastName: "SquarePants",
    age: 30,
    job: "Fry Cook",
}

const person2 = {
    firstName: "Sponge",
    lastName: "Pants",
    age: 34,
}

const {firstName, lastName, age, job ="unemployed"} = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);


//-----------------DESTRUCTURE IN FUNCTION PARAMETERS---------------

function displayPerson({firstName, lastName, age, job="Unemployedd"}){
    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

const person11 = {
    firstName: "Spongebobs",
    lastName: "SquarePantss",
    age: 30,
    job: "Fry Cook",
}

const person22 = {
    firstName: "Sponges",
    lastName: "Pantss",
    age: 34,
}

displayPerson(person22);