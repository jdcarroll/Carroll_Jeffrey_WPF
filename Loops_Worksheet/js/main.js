/**
 * Created by jeffreycarroll on 9/17/14. Web Programing Fundamentals
 */

var hoursPerDay = prompt("How many hours do you spend working");
while (hoursPerDay === ""){
    hoursPerDay = prompt("How many hours do you spend working");
    console.log("user did not enter anything");
}
alert("I'll work too..");
for (var i = 0; i < hoursPerDay; i++){
    console.log("I am Working with my friend!");
}

var sleep = prompt("How long should we sleep?");
var j = 0;
do {
    console.log("sleep is nice");
    j++
} while ( j < sleep ); q