// Express middlewares are functions that executes during the request to the server
// each middleware has access to req and res objects
// Express is filled with middleware functions
// req -> middleware -> res

const express = require('express')
const app = express()

// We need to add an argument in our http method for the
// middleware function we want to reference. In between the method and the callback.
// Express will on its own send a the params (req, res, next)
// we only have to catch them in the MF and use them
// Important thing in MF is that unless we want to send a response from it
// we must always call next(), so that the control passes from the MF
// to the next thing that is to happen
const logger = (req, res, next)=>{
    console.log(req.method);
    console.log(req.url);
    console.log(new Date().getFullYear())
    next()
}

app.get('/', logger, (req, res)=>{
    res.send("HOME")

}).listen(5000)