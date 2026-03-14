import exp from 'express'
import { prodModel } from '../models/productModel.js'
export const prodApp = exp.Router()

prodApp.post("/products",async(req,res) => {
    const newprod = req.body
    const newprodDoc = new prodModel(newprod)
    await newprodDoc.save()
    res.status(200).json({message:"product created"})
})

prodApp.get("/products",async(req,res) => {
    const prodLists = await prodModel.find()
    res.status(200).json({message:"all products",payload : prodLists})
})

prodApp.get("/products/:productID",async(req,res) => {
    const pid = req.params.productID
    const prodList = await prodModel.findOne({productId: pid})
    if(!prodList){
        res.status(404).json({message : "product not found"})
    }
    res.status(200).json({message : 'product by id',payload : prodList})
})

prodApp.put("/products/:productID",async(req,res) => {
    const modifiedProd = req.body
    const pid = req.params.productID
    const updateProd = await prodModel.findOneAndUpdate({productId:pid},{$set : {...modifiedProd}},{new : true, runvalidators : true})
    res.status(200).json({message:"product details updated",payload : updateProd})
})

prodApp.delete("/products/:productID",async(req,res) => {
    let pid = req.params.productID
    let deleteProd = await prodModel.findOneAndDelete({productId:pid})
    if(!deleteProd){
        return res.status(404).json({message : "product not found"})
    }
    res.status(200).json({message: "product found and deleted",payload : deleteProd})

})
