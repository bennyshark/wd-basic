// eventListener = Listen for specific events to create interactive web pages
//                 event: keydown, keyup, (avoid using keypress, not compatible for many browser)
//                 document.addEventListener(event, callback);

// ------------Move element with arrow keys-----------
const myBox = document.getElementById("myBox");
const moveAmount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event =>{
    myBox.textContent = "😲";
    myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", event =>{
    myBox.textContent = "😀";
    myBox.style.backgroundColor = "lightblue";
});

document.addEventListener("keydown", event =>{

    if(event.key.startsWith("Arrow")){

        event.preventDefault(); // to not scroll with it

        switch(event.key){
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        myBox.style.top = ` ${y}px`;
        myBox.style.left = ` ${x}px`;
    }
})

// ---------All key ------------
// document.addEventListener("keydown", event =>{
//     myBox.textContent = "😲";
//     myBox.style.backgroundColor = "tomato";
// });

// document.addEventListener("keyup", event =>{
//     myBox.textContent = "😀";
//     myBox.style.backgroundColor = "lightblue";
// });