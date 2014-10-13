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

function login() {
    var userName = document.getElementById("userName").value;
    var userPassword = document.getElementById("userPassword").value;
    var dataBaseUser = "superSecretUser";
    var dataBasePassword = "superSecretPassword";

    if (userName === dataBaseUser && userPassword === dataBasePassword) {
        document.getElementById("message").innerHTML = "Welcome! You Login Successfully";
    }else if (userName === dataBaseUser)  {
        if (userPassword != dataBasePassword){
            document.getElementById("message").innerHTML = "Hey Buddy you got your password wrong";
        }
    }else {
        document.getElementById("message").innerHTML = "You fail";
    }

}

function tire() {
    var driverTire = document.getElementById("tired").value;
    var passengerTire = document.getElementById("tirep").value;
    var rearDriverTire = document.getElementById("tirerd").value;
    var rearPassengerTire = document.getElementById("tirerp").value;
    var standardPsi = 38;

    console.log(driverTire, passengerTire, rearDriverTire, rearPassengerTire);

    if ((driverTire === passengerTire) && (rearDriverTire === rearPassengerTire)) {
        document.getElementById("pressure").innerHTML = "Your Tires are good to go!!";
    }else if ((driverTire === passengerTire) && (rearDriverTire != rearPassengerTire)){
        document.getElementById("pressure").innerHTML = "You should get air in your back two tires to " +
            "match " + standardPsi +"psi";
    } else if ((driverTire != passengerTire) && (rearDriverTire === rearPassengerTire)) {
        document.getElementById("pressure").innerHTML = "You should get air in your front two tires to " +
            "match " + standardPsi +"psi";
    } else if ((driverTire != passengerTire) && (rearDriverTire != rearPassengerTire)) {
        document.getElementById("pressure").innerHTML = "You should get air in all four of your tires to " +
            "match " + standardPsi + "psi";
    }

}

