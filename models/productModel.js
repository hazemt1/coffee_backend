const mongoose = require('mongoose');
const validator=require('validator');


const productSchema=new mongoose.Schema({
    name:{
        type: 'string',
        required: [true,'product must have a name']
    },
    available:Boolean,
    description: {
        type: 'string'
    },
    QTY:Number,
    price:Number
})


const Product=mongoose.model('Product',productSchema);

module.exports =Product;