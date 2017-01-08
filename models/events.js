var mongoose = require('mongoose');

var EventsSchema = new mongoose.Schema({
    title: {
        type: Strig,
        trim:true
    },
    eventCreated:{
        type:Date,
        default:Date.now
    },
    Venue:String,

    Completed:Boolean,

    eventStartDate:{
        type:Date,
        default:null
    },

    eventEndDate:{
        type:Date,
        default:null
    },

    additionalInfo:String

});

var Events = mongoose.model('Event', EventsSchema);

module.exports = Events;