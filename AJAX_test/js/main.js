
   var request = new XMLHttpRequest();
   request.open('GET', 'data/data.txt');
   request.onreadystatechange = function() {
       if ((request.readyState === 4) && (request.status === 200)) {
           var modify = document.getElementsByTagName("li");
           modify[2].innerHTML = request.responseText;
           console.log(request);
       }
   }
   request.send();



