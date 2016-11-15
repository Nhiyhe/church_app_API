var mongoose = require('mongoose');

var AttendanceSchema = new mongoose.Schema({
    Date:{
        type:Date,
        default:Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },

});

var Attendances = mongoose.model('Attendance', AttendanceSchema);

modules.exports = Attendances;