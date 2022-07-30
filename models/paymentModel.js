const mongoose = require('mongoose');
const validator=require('validator');
const SchemaTypes = mongoose.Schema.Types;

const paymentSchema=new mongoose.Schema({
    userID: {
        type: mongoose.Schema.ObjectId,
        reference: "User",
        required: [true, "User reference can't be empty"]
    },
    Date:{
        type: Date,
        default: Date.now()
    },
    Amount:Number
})


const Payment=mongoose.model('Payment',paymentSchema);

module.exports =Payment;