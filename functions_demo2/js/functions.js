/**
 * Created by jeffreycarroll on 9/22/14.




// Normal function
function functionName(parameters){
    // code to execute
    // return value
}

//anonymous function

var functionName() = function(parameters){
    // code to execute
    // return value
}



// regular function
var base = prompt("what is the base?");
var height = prompt("what is the height?");
var a = trangleAngle(base,height);
var a2 = triangleA(base,height);
console.log(a);
console.log(a2);

function trangleAngle(b,h){
    var area = .5*b*h;
    return area;
}

//anonymous function

var triangleA = function (b,h) {
    var area = .5*b*h;
    return area;
};



// Arrays

var testArray = ["limes", "blueberries", "grapes", "papaya"];

console.log(testArray.length); // array number of items in an array
console.log(testArray);

// push (add) a new item to the end of an array
testArray.push("carrots");
testArray.push("corn");
testArray.push("tomatoes");
testArray.pop();
console.log(testArray);

 */

function rectangleArea(l,w){
    var area = l * w;
    return area;
}

var perimeter = function(w,l) {
    var p = 2*w + 2*l;
    return p;
}

var a3 = rectangleArea(4,5);

var p2 = perimeter(45,7);

console.log("area = " + a3);
console.log("perimeter = " + p2);

