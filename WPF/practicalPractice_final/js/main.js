/**
 * Created by jeffreycarroll on 9/24/14.
 */
var radius = prompt("What is the radius of the circle?");

while ((radius === "") && (isNaN(radius))){
    radius = prompt("What is the radius of the circle?");
}

function cirArea(r) {
    var area = 2*r*3.14;
    return console.log("The area of your circle is: " + area);
}

cirArea(radius);