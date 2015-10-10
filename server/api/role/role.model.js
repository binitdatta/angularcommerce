'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RoleSchema = new Schema({
  rolename: { type: String, required: false },
  roledesc: { type: String, required: false },
  role: { type: String, required: false }
});



module.exports = mongoose.model('Role', RoleSchema);