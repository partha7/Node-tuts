const http = require('http')

const server = http.createServer((req,res)=>{

    console.log("Created server");
    res.end("Welcome to my server")

})
server.listen(8000)