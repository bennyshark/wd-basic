// array = a variable like structure that can hold
// more than 1 value

// spread operator = ... allows an iterable such as an 
// array or string to be expanded into separate elements 
// (unpacks the elements)

// rest parameters = (...rest) allow a function work with a
//                   variable number of arguments by bundling them into an array

//                   spread = expands array into separate elements
//                   rest = bundles sepaerate elements into an array



let fruits = ["apple", "orange", "banana"];

fruits.sort().reverse();

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}
// for(let i = fruits.length - 1; i >= 0 ; i--){
//     console.log(fruits[i]);
// } // reverse order

// for(let fruit in fruits){
// console.log(fruit);
// }

console.log(fruits.length);

// -------SPREAD OPERATOR------------ //

// ----MaxMin-----

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers); 
// console.log(maximum)

// ---------Put string in an array of char--------
// let username = "Bro Code";
// let letters = [...username]; //put them in an array of char
// let lettersjoin = [...username].join("-"); //join them together with -
// console.log(letters);

// ----------Combine 2 arrays---------

// let fruitss = ["apple", "orange", "banana"];
// let vegetable = ["carrots", "celery", "potatoes"];

// let foods = [...fruitss, ...vegetable, "eggs", "milk"];

// console.log(newFruitss);

// --------- Rest parameters ---------- //

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

function openFridge(...foods){ // rest parameters
    console.log(foods); // (...foods) spread operator
}

openFridge(food1, food2, food3, food4, food5);

// ---------- 

function getFood(...foods){
    return foods;
}

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

// -------- GET SUM ----------- //

function sum(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result

}

const total = sum(1, 2, 3, 4, 5);

console.log(`Your total is $${total}`);

// ---------- get average --------

function getAverage(...numbers){

    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length

}

const average = getAverage(75, 100, 85, 90, 50);

console.log(`the avarage is: ${average}`);

// ------- Combine Strings --------

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");

console.log(fullName);




