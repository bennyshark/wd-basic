function generatePassword(length,  includeLowerase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars =  "abcdefghijklmnopqrstuvwxyx";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nunmberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? nunmberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `(password length must be atleast 1)`;
    }
    if(allowedChars.length === 0){
        return`(At least 1 set of character needs to be selected)`;
    }
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;
}

const passwordLength = 12;
const includeLowerase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password= generatePassword(passwordLength,
                       includeLowerase,
                       includeUppercase,
                       includeNumbers,
                       includeSymbols );

console.log(`Generate password: ${password}`);                  