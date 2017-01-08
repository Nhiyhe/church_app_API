var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WorkerSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "firstName is required"],
        trim:true
    },
    lastName: {
        type: String,
        required: [true, "lastName is required"],
        trim:true
    },
    birthday: Date,
    isActive: Boolean,
    dateJoined: {
        type: Date,
        default: null
    },
    dateLeft: {
        type: Date,
        default: null
    },
    phoneNumber: String,

    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    },

    email: {
        type: String,
        trim:true
    },
    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Address'
    }

});

WorkerSchema.virtual("getAge").get(function () {

    return Date; 

});

var Workers = mongoose.model('Worker', WorkerSchema);

module.exports =  Workers;
