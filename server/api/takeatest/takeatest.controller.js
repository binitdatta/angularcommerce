'use strict';
 var mongoose = require('mongoose');
var _ = require('lodash');
var Takeatest = require('./takeatest.model');
var ExamQuestion = require('../examquestions/examquestions.model');

// Get list of takeatests
exports.index = function(req, res) {
  ExamQuestion.find(function (err, takeatests) {
    if(err) { return handleError(res, err); }
    return res.json(200, takeatests);
  });
};

// Get a single takeatest
exports.show = function(req, res) {
  Takeatest.findById(req.params.id, function (err, takeatest) {
    if(err) { return handleError(res, err); }
    if(!takeatest) { return res.send(404); }
    return res.json(takeatest);
  });
};

// Get a single takeatest
exports.showForUser = function(req, res) {
	console.log('I am here');
	//var userId = req.param('id');
	var userId = req.params.userid;

	console.log('in server userId :'+userId);

	var myQuery = Takeatest.find({'userid' : userId});

	myQuery.exec(function (err, takeatest){
	if (!err){
		console.log(takeatest); // output array of users found
		 if(err) { return handleError(res, err); }
	    if(!takeatest) { return res.send(404); }
			console.log(takeatest);
		    return res.json(takeatest);
		}
	});

/*  Takeatest.find({userid:userId}, function (err, takeatest) {
    if(err) { return handleError(res, err); }
    if(!takeatest) { return res.send(404); }
	console.log(takeatest);
    return res.json(takeatest);
  });*/
};

// Creates a new takeatest in the DB.
exports.create = function(req, res) {
  var id = mongoose.Types.ObjectId();
  console.log(req.body);
  console.log(req.body._questionid);
  
  var questionid = req.body._questionid;

  var local_exam_question = ExamQuestion.findOne({_id: questionid});
  console.log('	_questionid :'+questionid);

  //console.log(local_exam_question);

console.log(req.body.primaryanswer);
console.log(req.body.dependentanswer);
console.log(req.body.grade);
console.log(req.body.part);
console.log(req.body.username);
console.log(local_exam_question);

console.log(local_exam_question.explanation);

console.log('req.body._questionid :'+req.body._questionid);
console.log('req.body.examquestiontext :'+req.body.examquestiontext);

  var takeatest = new Takeatest({
    id: mongoose.Types.ObjectId(),
    examquestion: req.body._questionid,
	examquestiontext:req.body.examquestiontext,
	primaryanswer: req.body.primaryanswer,
	dependentanswer:req.body.dependentanswer,
	primarycorrectanswer:req.body.primarycorrectanswer,
	dependentcorrectanswer:req.body.dependentcorrectanswer,
	primaryevaluatedresult:req.body.primaryevaluatedresult,
	dependentevaluatedresult:req.body.dependentevaluatedresult,
	grade:req.body.grade,
	userid:req.body.userid,
	username:req.body.username,
	useremail:req.body.useremail,
	primaryexplanation:	 req.body.primaryexplanation});
	//,dependentexplanation:local_exam_question.dependentquestion[0].explanation
  //});

  /*takeatest.save(req.body, function(err, takeatest) {
    if(err) { return handleError(res, err); }
    return res.json(201, takeatest);
  }); */

   takeatest.save(function (err, takeatest) {
    if (err) { 
		//return next(err)
		console.log(err);
		return;
	}
    res.status(201).json(takeatest)
  });

};

// Updates an existing takeatest in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Takeatest.findById(req.params.id, function (err, takeatest) {
    if (err) { return handleError(res, err); }
    if(!takeatest) { return res.send(404); }
    var updated = _.merge(takeatest, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, takeatest);
    });
  });
};

// Deletes a takeatest from the DB.
exports.destroy = function(req, res) {
  Takeatest.findById(req.params.id, function (err, takeatest) {
    if(err) { return handleError(res, err); }
    if(!takeatest) { return res.send(404); }
    takeatest.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}