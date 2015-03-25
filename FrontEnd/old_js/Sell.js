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

	//these variables may not be needed
	var title = getInput("Title");
	var author = getInput("Author");
	var isbn = getInput("ISBN");
	var Class = getInput("Course");
	var major = getInput("Department");
	var price = getInput("Price");

	var listResult = ('<section><br><p><b>Title:</b> ' + $("#Title").val() + '</p>' + 
					'<p><b>Author:</b> ' + $("#Author").val() + '</p>' +
					'<p><b>ISBN:</b> ' + $("ISBN").val() + '</p>' + 
					'<p><b>Course:</b> ' + $("#Department").val() + $("#Course").val() + '</p>' +
					'<p><b>Price:</b> ' + $("#Price").val() +'</p></section>');


	
	if (isbn != "" && price != ""){

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
		swal("Oops...", "Please make sure ISBN and Price are provided", "error");
	}
}