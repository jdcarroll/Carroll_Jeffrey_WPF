// Assignment Expressions by Jeff Carroll on 9-10-14

var walkDog = prompt("How many times a day do you walk your dog?"); // I am asking the user for how many times the dog
// goes for a walk per day.
var dogBreed = ["German Shepard", "Golden Retriever", "Husky", "belgian malinois"];
var dogBreedPrompt = prompt("Choose your dog Breed: " + dogBreed);
var dogAge = prompt("how old is your dog?"); //I then proceed to ask how old is your dog
var response = walkDog * dogAge + 23; // To throw the user off and have a little fun I make it so there is no way the website
// gives you positive feed back which only ends up helping the doggies go outside more
console.log("Because you have a dog breed of " + dogBreedPrompt + " You really should be walking your " +
    "dog " + response + " this many times a day"); // This is where I tell the user that he or she needs to walk the dog more




function Name() { // I was curious about how to effect the Dom or Document Object Model in this case Im grabbing
// elements from the DOM or Document Object Model which essentially means the html document
    var firstName = document.getElementById("fname").value;// so for javascript you start with the document and
        // at that point with document.getElementById() you are searching in the document for an html element with an
        // id that equals what is in the () in this case it is searching for a string called fname and putting it into
        // a variable called firstName
    var lastName = document.getElementById("lname").value;// so for javascript you start with the document and
        // at that point with document.getElementById() you are searching in the document for an html element with an
        // id that equals what is in the () in this case it is searching for a string called lname and putting it into
        // a variable called lastName
    console.log(firstName); // I am then taking the variable firstName and printing out the users input onto the console
    console.log(lastName); // I am then taking the variable lastName and printing out the users input onto the console
}

/*
var bubbles = prompt("would you like bubbles in your bath?");


if (bubbles == "yes" || bubbles == "y") {
    var greeting = "Bubbles makes an ordinary day extraordinary!"
} else {
    greeting = "Simple is very zen."
}

alert(greeting);
*/