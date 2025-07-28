// NodeList = Static collection of HTML element by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to array, but no (map, filler, reduce) has forEach
//            NodeList won't update to automatically reflect changes ( to the dom )

let buttons = document.querySelectorAll(".myButtons");

// ------ADD AN ELEMENT---------
const newButton = document.createElement("button"); // Step 1
newButton.textContent = "Button 5"; // Step 2 add necessary property
newButton.classList = "myButtons"; // when working with elements class we work with class list not class
document.body.appendChild(newButton) // Stop 3

buttons = document.querySelectorAll(".myButtons"); // reassign/restate to count the added element to the dom

console.log(buttons);

// ---------REMOVE AN ELEMENT---------

buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons"); //reassign/restate again to update node
    });
});
// //------- MOUSEOVER + MOUSEOUT event listener---------

buttons.forEach(button =>{
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    });
});

buttons.forEach(button =>{
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    })
})



// // ---------CLICK event listener-----------

// buttons.forEach(button =>{
//     button.addEventListener("click", event =>{
//         event.target.style.backgroundColor  = "tomato";
//     });
// });



// // --------ADD HTML/CSS PROPERTIES---------

// buttons.forEach(button =>{
//     button.style.backgroundColor = "green";
//     button.textContent += "😀";
// });