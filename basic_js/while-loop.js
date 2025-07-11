// while loop = repeat some code WHILE some condition are not satify
// do while loop = do the code first then check the condition at the end :


// ---------- WHILE LOOP LOG IN ----------

// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = window.prompt('Enter your username');
//     password = window.prompt('Enter your password');

//     if(username === "myUserName" && password === "myPassword"){
//         loggedIn = true;
//         console.log("You are logged in!");
//     } 
//     else{
//         console.log("Invalid credentials! Please try again");
//     }
// }

//----------- DO WHILE LOG IN ----------

let loggedIn = false3;
let username;
let password;

do{
    username = window.prompt('Enter your username');
    password = window.prompt('Enter your password');

    if(username === "myUserName" && password === "myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    } 
    else{
        console.log("Invalid credentials! Please try again");
    }
}while(!loggedIn)


//----------- DO WHILE ----------

// let username;

// do{
//     username = window.prompt(`Enter your name`);
// }
// while(username === "" || username === null)

// console.log(`Hello ${username}`);

// -------- WHILE ---------
// let username;

// while(username === "" || username === null){
//     username = window.prompt(`Enter your name`);
// }

// console.log(`Hello ${username}`);