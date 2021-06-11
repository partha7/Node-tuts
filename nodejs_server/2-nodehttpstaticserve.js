// On using the node module http, we are able to serve a static website
// We are reading the contents of the file and sending as a response
// For heavy projects this can become very complicated as well as hard to maintain
// Thus Express.js

const http = require('http')
const {readFileSync} = require('fs')

const html = readFileSync('./nodejs_server/serverexample-app/index.html')
const js = readFileSync('./nodejs_server/serverexample-app/script.js')
const css = readFileSync('./nodejs_server/serverexample-app/style.css')
const logo = readFileSync('./nodejs_server/serverexample-app/logo.svg')

const server = http.createServer((req,res)=>{

    console.log("Created server");

    const url = req.url

    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.end(html)
    }

    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.end(css)
    }
    else if(url === '/script.js'){
        res.writeHead(200, {'content-type': 'text/js'})
        res.end(js)
    }
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.end(logo)
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.end(`<h1> Don't have what you are looking for. Sorry!! </h1>`)
    }


})
server.listen(8000)