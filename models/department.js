var mongoose = require('mongoose');

var DepartmentSchema = new mongoose.Schema({
    name:String
});

var Department = mongoose.model('Department', DepartmentSchema);

module.exports = Department;