var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');;

/**
*User Schema
**/
var userSchema = new mongoose.Schema({

	username: String,
	password: String,
	phone: String,
	email: String,

});


//functions =========================================

//generate hash
userSchema.methods.generateHash = function(password) {

	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

//check password
userSchema.methods.validPassword = function(password, resultsPassword) {

	return bcrypt.compareSync(password, resultsPassword);
};

//Create model and expose it to the app
module.exports = mongoose.model('User', userSchema);
