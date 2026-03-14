// create min-express app(seperate route)
import exp from 'express'
import {userModel} from '../models/userModel.js'
import { compare, hash } from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middleware/verifyTokens.js'
import cookieParser from "cookie-parser"
import { pid } from 'node:process'
const {sign,decode} = jwt
export const userApp = exp.Router() 

userApp.use(cookieParser())


//DEFINE USER REST API routes

    // user login
    userApp.post('/auth',async(req,res) => {
        //get user cred obj from client
        const {email,password} = req.body
        //verify email
        let user = await userModel.findOne({email:email})
        if (user == null){
            return res.status(400).json({message:"Invalid email"})
        }
        //verify password
        let result = await compare(password,user.password)
        if(result == false){
            return res.status(400).json({message:"Invalid password"})
        }
        // if passwords matched
            //create token(jsonwedtoken -jwt -jaat)
            const signedToken = sign({email : user.email},"abcdef",{expiresIn:"2D"})
            console.log(decode(signedToken))
            // store token as httpOnly cookie
            res.cookie("token",signedToken,{
                httpOnly:true,
                sameSite:"lax",
                secure:false
            })
            //send res
            res.status(200).json({message : "login success", payload : user})
    })

    // create new user
    userApp.post("/users",async(req,res) => {
        //get new user obj from req
        const newUser = req.body
        //hash the password
        const hashedpassword = await hash(newUser.password,10)
        //replace plain password with hashedpassword
        newUser.password = hashedpassword
        //create new user document
        const newUserDocument = new userModel(newUser)
        //save
        await newUserDocument.save()
        //send res
        res.status(201).json({message:"user created"})
    })

    //read all users - (protected route)
    userApp.get("/users",verifyToken,async(req,res) => {
        //get all users from DB
        let userLists = await userModel.find()
        //send res
        res.status(200).json({message : "users",payload : userLists})
    })

    //read users by ID
    userApp.get("/user",verifyToken,async(req,res) => {
        //read user email from req
       const emailOfUser = req.user?.email

       //find user by id
       const userobj = await userModel.findOne({email : emailOfUser}).populate("cart.product")

        //if user not found
        if(!userobj){
            return res.status(404).json({message:"user not found"})
        }
        res.status(200).json({message : 'user',payload : userobj}) 
        
    })

    //update a user by id
    userApp.put("/users/:id",async(req,res) => {
        //get modified user from req
        const modifiedUSer = req.body
        const uid = req.params.id
        //find user by id and update
        const updateUsers = await userModel.findByIdAndUpdate(uid,{$set : {...modifiedUSer}},{new:true,runValidators:true})
        //send res
        res.status(200).json({message:"user modified",payload:updateUsers})
    })

    //delete user by id
    userApp.delete("/users/:id",async(req,res) => {
        //get user from id
        let uid  = req.params.id
        //find and delete user by id
        let deletedUser = await userModel.findByIdAndDelete(uid)
        if(!deletedUser){
            return res.status(404).json({message : "user not found"})
        }
        //send res
        res.status(200).json({message : "user found and deleted"})
    })

    //add product to cart
    // userApp.put("/cart/product-id/:pid",verifyToken, async(req,res) => {
    //     // get prod id from url param
    //     const productId = req.params.pid
    //     // get email
    //     const emailOfUser = req.user?.email
    //     //get user from db and update
    //     let result = await userModel.findOneAndUpdate({email : emailOfUser}, {$push : {cart : {product : productId}}})
    //     //if user not found
    //     if(!result){
    //         return res.status(404).json({message:"user not found"})
    //     }
    //     res.status(200).json({message : "product added to cart"})
        
    // })

    userApp.put("/cart/product-id/:pid",verifyToken, async(req,res) => {
        // get prod id from url param
        const productId = req.params.pid
        // get email
        const emailOfUser = req.user?.email
        const user = await userModel.findOne({email : emailOfUser})
        if(!user){
            return res.status(404).json({message:"user not found"})
        }
        const productExist = user.cart.find(p => p.product == productId)
        if(productExist){

            user.cart.count += 1
            res.status(200).json({message :"product already existing"})
        }
        else{
            const result = await userModel.findOneAndUpdate({email:emailOfUser},{$push: {cart : {product:productId}}})
            res.status(200).json({message:"product added to cart",payload:result})
        }
        
    })