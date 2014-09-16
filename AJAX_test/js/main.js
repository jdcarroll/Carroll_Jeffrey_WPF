function ajax() {
    var request = new XMLHttpRequest();
    request.open('GET', 'data/data.html');
    request.onreadystatechange = function() {
        if ((request.readyState === 4) && (request.status === 200)) {
            console.log(request.response)
            console.log(request)
        }
    };
    request.send();
}


