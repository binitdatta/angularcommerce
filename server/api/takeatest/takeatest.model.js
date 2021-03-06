'use strict';

var ExamQuestion = require('../examquestions/examquestions.model');

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var TakeATestSchema = new Schema({
  id: { type: String, required: false },
  examquestionid : {type: mongoose.Schema.Types.ObjectId, ref: 'ExamQuestion'},
  examquestiontext : { type: String, required: false },
  primaryanswer: { type: String, required: false },
  primarycorrectanswer: { type: String, required: false },  
  dependentanswer: { type: String, required: false },
  dependentcorrectanswer: { type: String, required: false },
  primaryevaluatedresult: { type: String, required: false },
  dependentevaluatedresult: { type: String, required: false },
  grade: { type: String, required: false },
  userid: { type: String, required: false },
  username: { type: String, required: false },
  useremail: { type: String, required: false },
  primaryexplanation:{ type: String, required: false },
  dependentexplanation:{ type: String, required: false },
  date:     { type: Date,   required: false, default: Date.now }
});

module.exports = mongoose.model('Takeatest', TakeATestSchema);
