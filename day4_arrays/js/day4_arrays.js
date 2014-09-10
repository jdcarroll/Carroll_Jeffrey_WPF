/*
   WPF Day 4
   Arrays
 */

// Create an array

var avengerNames = ["Iron Man ", "Hulk ", "Captain America ", "Thor ", "Black Widow ", "Hawkeye ", "Spider Man ",
    "Parthenon"]; // This is an Array with corresponding index numbers running from 0 - x. X = the number of items
    // in the The array avengerNames so in this case x = 7

// Print the array to the js console
console.log(avengerNames);

// access a specific item in an array
console.log(avengerNames[0]);

// change a item in an array
avengerNames[1] = "Jeff Carroll";

// Print the array to the js console again
console.log(avengerNames);

// Print a specific item in array to the js console again
console.log(avengerNames[1]);

//find out the length of an array
console.log(avengerNames.length);

var name = prompt("What is your name");

console.log(name);

var room = [prompt("length"), prompt("width")];

var area = Number(room[0]) * Number(room[1]);// This is called casting.. it converts or verify's that a number is a
// number or a string is a string

console.log(area);
alert(area);



