// Jeff Carroll, 09/08, WPF, section 0, day3LabExpressions.

//Calculate number of slices that each person eats
var pizzas = 13; // integer
var slices = 8; // integer
var people = 32; // integer

// the actual calculation of pieces per person
var eachPerson = (pizzas * slices) / people;
// My output magic
console.log("Each person ate " + eachPerson + " slices of pizza at the party");

// Number 2
// Calculating the number of slices for pippy "I mean Sparkly" :)
pizzas = 4;
people = 10;
slices = 8;

//multiply slices by pizzas then modulo the people

var sparky = (slices * pizzas) % people;

console.log("Sparky got " + sparky + " slices of pizza");

//Number 3 Average Shopping Bill
// Grocery Bill Array
var groceries = [200, 220, 175, 150, 120];
// Grab the total of the array
var total = groceries[0] + groceries[1] + groceries[2] + groceries[3] + groceries[4]; /* The problem with this method is that
I see is the assumption that this array stays with 5 items in it.  Obviously for the assignment this works but for real life
 "I guess" this would be why "Loops are important"*/
// Calculate the average the the groceries array
var average = total / groceries.length;
console.log("You have spent a total of $" + total + " on groceries over 5 weeks. That is an average of $" + average + " " +
    "per week");

// Variables and Discounts
var originalPrice = 45;
var discountPercentage = .3;
var percentage = .7;
var item = "Dog Collar";
var salesTax = .06;
var displayPercentage = discountPercentage * 100;
// Calculate the Taxes
var withOutTax = originalPrice * percentage;
var withTax = (withOutTax * salesTax) + withOutTax;
console.log("Your " + item + " was originally $" + originalPrice + " but after a " + displayPercentage + "% discount, " +
"it is now $" + withOutTax + " without tax");


