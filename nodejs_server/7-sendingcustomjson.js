const express = require('express')
const app = express()
const {products} = require('./data') 
app.get('/', (req, res)=>{
    const newProduct = products.map((product)=>{
        const {id, name, price} = product

        return [id, name, price]
    })
    res.json(newProduct)
})

app.listen(5000)