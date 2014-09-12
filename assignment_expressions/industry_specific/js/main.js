// Assignment Expressions by Jeff Carroll on 9-10-14

var calculationArray = ["PDF ", "JPG ", "GIF ", "EPS ", "PNG "];

var imagetype = prompt("please choose from the following the type of file: " + calculationArray)

var imgHeight = Number(prompt("What is the height of your image?")); // I am asking the user for the height of the image.

var imgWidth = Number(prompt("What is the width of your image?")); // I am asking for the width of the image

var screenWidth = window.innerWidth;// I am using this to calculate the window size. I don't directly ask the user for this
// but it is gathered up when the window is loaded

var across = Math.floor(screenWidth / imgWidth);// I am attempting to calculate how many times the image goes across the screen

var screenHeight = window.innerHeight;// This the height of the window not the screen size of the monitor.

var down = Math.floor(screenHeight / imgHeight);// Im attempting to calculate how many times the image goes down the screen

var screenSize = screenHeight * screenWidth; // This is where the actual calculation happens.

console.log("Your screen width is equal to " + screenWidth + "px and your screen height is equal to " + screenHeight + "px Making " +
    "your total Screen Size equal to: " + screenSize + "px^2 and you can fit the " + imagetype + " image across the " + "screen " + across + " times.  " +
    "You can fit the " + imagetype + " image down the screen " + down + " times"); /* I am echoing out the results of the calculation
    to the console.*/
