const mongoose = require('mongoose');
const validator=require('validator');


const userSchema=new mongoose.Schema({
    name:{
        type: 'string',
        required: [true,'user must have a name']
    },
    email:{
        type: 'string',
        required: [true,'user must have a email'],
        unique: [true, 'An email must be unique'],
        lowercase: true,
        validate:[validator.isEmail ,'Please provide a valid email']
    },
    role: {
        type: 'string',
        default: 'user'
    },
    password:{
        type:String,
        required:[true,'Please provide a password'],
        minLength:8,
        select :false //means not to show password at any output to be secure
    },
    address:{
        type: 'string'
    }
})


const User=mongoose.model('User',userSchema);

module.exports =User;