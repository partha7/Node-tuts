
const {readFile} = require('fs')

console.log("Read task started");
readFile('/home/parth/Documents/node_tuts/EventLoop/example.txt', 'utf-8', (err, res) => {
    
    if(err){
        console.log(err);
        return
    }
    console.log(res);
    console.log('Read task completed');
})

console.log('Second task started');

// Here we start the next task first and then the callback function in executed.
// This is because the readFile method is asynchronous