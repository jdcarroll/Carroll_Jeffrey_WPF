// Paul Diederichs 	Web Programming Fundamentals   Conditionals(Industry)

//For Game Art students to calculate proportions. The student must input the first ratio starting with the denominator and the numerator.
// and then they would a value for either the denominator or numerator. And place x for the one. 
//Proportion calculator

//telling the students it is a proportion calculator.

alert("This is a proportion calculator");

//user inputs the first ratio
//user inputs the the known numerator.

var numerator1 = prompt("Enter the known numerator");

//validating user input.

if (numerator1 === "") {

	numerator1 = prompt("Please enter a number for your known numerator.");
}

console.log(numerator1);
// user inputs denominator.

var denominator1 = prompt("Enter known denominator");

//validating user input.

if(denominator1 === "") {

	denominator1 = prompt("Please enter a number for your known denominator");
}

console.log(denominator1);

//run if they place the x in the frist ratio.
var wrongPlace;

 wrongPlace = (numerator1 === "x" && denominator1 === "x") ? alert("You have entered x for both the numerator and denominator for the known ration. Please reload the page and try again. Dont you dare do the same thing!") : console.log("Smart user.") ;

// telling user to enter x for the unknown value and to enter the know value for the desired ratio.

alert("Enter known value of the desired ratio and enter x for the unknown value.(the answer is rounded.)")

// user inputs of desired ratios.

var numerator2 = prompt("Please enter the numerator for the desired ratio.");

//validating user input

if(numerator2 === "") {

	numerator2 = prompt("Please enter a number or x for your desired ration.");
}

console.log(numerator2);

var denominator2 = prompt("Please enter the denominator for the desired ratio.");

if(denominator2 === "") {

	denominator2 = prompt("Please enter a number or x for the desired ratio.");
}

console.log(denominator2);


//Calculations here 
//checking for which term they want to know.

if (numerator2 === "x") {

	var multiDivi = ((numerator1 * denominator2) / denominator1) ;

	var roundAnswer = Math.round(multiDivi);

	alert("Your numerator is " + roundAnswer)
	
	console.log(roundAnswer);
}
else if(denominator2 === "x") {

	var multiDivi2 = ((denominator1 * numerator2) / numerator1);

	var roundAnswer2 = Math.round(multiDivi2);

	alert("Your denominator is " + roundAnswer2);

	console.log(roundAnswer2);
}
//checking that user did not input x for both values.

if(numerator2 === "x" && denominator2 === "x") {

	alert("You have entered x for both the numerator and denominator for the desired ration. Please reload the page and try again. Dont you dare do the same thing!");

}
