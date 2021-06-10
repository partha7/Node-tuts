const http = require('http')

const server = http.createServer((req,res)=>{

    console.log("Created server");

    const url = req.url

    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.end(`<h1> Welcome to my Server </h1>`)
    }

    if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.end(`<h1> Here is about us </h1>`)
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.end(`<h1> Don't have what you are looking for. Sorry!! </h1>`)
    }


})
server.listen(8000)