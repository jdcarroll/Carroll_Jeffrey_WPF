// Jeff Carroll Web Programming fundamentals Personal Functions

// Closet Calculation... What are you going to wear today? shirts and pants


var shirts = ["blue button down", "t-shirt", "tank-top", "Sweatshirt"]; // array of shirts in "closet"
var pants = ["jeans", "cargo-shorts", "khakis", "black cargo-shorts"];// array of pants in "closet"
var chooseShirts = prompt("Choose a shirt to wear today " + shirts); // prompt for choice of shirt
var choosePants = prompt("Choose a pair of pants to wear today " + pants); // prompt for choice of pants
var hat = prompt("are you going to wear a hat?");

function closet(s, p, h) { // function of closet
    for (var i = 0; i < shirts.length; i++) { // logic to loop through array shirts
        if (s === shirts[i]) { // logic to determine if chosen shirt is available
            console.log("good choice you chose " + s + " which has and index of " + i); // message when choosing available clothing
            break
    } // end of shirts for loop
        } if (s != shirts[i]) { // logic to determine if chosen shirt is unavailable
            console.log(" please choose something that is in the list your item \""  + chooseShirts +  "\" is in the laundry"); // message
            // when choosing unavailable clothing
        }

    for (var j = 0; j < pants.length; j++) {  // logic to loop through array pants
        if (p === pants[j]) { // logic to determine if chosen pant is available
            console.log("good choice you chose " + p + " which has and index of " + j); // message when choosing available clothing
            break
    } // end of pants for loop
        } if (p != pants[j]) { // logic to determine if chosen pant is unavailable
            console.log(" please choose something that is in the list your item \"" + choosePants + "\" is in the laundry");// message
            // when choosing unavailable clothing
        }
    if (h === "yes"){ // logic if they choose to wear a hat
        console.log("hats are a good choice"); // message for hat
    } else if (h === "no"){ // logic if they choose not to war a hat
        console.log("Its not always necessary to wear a hat"); // message for not wearing a hat
    }
}

closet(chooseShirts, choosePants, hat); // calling the function closet()













