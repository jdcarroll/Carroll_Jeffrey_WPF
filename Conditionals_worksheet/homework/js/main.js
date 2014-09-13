function Temp() {
    var t = document.getElementById("temp").value;
    var fahrenheit = document.getElementById("F").checked;
    var celsius = document.getElementById("C").checked;
    var celsiusFromF;


    if (fahrenheit) {
        console.log("Fahrenheit!");
        var fahrenheitFromC = (t *(5/9) + 32);
        console.log(fahrenheitFromC);
    }else if (celsius) {
        console.log("Celsius!");
        celsiusFromF = (t - 32) * .56;
        console.log(celsiusFromF);
    }
}