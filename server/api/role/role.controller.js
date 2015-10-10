'use strict';

var _ = require('lodash');
var Role = require('./role.model');

// Get list of contactuss
exports.index = function(req, res) {
  Role.find(function (err, role) {
    if(err) { return handleError(res, err); }
    return res.json(200, role);
  });
};

// Get a single contactus
exports.show = function(req, res) {
  Role.findById(req.params.id, function (err, role) {
    if(err) { return handleError(res, err); }
    if(!role) { return res.send(404); }
    return res.json(role);
  });
};

// Creates a new contactus in the DB.
exports.create = function(req, res) {

	//login(' user :'+$scope.user);

	 var role = new Role({
    rolename: req.body.rolename,
	roledesc: req.body.roledesc,
	role:req.body.role
  });
  
  contactus.save(function (err, role) {
    if (err) { return next(err) }
    res.status(201).json(role)
  });


};

// Updates an existing contactus in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Role.findById(req.params.id, function (err, role) {
    if (err) { return handleError(res, err); }
    if(!role) { return res.send(404); }
    var updated = _.merge(role, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, role);
    });
  });
};

// Deletes a contactus from the DB.
exports.destroy = function(req, res) {
  Role.findById(req.params.id, function (err, role) {
    if(err) { return handleError(res, err); }
    if(!role) { return res.send(404); }
    role.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}