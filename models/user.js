var mongoose = require('mongoose');

var WorkerSchema = new mongoose.Schema({
firtsName:String,
lastName:String,
Birthdaye:Date,
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
email:String

});

var Workers = mongoose.model('Worker', WorkerSchema);

module.export =  Workers;
