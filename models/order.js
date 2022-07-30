const mongoose = require('mongoose');
const validator=require('validator');
const SchemaTypes = mongoose.Schema.Types;

const orderSchema=new mongoose.Schema({
    userID: {
        type: mongoose.Schema.ObjectId,
        reference: "User",
        required: [true, "User reference can't be empty"]
    },
    orderDate:{
        type: Date,
        default: Date.now()
    },
    Delivered:String
})


const Order=mongoose.model('Order',orderSchema);

module.exports =Order;