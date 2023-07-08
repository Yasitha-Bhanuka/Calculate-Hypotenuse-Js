// using math functions in JavaScript.
// calculate the the hypotenuse in right angle triangle.

// declare the variables first.
let a;
let b;
let c;


do{
    window.alert("Enter the number for the inputs");
    
    // get the input from the user using prompt
    a = window.prompt("Enter side A ");
    
} while (isNaN(a));

if (a != null){

    b = window.prompt("Enter side B ");    

}

// claculate the hypoteneuse
c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

// bring the out put into the index web page.
document.getElementById("Answer").innerHTML = "Hypotenuse of the right angle rectangle : " + c; 