var imgSize = prompt("How many pixels are in you img?"); // I am asking the user for the size of the image
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var screenSize = screenHeight * screenWidth;
var imgFit = Math.round(screenSize / imgSize);
console.log("your Screen Size equals: " + screenSize + "px and you can fit " + imgFit + " copies of your image into " +
    "your current window.");
