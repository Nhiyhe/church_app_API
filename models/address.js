const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    houseNumber: String,
    street: String,
    city: String,
    postCode: String,
    country:String
    
})

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;