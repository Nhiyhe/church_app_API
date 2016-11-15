var mongoose = require('mongoose');

var WorkerSchema = new mongoose.Schema({
firstName:String,
lastName:String,
birthday:Date,
isActive:Boolean,
dateJoined:{
    type:Date,
    default:null
},
dateLeft:{
    type:Date,
    default:null
},
phoneNumber:String,

department:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Department'
},

email:String

});

var Workers = mongoose.model('Worker', WorkerSchema);

module.exports =  Workers;
