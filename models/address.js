const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    houseNumber: {
        type: String,
        trim: true
    },
    street: {
        type: String,
        trim:true
    },
    city: {
        type: String,
        trim:true
    },
    postCode: String,
    country:String
    
})

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;