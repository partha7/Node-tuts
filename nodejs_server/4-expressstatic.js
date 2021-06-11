const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./public'))

// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve( __dirname,'./nodejs_server/serverexample-app/index.html'))
// })

app.get('*', (req, res)=>{
    res.status(404).send('<h1> Resourse is not available</h1>')
})

app.listen(5000, ()=>{
    console.log("Listening to 5000");
})