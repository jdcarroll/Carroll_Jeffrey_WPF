var imgHeight = Number(prompt("What is the height of your image?")); // I am asking the user for the height of the image.

var imgWidth = Number(prompt("What is the width of your image?")); // I am asking for the width of the image

var screenWidth = window.innerWidth;// I am using this to calculate the window size.

var across = screenWidth / imgWidth;// I am attempting to calculate how many times the image goes across the screen

var screenHeight = window.innerHeight;// This the height of the window not the screen size of the monitor.

var down = screenHeight / imgHeight; 
var screenSize = screenHeight * screenWidth; // This is where the actual calculation happens.

var imgFit = Math.round(screenSize / imgSize); // calculate the size of th image and round to the closed whole number.

console.log("your Screen Size equals: " + screenSize + "px and you can fit " + imgFit + " copies of your image into " +
    "your current window."); // I am echoing out the results of the calculation to the console.
