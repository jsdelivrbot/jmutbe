//Load the user model
var User = require('../app/Models/users.js');
var Textbook = require('../app/Models/textbooks.js');
var Course = require('../app/Models/courses.js');
var sessions = require("client-sessions");
var session  = require('express-session');

module.exports = function(app, passport) {

	//CORS Middleware
	app.use(function(req, res, next) {

		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});

	//Client-Sessions Middleware
	// app.use(sessions({
	// 	cookieName: 'mySession',
	// 	secret: 'asijrnf239a#2!^543wklgm*776knfd',
	// 	duration: 24 * 60 * 60 * 1000,
	// 	activeDuration: 1000 * 60 * 5,
	// 	cookie: {
	// 		//domain: '.example.com',
 //    		//path: '/book', // cookie will only be sent to requests under '/book'
 //    		//maxAge: 60000, // duration of the cookie in milliseconds, defaults to duration above
 //    		//ephemeral: true, // when true, cookie expires when the browser closes
 //    		httpOnly: true, // when true, cookie is not accessible from javascript
 //    		secure: false // when true, cookie will only be sent over SSL. use key 'secureProxy' instead if you handle SSL not in your node process
 //    		 //change this when we move to a new domain
 //  		} 				
	// }));



	//Login Route
	app.post('/login', function(req, res, next) {

		var user = new User();
		user.username = req.body.username;
		user.password = req.body.password;
		
		

		User.findOne({}).where('username').equals(user.username).exec(function(err, result) {
			if (err)
				res.send(err);

			//If no result occurs username cannot be found
			if (!result){
				res.json({ message: "Cannot find that username"});
				//console.log("No username");
			}
			//If user passwords do not match then return true... which evaluates to false
			else if (!user.validPassword(req.body.password, result.password)) {
				res.json({ message: "Password and username do not match" });
				//console.log("Wrong Password");
			}

			else {
			// req.mySession.user = result.username;
			// req.mySession.email = result.email;
			// console.log(req.mySession.user);
			// console.log(req.mySession.email);
			req.session.user = result.username;
			req.session.email = result.email;
			console.log(req.session.user);
			console.log(req.session.email);
			res.json({ message: "has logged in" });

			}
		});

	 	// passport.authenticate('local-login', function(err, user, info) {
			// if (err) {
			//       return next(err); // will generate a 500 error
			//     }
			//     // Generate a JSON response reflecting authentication status
			//     if (! user) {
			//       return res.send({ success : false, message : 'authentication failed' });
			//     }
			//     return res.send({ success : true, message : 'authentication succeeded' });
			//   })(req, res, next);
	});

	//Sign-Up Route
	app.post('/signup', function(req, res, next) {
		
		var user = new User();
		user.username = req.body.username;
		user.password = user.generateHash(req.body.password);
		user.phone = req.body.phone;
		user.email = req.body.email;

		console.log(req.body.username);

		//Search for user to see if they already exist
		User.findOne({}).where('username').equals(user.username).exec(function(err, result) {
			if (err)
				res.send(err);
			//Find one returns null (unlike find which returns an empty array)
			if (result == null){
				//Save user if no others with that username exist
				user.save(function(err) {
					if (err)
						res.send(err);

					res.json({ message: 'user created!' });
				});
			}

			else {

				res.json({ message: 'username already exists'});
			}

		});




		// passport.authenticate('local-signup', function(err, user, info) {
		// 	if (err) {
		// 	      return next(err); // will generate a 500 error
		// 	    }
		// 	    // Generate a JSON response reflecting authentication status
		// 	    if (! user) {
		// 	      return res.send({ success : false, message : 'account creation failed' });
		// 	    }
		// 	    return res.send({ success : true, message : 'account creation succeeded' });
		// 	  })(req, res, next);
	});
	
	//logout
	app.post('/logout', function(req, res) {
		//req.mySession.reset();
		req.session.destroy();
		res.json({ message: 'You have been logged out'});
	});

	//MyPosts Route
	app.post('/book/myposts', function(req, res) {

		res.json({ message: 'myposts'});

	});


	//Search textbook route
	app.post('/book/search',isLoggedIn, function(req, res) {
		var textbook = new Textbook();
		var title = req.body.title;
		var author = req.body.author;
		var major = req.body.department;
		var courseNo = req.body.courseNo;
		var isbn = req.body.isbn;
		var query = null;

		//Values for textbook object
		textbook.title = req.body.title;  
		textbook.author = req.body.author;;
		textbook.price = req.body.price;
		textbook.course = req.body.department + " " + req.body.courseNo;
		textbook.isbn = req.body.isbn;

		//var regex = new RegExp('noodles', 'i'); //--Didn't work keep trying 

		// if (textbook.title != null){
		// 	query += Textbook.where('title').equals(textbook.title);
		// };

		// if (textbook.author != null){
		// 	query += Textbook.where('author').equals(textbook.author);
		// };

		// console.log(String(query));
		//Find Functionality - Note: Queries are part of the MODEL not the textbook object. Unlike saves which are saving the object.

		Textbook.find({}).where('title').equals(textbook.title).exec(function(err, result) {
			if (err)
				res.send(err);

			console.log("returning data");
			console.log(result);

			res.json({ "textbook":result });
			
		});

		//var text = 'Posted the ' + title + " " +author;
		//res.json({ message: 'hooray! welcome to our api!' });

		// returnedObj = textbook.isbnSearch();
		// console.log(textbook.isbnSearch());
		// res.json(textbook.isbnSearch());

	});

	//Add new textbook route
	app.post('/book/create',isLoggedIn, function(req,res) { 
//---------------------------------------------------This shit works-----------------------------------------------
		var title = req.body.title;
		var author = req.body.author;
		var major = req.body.department;
		var courseNo = req.body.courseNo;
		var isbn = req.body.isbn;

		//Textbook object based in the textbook schema
		var textbook = new Textbook(); 		
		textbook.title = req.body.title;  
		textbook.author = req.body.author;
		textbook.edition = req.body.edition;
		textbook.publisher = req.body.publisher;
		textbook.yearPublished = req.body.year;
		textbook.price = req.body.price;
		textbook.course = req.body.department + " " + req.body.courseNo;
		textbook.isbn10 = req.body.isbn;
		textbook.username = req.session.user;
		textbook.email = req.session.email;

		//Course object based on courses schema
		var course = new Course();
		course.course_title = req.body.department + " " +req.body.courseNo;
		course.department = req.body.department;
		course.course_no = req.body.courseNo;

		//creates a new course in the DB if it exists
		Course.findOne({}).where('course_title').equals(course.course_title).exec(function(err, result) {
			if (err)
				res.send(err);
			//Find one returns null (unlike find which returns an empty array)
			if (result == null){
				//Save user if no others with that username exist
				course.save(function(err) {
					if (err)
						res.send(err);

					res.json({ message: 'Course created!' });
				});
			}

		});

		// save the textbook and check for errors
		textbook.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'textbook created!' });
		});

		var text = 'Textbook added: ' + title;
		res.json({message: text});

	});

	//Takes the user to the main page and then they can do what they want from there.
	app.get('/', function(request, response){

		response.sendFile('./index.html');


	});





};

function isLoggedIn(req, res, next) {

	//if user us authenticated in the session carry on
	if (!req.session.user && !req.session.email) {
		res.json({message: "Please log in to use this feature"});
		console.log("Cookie invalid");
	}
	else {
		console.log("Cookie worked");
		next();
	}
}