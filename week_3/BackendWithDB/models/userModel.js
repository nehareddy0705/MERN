import { model, Schema, Types } from "mongoose";
// create user schema

// create cart schema {product, count}
const cartSchema = new Schema({
    product : {
        type : Types.ObjectId,
        ref : "product"
    },
    count : {
        type : Number,
        default:1
    }
})
let userSchema = new Schema({
    // structure of user resource
    username : {
        type : String,
        required : [true,'username is required'],
        minLength : [4,'min length of username is 4 chars']
    },

    password : {
        type : String,
        required : [true, 'password required']
    },
    email : {
        type : String,
        required : [true,'email required'],
        unique : [true,'Email already existed']
    },
    age : {
        type : Number,
    },
    cart : [cartSchema]
    
},

    {
        versionKey : false,
        timestamps : true
    }

)
// generate userModel
export const userModel = model("user",userSchema)
