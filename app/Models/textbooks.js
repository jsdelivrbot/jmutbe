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
	course: String
});




textbookSchema.methods.isbnSearch = function (isbn, cb) {

// var promise = this.model('textbooks').find().exec;
// return promise;

// this.model('textbooks').find().lean().exec(function (err, textbook) {
//   if (err) return console.error(err);
//   //output = results;
//   console.log("in the data return callback" + textbook);
//   return textbook;
// });

//this.model('textbooks').find({ isbn10: this.isbn10 }, cb)

// this.model('textbooks').find({ isbn10: this.isbn10 }, callback(err, results)
// 	if (err) {
// 		output = error;
// 	}
// 	else {
// 		output = results;
// 	}
//
//);

//this.model('textbooks').where('isbn10', this.isbn10).find(callback);

};

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
