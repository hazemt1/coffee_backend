const mongoose = require('mongoose');
const validator=require('validator');
const SchemaTypes = mongoose.Schema.Types;

const orderProductSchema=new mongoose.Schema({
    orderID: {
        type: mongoose.Schema.ObjectId,
        reference: "order",
        required: [true, "order reference can't be empty"]
    },
    productID: {
        type: mongoose.Schema.ObjectId,
        reference: "product",
        required: [true, "product reference can't be empty"]
    },
   QTY:Number,
    price:Number
})


const OrderProduct=mongoose.model('OrderProduct',orderProductSchema);

module.exports =OrderProduct;