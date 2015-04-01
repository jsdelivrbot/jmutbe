
var tabLogin = $('.login');
var tabSignup = $('.signUp');
var loginContent = $('.loginContent');
var signupContent = $('.signupContent');
var logedIn;

$(document).on('click', '.login', function (){
	loginContent.css('visibility', 'visible');
	signupContent.css('visibility', 'hidden');
	tabSignup.attr('id', "");
	this.id = "activeTab";
});

$(document).on('click', '.signUp', function (){
	loginContent.css('visibility', 'hidden');
	signupContent.css('visibility', 'visible');
	tabLogin.attr('id', "");
	this.id = "activeTab"
});

$(document).ready( function (){
	if (logedIn == true) {
		$('.modalWrapper').css('visibility', 'hidden');
	};
});

function closeModal(){
	$('.modalWrapper').css('visibility', 'hidden');
	$('.modalContent').css('visibility', 'hidden');
	$('.loginContent').css('visibility', 'hidden');
	logedIn = true;
}

$(document).on('click', '.terms', function (){
	swal("Terms and Conditions", "The terms and conditions of this application state that all interactions between users are left under control to the users. We take take no responsibility for these interactions. All information provided by a user is public; meaning anyone who accesses the site can view the information provided by a user. Upon creation of a post, A time stamp is created to allow removal of the post after 30 days.");
});





