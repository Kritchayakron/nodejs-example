const mongoose = require("mongoose");
const productSchema = mongoose.Schema({
    name: String,
    detail: {
        type:String
    },
    price : {
        type:Number
    },
    reference : {
        type:Number
    },
    active : {
        type:Boolean
    }
},{timestamps:true})
module.exports  = mongoose.model('product',productSchema);