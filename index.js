// using math functions in JavaScript.
// calculate the the hypotenuse in right angle triangle.

// declare the variables first.
let a;
let b;
let c;

// get input by prompt. line number 10 to 29
/*do{
    window.alert("Enter the number for the inputs");
    
//     // get the input from the user using prompt
     a = window.prompt("Enter side A ");
    
 } while (isNaN(a));

 if (a != null){

    b = window.prompt("Enter side B ");    

 }

// // claculate the hypoteneuse
c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

// // bring the out put into the index web page.
document.getElementById("Answer").innerHTML = "Hypotenuse of the right angle rectangle : " + c; */

// lets we look the get inputs from the html input boxes.line number 33 to 42

document.getElementById("submitButton").onclick = function(){
    a = document.getElementById("sideA").value;
    a = Number(a);
    
    b = document.getElementById("sideB").value;
    b = Number(b);
    
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("cLabel").innerHTML = "value of side C : "+ c;
}