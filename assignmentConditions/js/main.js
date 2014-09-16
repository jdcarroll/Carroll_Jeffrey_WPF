function clearcontenthtml() {
    var request = new XMLHttpRequest();
    request.open('GET', 'data/clear.html');
    request.onreadystatechange = function () {
        if ((request.readyState === 4) && (request.status === 200)) {
            var clearContent = request.response;
            document.getElementById("content").innerHTML = clearContent;
        }
    };
    request.send();
}

function industry() {
    var request = new XMLHttpRequest();
    request.open('GET', 'data/industry.html');
    request.onreadystatechange = function () {
        if ((request.readyState === 4) && (request.status === 200)) {
            var personalContent = request.response;
            document.getElementById("content").innerHTML = personalContent;
        }
    };
    request.send();
}

function wacky() {
    var request = new XMLHttpRequest();
    request.open('GET', 'data/wacky.html');
    request.onreadystatechange = function () {
        if ((request.readyState === 4) && (request.status === 200)) {
            var industryContent = request.response;
            document.getElementById("content").innerHTML = industryContent;
        }
    };
    request.send();
}

function personal() {
    var request = new XMLHttpRequest();
    request.open('GET', 'data/personal.html');
    request.onreadystatechange = function () {
        if ((request.readyState === 4) && (request.status === 200)) {
            document.getElementById("content").innerHTML = request.response;
        }
    };
    request.send();
}

function wattage() {
    var watts = document.getElementById("wattage").value;
    var amps = document.getElementById("amps").value;
    var volts = document.getElementById("volts").value;
    var blankArray = [];

    if (watts == ""){
        if ((amps != "") && (volts != "")){
            var result = amps * volts;
            document.getElementById("update").innerHTML = "Your wattage calculation: " + result.toFixed(2);
        }else {
            blankArray.push(" watts");
            document.getElementById("update").innerHTML = "You did not enter anything for " + blankArray;
        }
    }
    if (amps == "") {
        if ((watts != "") && (volts != "")) {
            var result = watts / volts;
            document.getElementById("update").innerHTML = "Your amps calculation: " + result.toFixed(2);
        } else {
            blankArray.push(" amps");
            document.getElementById("update").innerHTML = "You did not enter anything for " + blankArray;
        }
    }
    if (volts == "") {
        if ((watts != "") && (amps != "")) {
            var result = Math.sqrt(watts * amps);
            document.getElementById("update").innerHTML = "Your volts calculation: " + result.toFixed(2);
        } else {
            blankArray.push(" amps");
            document.getElementById("update").innerHTML = "You did not enter anything for " + blankArray;
        }
    }

}

function calculateBandwidth() {
    var bandwidth = document.getElementById("bandwidth").value;
    var devices = document.getElementById("devices").value;


}

function populate(){
    var activityList = ["Streaming Media", "Internet", "Wireless Home Network"];
    var sel = document.getElementById("activity");
    var output = "<option>";
    for ( var i = 0; i < activityList.length; i++ ) {
        var opt = document.createElement('option');
        opt.innerHTML = activityList[i];
        opt.value = activityList[i];
        sel.appendChild(opt);
    }
    output += "</option>"
}
