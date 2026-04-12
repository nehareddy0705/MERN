import exp from 'express'
import { EmpModel } from "./EmpModel.js";
export const EmpApp = exp.Router() 

EmpApp.post("/employee",async(req,res) => {
    const newEmp = req.body
    const newEmpDoc = await EmpModel(newEmp)
    await newEmpDoc.save()
    res.status(201).json({message:"Employee created"})
})

EmpApp.get("/employee",async(req,res) => {
    const empList = await EmpModel.find()
    res.status(200).json({message:"Employees List", payload:empList})
})

EmpApp.put("/employee/:id",async(req,res) => {
    const ModifiedEmp = req.body
    console.log(req.body)
    const updatedEmp = await EmpModel.findByIdAndUpdate(req.params.id,{$set : {...ModifiedEmp}},{returnDocument: "after"})
    if(!updatedEmp){
        res.status(404).json({message:"employee not found"})
    }
    res.status(200).json({message:"employee details modified", payload:ModifiedEmp})
})

EmpApp.delete("/employee/:id",async(req,res) => {
    let deleteEmp = await EmpModel.findByIdAndDelete(req.params.id)
    if(!deleteEmp){
        res.status(404).json({message:"employee not found"})
    }
    res.status(200).json({message:"employee deleted"})

})