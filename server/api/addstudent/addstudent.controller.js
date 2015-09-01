'use strict';

var _ = require('lodash');
var AddStudent = require('./addstudent.model');

// Get list of students
exports.index = function(req, res) {
  AddStudent.find(function (err, addstudent) {
    if(err) { return handleError(res, err); }
    return res.json(200, addstudent);
  });
};

// Get a single Student
exports.show = function(req, res) {
  AddStudent.findById(req.params.id, function (err, addstudent) {
    if(err) { return handleError(res, err); }
    if(!addstudent) { return res.send(404); }
    return res.json(addstudent);
  });
};

// Creates a new Student in the DB.
exports.create = function(req, res) {

	//login(' user :'+$scope.user);
	console.log('I am here on the server');
	 var addstudent = new AddStudent({
    firstname: req.body.firstname,
	lastname: req.body.lastname,
	username:req.body.username,
	grade:req.body.grade
  });
  
  addstudent.save(function (err, addstudent) {
    if (err) { return next(err) }
    res.status(201).json(addstudent)
  });

};

// Updates an existing addstudent in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  AddStudent.findById(req.params.id, function (err, addstudent) {
    if (err) { return handleError(res, err); }
    if(!addstudent) { return res.send(404); }
    var updated = _.merge(addstudent, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, addstudent);
    });
  });
};

// Deletes a addstudent from the DB.
exports.destroy = function(req, res) {
  AddStudent.findById(req.params.id, function (err, addstudent) {
    if(err) { return handleError(res, err); }
    if(!addstudent) { return res.send(404); }
    addstudent.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}