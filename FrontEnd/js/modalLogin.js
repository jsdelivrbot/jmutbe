
var tabLogin = $('.login');
var tabSignup = $('.signUp');
var loginContent = $('.loginContent');
var signupContent = $('.signupContent');

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

function closeModal(){
	$('.modalWrapper').css('visibility', 'hidden');
}
