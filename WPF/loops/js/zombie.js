
var numZombies = 1;
var numBites = 4;
var days = 8;
// Two thing that are being calculated: day and number of zombies
for (var i = 1; i <= days; i++){ // calculate the number of days
    var newZombies = numZombies * numBites; // Calculate the number of zombies
    numZombies = numZombies + newZombies; // Calculate the number of zombies
    console.log("there are " + numZombies + " zombies on day # " + i + "!"); // spit out them both
}

var names = [ "Pippy", "Scooby", "marmaduke", "snoopy",];

for (var i = 0; i < names.length; i++){
    console.log("you are adorable, " + names[i] + "!");
}