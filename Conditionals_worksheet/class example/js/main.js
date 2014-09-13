// Basic Conditional

var oldEnough = false;

//if the child is old enough they can ride
if (oldEnough) {
    // if oldEnough is true, then you can ride.
    console.log("you can ride!");
} else {
    console.log("you can not ride. you are not old enough");
}


// Relational Conditional

// if the kid is tall enough, then they can ride

// kid must be 48 inches tall
var kidHeight = 40; //Kid height

var minHeight = 48; //minimum height

if (kidHeight >= minHeight) {
    console.log("you can ride"); // if the kid is taller than or equal to min height then kid can ride coaster
}else {
    console.log("you can not ride"); // if the kid is shorter than or the min height then kid can not ride coaster
}




// Conditional with an expressions

var childHeight = 42; //Kid Height

var minimumHeight = 48; // minimum height

var sneakerLift = 2; // sneaker lift

// are they tall enough with or without there shoes?

if (childHeight + sneakerLift >= minimumHeight) {
    console.log("You are tall enough even with shoes")
} else {
    console.log("You are not tall enough even with shoes")
}


// else

var personHeight = 38; // kid height

var requiredHeight = 48 // minimum height

if (personHeight >= requiredHeight) {
    console.log("you can ride");
} else {
    console.log("you can not ride because I don't like you")
}

// else if

var studentHeight = 46; // kid height

var leastHeight = 48 // minimum height

var heightWithParent = 45; // required

if (studentHeight >= leastHeight) {
    console.log("you can ride");
} else if (studentHeight >= heightWithParent) {
    console.log("you can ride with parent");
} else {
    console.log("they can not ride");
}

// based on budget can buy an ipad

var budget = 300;
var iPadPrice = 499.99;
var paycheck = 500

// If the price of the phone is less then our budget

if (iPadPrice < budget) {
    console.log("you can by an ipad");
}else {
    console.log("you cannot buy an ipad!");
}

// if our paycheck is over 600
if(paycheck > 600) {
    console.log("you can buy an ipad");
}else {
    console.log("you cannot buy an ipad");
}

// && operator means and

if (iPadPrice < budget && paycheck > 600) {
    console.log("you can buy an ipad");
}else {
    console.log("you cannot buy an ipad");
}

// || operator means or

var wonLottery = true;

if ((iPadPrice < budget && paycheck > 600) || wonLottery===true) {
    console.log("you can buy an ipad");
}else {
    console.log("you cannot buy an ipad");
}

// Ternary Conditions

var gpa = 48;

if (gpa>2.0){
    console.log("you can");
} else {
    console.log("you cant");
}

(gpa>2.0) ? console.log("you can") : console.log("you cant");