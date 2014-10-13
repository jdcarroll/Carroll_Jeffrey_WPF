/**
 * Created by Jeffrey Carroll on 9/19/14. Web Programming Fundamentals Functions Worksheet
 */
var width = prompt(" What is your width");
var height = prompt("What is your height");
var radius = prompt("what is the radius");

function calArea(w,h){

    var a = w * h;
    console.log("The area of Your square = " + a);

}

calArea(width,height);

function circumference(r){
    C = 2*(3.14)*r;
    console.log("Your circumference = " + C);
}

circumference(radius);

function beeSting(weight){
    var death = weight * 8.66666666667;
    console.log("If you were stung by a bee " + death.toFixed(0) + " times you would die");
}

var weight = prompt("What is your weight");

beeSting(weight);