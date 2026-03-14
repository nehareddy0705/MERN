//create express app
import exp from 'express'
import { connect } from 'mongoose'
import { userApp } from './APIs/userAPI.js'
import { prodApp } from './APIs/productAPI.js'

const app = exp()

//add body parser
app.use(exp.json())

//forward req to userApp if path starts with user-api
app.use('/user-api',userApp)
//forward req to prodApp if path starts with product-api
app.use('/product-api',prodApp)


//start server
app.listen(4000,()=>console.log("server on port 4000..."))

//connecting DB server
async function connectDB(){
    try{
        await connect("mongodb://localhost:27017")
        console.log("DB connection success")
    }
    catch(err){
        console.log("error in connecting to DB:",err)
    }
}
connectDB()


//create error handling
app.use((err,req,res,next) => {
    if(err.name === "validationError"){
        return res.status(400).json({message:"error occured"})
    }
    if(err.name === "castError"){
        return res.status(400).json({message:"error occured"})
    }
    res.status(500).json({message: "error occured server side error"})
})