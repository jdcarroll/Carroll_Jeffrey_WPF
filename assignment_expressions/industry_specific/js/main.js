var imgHeight = Number(prompt("What is the height of your image?")); // I am asking the user for the height of the image.

var imgWidth = Number(prompt("What is the width of your image?")); // I am asking for the width of the image

var screenWidth = window.innerWidth;// I am using this to calculate the window size.

var across = screenWidth / imgWidth;// I am attempting to calculate how many times the image goes across the screen

var screenHeight = window.innerHeight;// This the height of the window not the screen size of the monitor.

var down = screenHeight / imgHeight;// Im attempting to calculate how many times the image goes down the screen

var screenSize = screenHeight * screenWidth; // This is where the actual calculation happens.

console.log("your Screen Size equals: " + screenSize + "px and you can fit the image across the " +
    "screen " + across + " amount of times.  You can fit the img down the screen " + down + " amount of times");
    /* I am echoing out the results of the calculation to the console.*/
