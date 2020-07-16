const mongoose = require("mongoose")

require('../app.js')

const cartSchema = new mongoose.Schema({
    customerId:{
        type:String,
        required:true
    },
        variantId:{
            type:String,
            required:true,
        },
        productName:{
            type:String,
            required:true
        },
        productId:{
            type:String,
            required:true,
        },
        price:{
            type:Number,
            required:true,
        },
        quantity:{
            type:Number,
            required:true,
        },
        mainCategory:{
            type:String,
            required:true,
        },
        subCategory:{
            type:String,
            required:true,
        },
        color:{
            type:String,
        },
        size:{
            type:String,
        },

})




module.exports = mongoose.model("Cart",cartSchema)

