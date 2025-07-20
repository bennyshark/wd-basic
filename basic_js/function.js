w // function = A section of reusable code.
// Declare code once, use it whenever you want.
// Call the function to execute that code.

function isEvenTernary(number){
  return number % 2 === 0 ? true : false
}

console.log(isEvenTernary(10));

// ================================//

function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}
console.log(isEven(12));

// -------------------------------- //

function add(x, y){
    // let result = x + y;
    // return result;
    return x + y;
}
// add(2,3);
console.log(add(2,3));

// ---------------------------

function isValidEmail(email){
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}
console.log(isValidEmail("bennygmail"));

// ---------------------------------------

function isValidEmailTernary(email){
    return email.includes("@") ? true : false;
}
console.log(isValidEmailTernary("benny@gmail"));



// function happyBirthday(username, age){ // Parameters
//     console.log("Happy Bday to u!");
//     console.log("Happy Bday to u!");
//     console.log(`Happy Bday dear ${username}!`);
//     console.log("Happy Bday to u!");
//     console.log(`You are now ${age} years old`);
// }

// happyBirthday("Benny", 25); // arguments
// happyBirthday("shark", 20);
// happyBirthday("Sandy", 4);