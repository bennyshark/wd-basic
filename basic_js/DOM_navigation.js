// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using Javascript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

//-------.firstElementChild----------

// getElementById ----
const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "yellow"

// query selector all ----
const ulElements = document.querySelectorAll("ul");

ulElements.forEach(ulElement =>{
    const firstChild = ulElement.firstElementChild;
    firstChild.style.backgroundColor = "yellow";
})