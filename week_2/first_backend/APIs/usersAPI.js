//create mini - express app(seperate route)
import exp from 'express'
export const userApp = exp.Router()
let users = []
//create API(REST API - REpresentation State Transfer API )
    //route to handle GET req of client

    userApp.get('/users',(req,res) => {
        //read all users
        res.json({message:"all users",payload : users})
    })


    //route to handle POST req of client()
    userApp.post('/users',(req,res) => {
        // get user from client
        const user = req.body
        //push user into users
        users.push(user)
        //send res
        res.json({message:"user created"})
    })

    //route to handle PUT req of client
    userApp.put('/users',(req,res) => {
        //get modified user from client{}
        const modified = req.body
        //get index of existing user in users array
        let index = users.findIndex(userobj => userobj.id === modified.id)
        if (index == -1){
            return res.json({message:"user not found"})
        }
        users.splice(index,1,modified)
        //send res
        res.json({message:"user data modified"})
    })

    //route to handle DELETE req of client
    userApp.delete('/users/:id',(req,res) => {
        //get id of user from url parameter
        let userID = Number(req.params.id)
        //find index of user
        let index = users.findIndex(userobj => userobj.id == userID)
        if(index == -1){
            return "user not found"
        }
        //delete user by index
        users.splice(index,1)
        res.json({message:"user deleted"})
    

    userApp.get('/users/:id',(req,res) => {
        let id = Number(req.params.id)
        let userData = users.find(userobj => userobj.id == id)
        if(userData == undefined){
            return res.json({message : "user not found"})
        }
        res.json({message:"user found",payload : userData})
    })
    })