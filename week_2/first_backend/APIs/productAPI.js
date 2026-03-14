import exp from 'express'
export const productApp = exp.Router()

    let prod = []

    productApp.get('/product',(req,res) => {
        res.json({message:"all products",payload : prod})
    })

    productApp.get('/product/:brand',(req,res) => {
        let prod_brand = req.params
        let Data = prod.find(prodobj => prodobj.brand === prod_brand.brand)
        if(Data == undefined){
            return res.json({message : "brand not found"})
        }
        res.json({message:"brand found",payload : prod_brand})
    })

    productApp.post('/product',(req,res) => {
        const data = req.body
        prod.push(data)
        res.json({message:"product created"})
    })

    productApp.put('/product',(req,res) => {
        const modified = req.body
        let index = prod.findIndex(prodobj => prodobj.brand === modified.brand)
        if (index == -1){
            return res.json({message:"product not found"})
        }
        users.splice(index,1,modified)
        res.json({message:"product data modified"})
    })

    productApp.delete('/product/:brand',(req,res) => {
        let prod_brand = Number(req.params.id)
        let index = users.findIndex(prodobj => prodobj.id == prod_brand)
        if(index == -1){
            return "product not found"
        }
        users.splice(index,1)
        res.json({message:"product deleted"})
    })