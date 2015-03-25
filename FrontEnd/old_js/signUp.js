/**
 * @author Colin Sheehan
 * 
 * This is a class that reads in the values 
 * from the HTML Document and compares it to 
 * known values (ie: Password, and Username). 
 */

var usernamesArray = ["ellingrr", "sheehacm"];
var passwordsArray = ["same123", "stuff"];

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
	var signUp_button;
	
    signUp_button = document.getElementById("signUp_button");
    signUp_button.addEventListener("click", function() { 
    createNewInfo();}, true);	
}

/**
 *When passed a name of the DOM Element it returns its value
 *  
 * @param {Object} name - the name of the dom element
 */
function getInput(name){	
	var output ="";	
	output = document.getElementById(name).value;
	
	if (output == null){
		output ="";
	}
	return output;
}

/**
 *This is a function that adds to the global array when a new password and username is created
 */
function createNewInfo(){
	var username = getInput("username");
	var password = getInput("password");
	var location = usernamesArray.length;

	if (username != "" && password != ""){		
		//store the values
		usernamesArray[location] = username;
		passwordsArray[location] = password;
		
		//wipe text fields and prompt login
		window.alert("Information saved! PLease Login.");
		
		document.getElementById("username").value ="";
		document.getElementById("password").value ="";
		sendLoginPost();	
	}
	
	else {
		window.alert("Please make sure all fields are filled correctly!");
	}
}