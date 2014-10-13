console.log("hello world!!");

//declaration and assignment of variable
var score = 100;
var crazy = 2;
//change an existing variables value
score = 200;

//using expressions to change a variable's value
score += 10;
score += crazy;
score *= 2;

console.log(score);

/* Review Expressions
++ adds 1
-- subtracts 1
= assignment
+= increments
-= decrement
 */

var x = 2;
var wow = (2 + x)/2;

var x =2;
var y =0;
var z =1

x++;
z=x+5;
x+=y*z;
x--;


/* Data Types!!!!!
   don't change data types through variables.
   JavaScript is a loosely typed language */

var score = 5; // integer
var firstName = "Joe"; // string
var lastName = "Smith"; // string
var fullName = firstName+" "+lastName; //concatenation
var happy = true; // boolean
var grades = [80,90,100,90,100,110]; // Array

console.log(grades); // array access notation

score = "10"; // String Literal because you see the quotes

console.log("name:",fullName);

// More Concatenation
var total = "3"+4;
total += 1000+"Hello";
console.log(total, typeof total);