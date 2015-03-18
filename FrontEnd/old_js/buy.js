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
	
	searchButton = document.getElementById("SearchButton");
    searchButton.addEventListener("click", function() { 
    	validateBuyInfo();
    }, true);
}




$(document).on('click', '#itemResults', function () {
    
	//var listResult = $(this).find('h4').text();

    var listResult = ('<section><br><p>' + $(this).find('#Title').text() + '</p>' + 
					'<p>' + $(this).find('#Author').text() + '</p>' +
					'<p>' + $(this).find('#ISBN').text() + '</p>' + 
					'<p>' + $(this).find('#Course').text() + 
					'<p>' + $(this).find('#Price').text() +'</p></section>');  

    swal({ 
			    html: true,	
			    title: "Textbook",
			    text: 
			   		listResult
		}); 
});







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
function validateBuyInfo(){
	var title = getInput("Title");
	var author = getInput("Author");
	var isbn = getInput("ISBN");
	var course = getInput("Course");

	//remove existing results from DOC, 
	var contentToRemove = document.querySelectorAll("#results");
	$(contentToRemove).remove(); 

	//conditional for sending required information
	if (title != "" || author != "" || isbn != "" || course != ""){
		sendBuyInfo();

		//scrolls the page to results
		$('html, body').animate({
        	scrollTop: $("#inputs").offset().top
    	}, 2000);		
	}
	
	else {
		swal("Oops...", "Please make sure at least one field is filled", "error");
	}
}
