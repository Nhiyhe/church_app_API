var mongoose = require('mongoose');

var DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required:[true,"Department Name Required."]
    }
});

var Department = mongoose.model('Department', DepartmentSchema);

module.exports = Department;