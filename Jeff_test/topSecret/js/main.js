// script for Top Secret

//Make sure the user has the correct username and password.
// If the username doesn’t match then a specific message for that should be printed to the console.
// If the password doesn’t match a message should appear for that, etc. Only one error message should appear.

// Make variables for password and username.

// variable for username

var username = "Paul";
// variable for password
var password = "hi";


//function
function checking(form) {

	// user input
	var userInput = form.username.value;
	console.log(userInput);
	var passwordInput = form.pass.value;
	console.log(passwordInput);
	//validation

while (userInput === ""){

	alert("please enter a username");
	location.reload();
}

	//coditionals

if (username === userInput && passwordInput === password) {
	
		window.location.href = "welcome.html" ;
}
else if(username !== userInput){

	alert("The username is incorrect.");
	console.log("The username is incorrect.");
	location.reload();
}
else if(passwordInput !== password){

	alert("The password you inputted is incorrect.");
	console.log("The password you inputted is incorrect.");
	location.reload();
}

else if (username !== userInput && passwordInput !== passwordInput){

	alert("Both you username and password are incorrect.");
	console.log("Both you username and password are incorrect.");
	location.reload();
}
	
}




