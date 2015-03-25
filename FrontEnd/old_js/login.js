/**
 *@author Ross Ellingworth
 * 
 * This is a class that reads in the values 
 * from the HTML Document and compares it to 
 * known values (ie: Password, and Username). 
 */

/**
 * @author Colin Sheehan
 *
 * This is a class that reads the buy
 * search values
 */


/**
 *The initial function that loads on startup
 *  
 */
function init(){
	registerEventHandlers();	
}

/**
 *The event handlers for the web app 
 */
function registerEventHandlers(){
	var loginButtton;
	var signupButton;	
	
	loginButton = document.getElementById("loginButton");
    loginButton.addEventListener("click", function() { 
    	sendLoginPost();
    }, true);

    signupButton = document.getElementById("signupButton");
    signupButton.addEventListener("click", function() {
    	sendSignupPost();
    }, true);


}
