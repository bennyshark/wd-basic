const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

function generatePassword(length, includeLowercase, includeUppercase, 
    includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChar = "ABCDEFHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChar = "!2\@#$%^&*()-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : ""; // += (string concainate)
    allowedChars += includeUppercase ? uppercaseChar : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChar : "";

        if(length <= 0){
            return '(password legth must be at least 1)';
        }

    return '';
}

const password = generatePassword(passwordLength, includeLowercase, 
    includeUppercase, includeNumbers, includeSymbols);