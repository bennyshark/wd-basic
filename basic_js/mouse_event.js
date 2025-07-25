// eventListener = Listen for specific events to create interactive web pages
//                 event: click, mouseover, mouseout
//                 .addEventListener(event, callback or arrow function or anonymous function);
//                              ex. (click, changeColor);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// -------using element to change event of another element-----


myButton.addEventListener("click", event =>{
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "OUCH! 😣";
});

myButton.addEventListener("mouseover", event =>{
    myBox.style.backgroundColor = "yellow";
    myBox.textContent = "Don't do it 😱";
});

myButton.addEventListener("mouseout", event =>{
    myBox.style.backgroundColor = "lightgreen";
    myBox.textContent = "Click Me 😃";
})
// ------basic event using arrow function
// myBox.addEventListener("click", event =>{
//         event.target.style.backgroundColor = "tomato";
//         event.target.textContent = "OUCH! 😣";
//     });

// myBox.addEventListener("mouseover", event =>{
//     event.target.style.backgroundColor = "yellow";
//     event.target.textContent = "Don't do it 😱";
// });

// myBox.addEventListener("mouseout", event =>{
//     event.target.style.backgroundColor = "lightgreen";
//     event.target.textContent = "Click Me 😃";
// })

// ------non arrow function-------
// myBox.addEventListener("click", function(event){
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 😣";
// });

// ------Alternative------- 
// function changeColor(event){ // event is a built in object provided by the web browser
//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCH! 😣"
// }

// myBox.addEventListener("click", changeColor);



 