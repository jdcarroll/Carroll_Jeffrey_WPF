
   var request = new XMLHttpRequest();
   request.open('GET', 'data/data.txt');
   request.onreadystatechange = function() {
       if ((request.readyState === 4) && (request.status === 200)) {
          console.log(request.responseText);
       }
   };
   request.send();

