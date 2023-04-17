const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    imgLink:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:false
    }
},
{ timestamps: true })

module.exports = mongoose.model('Products', ProductSchema)