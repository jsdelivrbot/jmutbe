/**
 *@author Ross Ellingworth
 * 
 * This is a class that reads in the values 
 * from the HTML Document and sends it via post to a PHP API. 
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
	
	var login_button;
	var signUp_button;
	
	
	login_button = document.getElementById("createPost_Button");
    login_button.addEventListener("click", function() { 
    phpCreatePostCall();}, true);
    
	
	
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

function phpCreatePostCall(){

	var Title = getInput("createPost_Title");
	var Author = getInput("createPost_Author");
	var ISBN = getInput("createPost_ISBN");
	var Class = getInput("createPost_Class");
	var Major = getInput("createPost_Major");
	var Price = getInput("createPost_Price");
	var uri = "http://localhost/createPost.php" + urlParamBuilder(Title,Author,ISBN,Class,Major,Price);
	var url = encodeURI(uri);
    document.location.href = url;


}

//Builds the URL
function urlParamBuilder (title, author, isbn, clss, major, price) {
	
	var url = "";
	
	url = "?title=" + title + "&&author=" + author + "&&isbn=" + isbn + "&&class=" + clss + "&&major=" + major + "&&price=" + price;

	return url;
}
