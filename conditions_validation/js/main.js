var min = prompt("Please enter a minimum number");
var max = prompt("Please enter a Maximum number");

// test to see that a number was actually entered!


// Validate Min
if (min === ""){
    console.log("You did not enter a number!!!");
    min = prompt("Please enter a minimum number");
}

//isNAN
if (isNaN(min) || min === ""){
    console.log("You did not enter a number!!!");
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