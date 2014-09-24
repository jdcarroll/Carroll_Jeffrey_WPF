// Jeff Carroll Web Programming fundamentals Wacky Functions

function chooseFruit(f){ // creating a normal function

    for (var i =0; i < fruitBowl.length; i++){ // setting condition to loop through the fruit bowl array
        if (f === fruitBowl[i] ){ // setting condition on what to do when the loop hit a type of fruit in the array
            console.log("You chose " + f + " which is in the fruit bowl and has an index # of " + i); // the message sent
            break
        }
    }
    if (f != fruitBowl[i]) { // this runs if the for loop does not find anything in the array to
        console.log("choose something in the bowl please we are out of your item"); // the message out to the user
        // that we don't have there fruit
    }
}
var fruitBowl = ["Lime", "Blueberries", "grapes", "plantains", "corn", "coconuts"]; // the fruit bowl array
var fruit = prompt("choose a fruit: " +fruitBowl); // asking the user to pick a fruit

chooseFruit(fruit); // calling the function