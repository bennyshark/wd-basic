const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}