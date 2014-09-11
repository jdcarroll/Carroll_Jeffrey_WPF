var imgSize = prompt("How many pixels are in you img?"); // I am asking the user for the size of the image
var screenWidth = window.innerWidth;// I am using this to calculate the window size
var screenHeight = window.innerHeight;// This the height of the window not the screen size of the monitor
var screenSize = screenHeight * screenWidth;
var imgFit = Math.round(screenSize / imgSize);
console.log("your Screen Size equals: " + screenSize + "px and you can fit " + imgFit + " copies of your image into " +
    "your current window.");
