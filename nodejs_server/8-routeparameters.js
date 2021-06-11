const express = require('express')
const app = express()
const {products} = require('./data') 

//getting all the values from the products
app.get('/', (req, res)=>{
    
    res.json(products)
})

//getting some values from the products
app.get('/api/products', (req, res)=>{
    const newProduct = products.map((product)=>{
        const {id, name, price} = product

        return [id, name, price]
    })
    res.json(newProduct)
})


//getting singleproduct values making a route for every id
app.get('/api/products/1', (req, res)=>{
    const singleProduct = products.find((product)=>{
        if(product.id === 1){
            return product
        }
    })

    res.json(singleProduct)
})


// getting singleproduct by using route parameter (:RouteParameter)
// we can get the params sent by the request using req.params
app.get('/api/products/:productId', (req, res)=>{
    const {productId} = req.params
    const singleProduct = products.find((product)=>{
        if(product.id === Number(productId)){
            return product
        }

    }
    )

    if(!singleProduct){
        res.status(404).send('<h1>The product asked for is not found</h1>')
        return
    }

    res.json(singleProduct)
})



app.listen(5000)