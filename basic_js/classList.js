// classList = Element property to JavaScript used to interact
//             with an element's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements
//             across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains() // if contains a class it will return true , else false

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button =>{
    button.classList.add("enabled")
});

buttons.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button =>{
    button.addEventListener("mouseout", event =>{
        event.target.classList.toggle("hover");
    });
});

buttons.forEach(button =>{
    button.addEventListener("click", event =>{

    if(event.target.classList.contains("disabled")){
        event.target.classList.replace("disabled", "enabled");
         // event.target.textContent += "👨🏻‍🎓";
    }
    else{
        event.target.classList.replace("enabled", "disabled");
    }
    })
})







// ------replace-------------
// const myH1 = document.getElementById("myH1");
// const myButton = document.getElementById("myButton");

// myH1.classList.add("enabled");
// myButton.classList.add("enabled");

// myH1.addEventListener("click", event =>{

//     if(event.target.classList.contains("disabled")){
//         event.target.classList.replace("disabled", "enabled");
//         // event.target.textContent += "👨🏻‍🎓";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }
// });

// myButton.addEventListener("click", event =>{

//     if(event.target.classList.contains("disabled")){
//         event.target.classList.replace("disabled", "enabled");
//         // event.target.textContent += "👨🏻‍🎓";
//     }
//     else{
//         event.target.classList.replace("enabled", "disabled");
//     }
// });

// -------Hover and unhover using add / remove ---------
// const myButton = document.getElementById("myButton");

//  myButton.addEventListener("mouseover", event =>{
//     event.target.classList.add("hover"); // can use toggle instead of add
//  });

//  myButton.addEventListener("mouseout", event =>{
//     event.target.classList.remove("hover"); // can use toggle instead of remove
//  })


// -----Remove Class list----------
// myButton.classList.remove("enabled");