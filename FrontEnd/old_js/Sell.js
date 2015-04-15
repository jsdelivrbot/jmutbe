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
	var searchButtton;	
	
	searchButton = document.getElementById("createPost_Button");
    searchButton.addEventListener("click", function() { 
    	validateSellInfo();
	}, true);	
}

/**$(document).keypress(function(e) {
    if(e.which == 13) {
    	validateSellInfo();
    }
});*/

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
function validateSellInfo(){

	//this creates the string object that will be presented in the alert box.
	var listResult = ('<section><br><p><b>Title:</b> ' + $("#Title").val() + '</p>' + 
					'<p><b>Author:</b> ' + $("#Author").val() + '</p>' +
					'<p><b>ISBN:</b> ' + isbn + '</p>' + 
					'<p><b>Course:</b> ' + $("#Department").val() + $("#Course").val() + '</p>' +
					'<p><b>Price:</b> ' + $("#Price").val() +'</p>' +
					'<p><b>Email:</b> ' + $("#Email").val() +'</p></section>'); 


	//If statement to ensure the required fields are not empty
	if (isbn != "" && price != "" && email != ""){

		swal({ 
			    html:true,	
			    title: "Create Post?",
			    text: 
			    	"This Post will be added to our database!" + 
			   		'<br>' +
			   		listResult, 
			   showCancelButton: true,   
			   confirmButtonColor: "#A5DC86",   
			   confirmButtonText: "Yes, create it!",   
			   closeOnConfirm: false 
			}, 

			function(){   
				swal("Post Created!", "Your textbook was added!", "success");
				sendSellInfo(); 
			});
	
		//swal("Post Created!", "Your textbook was added!", "success");
	}
	
	else {
		swal("Oops...", "Please make sure ISBN, Price, and Email are provided", "error");
	}
}