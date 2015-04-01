var mongoose = require('mongoose');

var Schema   = mongoose.Schema;
var ObjectId = Schema.ObjectId;


/**
*Textbook Schema
**/
var textbookSchema = new Schema({
	
	title: String,
	author: String,
	edition: String,
	publisher: String,
	price: String,
	yearPublished: String,
	isbn10: String,
	username: String,
	email: String,
	course: String,
	created_at: Date
});




// textbookSchema.prototype.likeTitleSearch = function (title) {

// this.where({ title: new RegExp('^' + title) })
// return this;

// };

// textbookSchema.methods.isbnSearch = function (cb) {

// var promise = textbookSchema.methods.isbnSearchPromise();

// promise.then(function(textbooks){
// 	textbooks.forEach(function(textbook){
// 		console.log(textbook.name);
// 	});
// }).error(function(error){
// 	console.log(error)
// })
// };

module.exports = mongoose.model('textbooks', textbookSchema);
