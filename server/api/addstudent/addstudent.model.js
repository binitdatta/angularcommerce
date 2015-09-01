'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AddStudentSchema = new Schema({
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
  username: { type: String, required: false },
  grade: { type: String, required: false }
});



module.exports = mongoose.model('AddStudent', AddStudentSchema);