// Jeff Carroll Web Programming fundamentals Industry Functions

// Calculate browser information for displaying CSS

var dWidth = document.documentElement.clientWidth; // device width
var cookies = navigator.cookieEnabled; // a boolean determining that cookies are turned on
var browserEngine = navigator.product; // determining the browser engine
var browserType = navigator.userAgent; // determining the browser type


function deviceWidth(dW) { // function for device width

    // Screen Width Calculations
    if (dW <= 500){ // calculate device width for small devices
        console.log("Your Screen Size is set for small devices");// small device message
    } else if ((dW >= 501) && (dW <= 800)) { // calculate device width for medium devices
        console.log("your Screen Size is set for medium devices"); // medium device message
    } else if (dW >= 801){ // calculate device width for desktop devices
        console.log("You are working with a desktop"); // large device message
    } // end of device width calculation

    var windowArea = dW * document.documentElement.clientHeight; // calculate the area
    return console.log("Your window Area = " + windowArea + "px squared"); // console out the area
} // end of jeffDisplayCSS Function

function checkCookies(c){ // function for
    if (c){ // checking the boolean to verify that cookies are enabled
        console.log("your cookies are enabled and ready for use");// message if true
    } else { // logic if false
        console.log(" you need to change your browser settings to enable cookies"); // message if false
    } // end of cookie if statement
} // end of checkCookies()

function cssBrowserInfo(bE, bT){ // browser type function
    if (bE === "Gecko"){ // find out the engine first
        var engine = "Is Gecko it would be wise to use Gecko Specific CSS"; // assign message a variable
    }else if (bE === "Trident" ){ // If Trident
         engine = "Is Trident it would be wise to use Microsoft IE friendly CSS "; // assign message a variable
    }

    if ( (bT.indexOf("Safari") > -1) && ( bT.indexOf("Chrome") === -1 ) ){ // determine if browser is Safari
        var browser = "You are running Safari"; // assign message a variable
    } else if (bT.indexOf("OPR") > -1){// determine if browser is Opera
        browser = "You are running Opera"; // assign message a variable
    } else if (bT.indexOf("Chrome") > -1){ // determine if browser is Chrome
        browser = "You are running Chrome"; // assign message a variable
    }else if (bT.indexOf("Firefox") > -1){ // determine if browser is Firefox
        browser = "You are running Firefox" // assign message a variable
    }
    return console.log(browser + " and your browser engine " + engine); // return message

}
deviceWidth(dWidth); // call function
checkCookies(cookies); // call function
cssBrowserInfo(browserEngine, browserType); // call function
