const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    res.status(200).send("Welcome to my Express server")
})

app.get('/about', (req, res)=>{
    res.status(200).send("This is my first Express server")
})

app.get('*', (req, res)=>{
    res.status(404).send("<h1> Resource not found</h1>")
})

app.listen(5000, ()=>{
    console.log("Listening to 5000");
})


// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen