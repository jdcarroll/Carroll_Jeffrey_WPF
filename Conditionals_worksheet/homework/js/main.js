function Temp() {
    var temperature = Number(document.getElementById("Temp"));
    var fahrenheit = document.getElementById("F");
    fahrenheit.checked = true;
    var celsius = document.getElementById("C");
    celsius.checked = true;
    var celsiusFromF;


    if (fahrenheit) {
        console.log("Fahrenheit!");
        celsiusFromF = (temperature - 32)*(5/9);
        console.log(celsiusFromF);
    }else if (celsius) {
        console.log("Celsius!");
        var fahrenheitFromC = (temperature *(5/9) + 32);
        console.log(fahrenheitFromC);
    }
}