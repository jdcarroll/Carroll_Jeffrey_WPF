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

}
