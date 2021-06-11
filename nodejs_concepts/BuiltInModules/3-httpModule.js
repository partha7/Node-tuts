const http = require('http');

const server = http.createServer((req, res) =>{
    if(req.url === '/'){
        res.end('Welcome to our web server, This is my first one!!!')
        // res.end()
    }
    else if(req.url === '/about'){
        res.end('You are in our about page, so here it is!! :)')
    }
    else{
    res.end(`
    <h1> Ooops </h1>
    <p> Can't seem to find the page you are looking for :(</p>
    <a href='/'>Navigate home</a>`)
    }
})

server.listen(5000)