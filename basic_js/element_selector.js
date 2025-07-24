// element selector = Methods used to target and manipulate HTML elements
//                    They allow you to select one or multiple HTML elements
//                    from the DOM

// 1. document.getElementById()       // ELEMENT OR NULL
// 2. document.getElementsClassName() // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector()        // First ELEMENT OR NULL 
//                                        (return 1st matching element, then null 
//                                        if does not find any match)
//                                        (only returns single element (1st))
// 5. document.querySelectorAll()     // NODELIST

// ------------querySelectorAll()-------------
const foods = document.querySelectorAll("li"); //No need to type cast
                                               //Has node list that has built in methods

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
})

// ------------querySelector()-------------
const element = document.querySelector("ul");

element.style.backgroundColor = "yellow"; 

// -----------getEByTagName---------------
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

h4Elements[0].style.backgroundColor = "yellow"; // 1st element

for(let h4Element of h4Elements){ // All element // Enhance for loop
    h4Element.style.backgroundColor = "yellow";
}

for(let liElement of liElements){
    liElement.style.backgroundColor = "lightgreen";
}


// -----------getEByClassName()--------------
const fruits = document.getElementsByClassName("fruits");

fruits[0].style.backgroundColor = "yellow"; // 1st element

for(let fruit of fruits){ // Enhance for loop
    fruit.style.backgroundColor = "yellow"
}
// html collection does not have forEach
// fruit.forEach() wont work

// we can type cast our html collection as an aray
Array.from(fruits).forEach(fruit =>{
    fruit.style.backgroundColor = "yellow";
})


// ----------getElementByID()------------------
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log