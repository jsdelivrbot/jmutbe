var mongoose = require('mongoose');

var Schema   = mongoose.Schema;


/**
*Course Schema
**/
var coursesSchema = new Schema({

	course_title: String, //will be the department + courseNo, basically its an ID tag
	department: String,
	course_no: String,
	
});

coursesSchema.methods.ifCourseExists = function (cb) {
  
  var status = true;

  if (this.model('courses').find({ 'course_title': this.course_title }, cb) != null) {

  	status = true;

  }

  else {

  	status = false;

  }

  return status;
};

module.exports = mongoose.model('courses', coursesSchema);

