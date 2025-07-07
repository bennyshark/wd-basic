
let radius;
let circumference;


document.getElementById("mySubmit").onclick =function(){
    radius = document.getElementById("myText").value; /*
    Get the value from the text box then asign that to radius    */
    radius = Number(radius); /*
    then type cast the input which is radius as a number */
    circumference = 2 * Math.PI * radius; //calculate circumference
    document.getElementById("resultH3").textContent = circumference + "cm";
    //change the text content , to the circumference . text concatenation
}