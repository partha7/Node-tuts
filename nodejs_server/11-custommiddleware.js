
const express = require('express')
const app = express()

const midd = require('./nodejs_server/middlewarefunctions/middlewarefxns')
// const authorize = require('./nodejs_server/middlewarefunctions/middlewarefxns')

// Here we are using app.use() to invoke the middleware function.
// This will do for every route that we specify here.
// Although the order matters here, we need to write this function before any
// http method function as the middleware function will not get invoked for the ones
// coming before app.use()

// Note: We can also pass a path as the first argument to app.use('path', MF)
// This way it will be invoke for all the routes starting with that path i.e.,the base


// Here we are importing multiple middlewares and we can attach them to different routes

// app.use('/api',[logger, authorize])
app.use(midd.authorize)


app.get('/api/home', (req, res)=>{
    res.send("HOME")
})

app.get('/api/about', (req, res)=>{
    res.send("ABOUT")
})

app.get('/api2/home', (req, res)=>{
    res.send("SOMETHING ELSE")
})

app.get('/', (req, res)=>{
    res.send("WELCOME TO THE SERVER")
})


app.listen(5000)

// There are 3 options to run middleware
// 1. Use our own middleware
// 2. Use express middleware :
//    eg: app.use(express.static()) which for every request from the server
//    gets the static files in our code.
// 3. Use external :
//    For external we will need to download it.