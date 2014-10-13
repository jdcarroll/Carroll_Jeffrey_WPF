
var min = prompt("Please enter a minimum number");
var max = prompt("Please enter a Maximum number");

// test to see that a number was actually entered!


// Validate Min
/*
if (min === "") {
    console.log("You did not enter a number!!!");
    min = prompt("Please enter a minimum number");
}

//isNAN
if (isNaN(min) || min === ""){
    console.log("You did not enter a number!!!");
    min = prompt("Please enter a minimum number");
}
*/

while(isNaN(min) || min === ""){
    min = prompt("Please enter a minimum number");
}

// Validate Max
if (max === ""){
    console.log("You did not enter a number!!!");
    max = prompt("Please enter a Maximum number");
}
//isNAN
if (isNaN(max) || max === ""){
    console.log("You did not enter a number!!!");
    max = prompt("Please enter a Maximum number");
}

// Math.random()*(max-min)+min

var rand = Math.round(Math.random()*(max-min)+min);

console.log(rand);



var num1 = 9.55567898797645376564782352521263613

console.log(num1);
console.log("This is Math.round " + Math.round(num1));
console.log("This is Math.ceil " + Math.ceil(num1));
console.log("This is Math.floor " + Math.floor(num1));






























