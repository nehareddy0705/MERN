import {model, Schema} from 'mongoose'

let employeeSchema = new Schema({
    name : {
        type: String,
        required : [true, "name required"]
    },
    email : {
        type : String,
        required : [true, "email required"],
        unique : [true,"email must be unique"]
    },
    mobile : {
        type : Number,
        required : [true, "mobile number required"],
        minLength : [10, "invalid mobile number"]
    },
    designation : {
        type : String,
        required : [true,"designation required"]
    },
    companyName : {
        type : String,
        required : [true, "company name required"]
    }
})

export const EmpModel = model('employee',employeeSchema)