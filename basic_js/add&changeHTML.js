// ---------EXAMPLE 2---------


// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
// document.getElementById("fruits").append(newListItem); // append inside list
const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);

// const listItem = document.querySelectorAll("fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItem[1]);

// REMOVE HTML ELEMENT
document.getElementById("fruits").removeChild(newListItem);
// ---------EXAMPLE 1---------

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!"
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1); //prepend if you like it in the beginning
document.getElementById("box1").append(newH1); // append inside an element
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2"); // insert before an element
// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".body"); // if elements does not have an id we 
// document.body.insertBefore(newH1, boxes[4]);      // can use query selector all , put it 
                                                     // on a node list then access its index
  
// REMOVE HTML ELEMENT
// document.body.removeChild(newH1); // to remove inside body
document.getElementById("box1").removeChild(newH1); 




