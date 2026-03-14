// create HTTP server
//express internally contains HTTP server
import exp from 'express'
const app = exp() 
import {userApp} from './APIs/usersAPI.js'
import {productApp} from './APIs/productAPI.js'
//use body parser middleware- used to extract the body of post and put req
app.use(exp.json()) 


// //create cutom middleware
// function middleware2(req,res,next){
//     res.json({message:"res from middleware2"})
// }
// app.use(middleware2)

function verify(req,res,next){
    //send res from middleware
    res.json({message : "middleware1 is excuted"})
    //if there is another middleware, that will be excuted or route will be excuted.
}

app.use(verify)


//forward req to userapi if path starts with /user-api
app.use('/user-api',userApp)

//forward req to userapi if path starts with /user-api
app.use('/product-api',productApp)



//set a port no.
const port = 3000

//assign port no. to http server
app.listen(port, () => console.log(`server is listening port ${port}...`)) 








    
    





    




