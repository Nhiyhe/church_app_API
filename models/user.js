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

department:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Department'
},

email:String

});

var Workers = mongoose.model('Worker', WorkerSchema);

module.export =  Workers;
