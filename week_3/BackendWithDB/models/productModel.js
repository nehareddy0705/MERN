import { model,Schema } from "mongoose";

let productSchema = new Schema({
    productId : {
        type : Number,
        required : [true,'product id required'],
    },
    productName : {
        type : String,
        required : [true,'product name required'],
    },
    price : {
        type : Number,
        min : 10000,
        max : 50000
    },
    brand : {
        type : String,
        required : [true,'brand name required']
    }
    },
    {
        versionKey : false,
        timestamps : true
    }
)

export const prodModel = model("product",productSchema)