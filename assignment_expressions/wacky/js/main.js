// Assignment Expressions by Jeff Carroll on 9-10-14

var name = prompt("What is your name?"); // I am asking the user his name to call him specifically and personally through
// the process
var weapon = ["Boxing Gloves", "Brass Knuckles", "nunchucks"];
var protection = prompt("What would you like to use for protection? " + weapon);
var punch = Number(prompt("You are in a fight how many times do you want to punch your opponent?")); // I am asking for
// a number
var sure = String(prompt("Are you sure?")); // I m asking for a string because they are about to fight mike tyson and I
// want to know if they are serious
var mikeTysonPunches = punch * 10000; // I am calculating the number of times Mike Tyson will be able to punch you for
// every time you attempt to punch him
var weak = punch / punch; // This here is a reality check if you think you are going to ba able to punch mike tyson
// more than once you need a reality check
    if (sure == "yes" || sure == "y"){ // I know that we are suppose to avoid using if statements until after we go over
    // them on Friday but I got curios and I also wanted to try the or operator
        alert("You are a where you are fighting Mike Tyson Right? " + "I can't believe you tried to punch Mike " +
            "Tyson " + punch + " times."); // I am trying illustrate the importance of non violence here I thought using
            // Mike Tyson as an example would be good to illustrate this
        console.log("You are a where you are fighting Mike Tyson Right?" + "I can't believe you tried to punch Mike " +
            "Tyson " + punch + " times and with " + protection + " non the less.");// I am trying illustrate the importance
            // of non violence here I thought using Mike Tyson as an example would be good to illustrate this
    } else {
        alert("your not as dumb because your opponent is Mike Tyson but you loose anyway. I still can't believe " +
            "you said you would punch Mike Tyson " + punch + " times." ); // here is where I respond when they say that
            // they are not sure whether they want to punch someone or not Non Violence
        console.log("your not as dumb because your opponent is Mike Tyson but you loose anyway. I still can't believe " +
            "you said you would punch Mike Tyson " + punch + " times.");// here is where I respond when they say that
        // they are not sure whether they want to punch someone or not Non Violence
    }
console.log("You may have attempted to punch Mike Tyson " + punch + " times. However the truth is you really only got " +
    "him " + weak + " time and he punched you " + mikeTysonPunches + " times but he only need 1 punch"); // This is the
    // overall summary of what has happened during this process
alert("You may have attempted to punch Mike Tyson " + punch + " times. However the truth is you really only got " + weak +
    "him time and he punched you " + mikeTysonPunches + " times but he only need 1 punch"); // This is the
// overall summary of what has happened during this process

/* If we need to do further examples of if statements later on something that can be added here is a second if statement
using logic to calculate "No" on the sure variable or "I don't want to fight" */