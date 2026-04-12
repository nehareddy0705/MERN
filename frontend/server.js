import exp from 'express'
import {connect} from 'mongoose'
import { EmpApp } from './Emp_API.js'
import {config} from 'dotenv'
import cors from 'cors'

config()
const app = exp()

app.use(cors({
    origin:["http://localhost:5173"]
}))
app.use(exp.json())
app.use('/emp-api',EmpApp)

const connectDB = async() => {
    try{
        await connect(process.env.DB_URL)
        console.log("DB server connected")
        //assign port
        const port = process.env.PORT || 5000
        app.listen(port, () => console.log(`server listening on ${port}..`))
    }
    catch(err){
        console.log("err in db connection",err)
    }
}
connectDB()


