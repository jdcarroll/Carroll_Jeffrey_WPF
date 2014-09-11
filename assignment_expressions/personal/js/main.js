var walkDog = prompt("How many times a day do you walk your dog");
var dogAge = prompt("how old is your dog?");
var response = walkDog * dogAge;
console.log("You really should be waling your dog" + response + "this many times a day")




function Name() { // This is a function that I was testing the ability of , functions, but more so grabbing
// elements from the DOM or Document Object Model which essentially means the html document
    var firstName = document.getElementById("fname").value;// so for javascript you start with the document and
        // at that point with document.getElementById() you are searching in the document for an html element with an
        // id that equals what in the () in this case it is search for a string called fname and putting it into
        // a variable called firstName
    var lastName = document.getElementById("lname").value;// so for javascript you start with the document and
        // at that point with document.getElementById() you are searching in the document for an html element with an
        // id that equals what in the () in this case it is search for a string called lname and putting it into
        // a variable called lastName
    console.log(firstName); // I am then taking the variable firstName and printing out the users input onto the console
    console.log(lastName); // I am then taking the variable lastName and printing out the users input onto the console
}
