// Paul Diederichs 	Web Programming Fundamentals   Conditionals(Industry)

//For Game Art students to calculate proportions. The student must input the first ratio starting with the denominator and the numerator.
// and then they would a value for either the denominator or numerator. And place x for the one. 
//Proportion calculator
function proportions() {
//telling the students it is a proportion calculator.

//user inputs the first ratio
//user inputs the the known numerator.

    var numerator1 = document.getElementById("numerator1").value;
    var denominator1 = document.getElementById("denominator1").value;
    var numerator2 = document.getElementById("numerator2").value;
    var denominator2 = document.getElementById("denominator2").value;
    var result = document.getElementById("update");
//validating user input.

        if (numerator1 === "") {

            numerator1 = document.getElementById("update").innerHTML = "Please enter a number for your known numerator.";
        }
// user inputs denominator.

//validating user input.

        if (denominator1 === "") {

            denominator1 = document.getElementById("update").innerHTML = ("Please enter a number for your known denominator");
        }

//run if they place the x in the first ratio.
    var wrongPlace;

    wrongPlace = (numerator1 === "x" && denominator1 === "x") ? alert("You have entered x for both the numerator and " +
        "denominator for the known ration. Please reload the page and try again. Dont you dare do the same " +
        "thing!") : console.log("Smart user.");

// telling user to enter x for the unknown value and to enter the know value for the desired ratio.

// user inputs of desired ratios.


//validating user input

    if (numerator2 === "") {

        numerator2 = document.getElementById("update").innerHTML = "Please enter a number or x for your desired ration.";
    }



    if (denominator2 === "") {

        denominator2 = document.getElementById("update").innerHTML = "Please enter a number or x for the desired ratio.";
    }


//Calculations here 
//checking for which term they want to know.

    if (numerator2 === "x") {

        var multiDivi = ((numerator1 * denominator2) / denominator1);

        var roundAnswer = Math.round(multiDivi);

        document.getElementById("update").innerHTML = roundAnswer;
    }
    else if (denominator2 === "x") {

        var multiDivi2 = ((denominator1 * numerator2) / numerator1);

        var roundAnswer2 = Math.round(multiDivi2);

        document.getElementById("update").innerHTML = "" + roundAnswer2;
    }
//checking that user did not input x for both values.

    if (numerator2 === "x" && denominator2 === "x") {
        document.getElementById("update").innerHTML = "" + roundAnswer2;
    }
}