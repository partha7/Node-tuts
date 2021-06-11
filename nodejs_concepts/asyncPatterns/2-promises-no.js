// Promise can be used for Async tasks but in a cleaner way then the callback hell.
// Its like a promise which is either fullfiled or not fulfilled.
// We can get those values using .then and .catch


// Even with promises the concept of nesting would still be there.
// For that we can use async-wait.

const {readFile, writeFile} = require('fs')
console.log("Starting of the system");
const getText = (path)=> {
    console.log("getText called");
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf-8', (err, res)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(res)
            }
        })
    })
}

const getText2 = (path)=> {
    console.log("getText2 called");
    return new Promise((resolve, reject)=>{
        readFile(path, 'utf-8', (err, res)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(res)
            }
        })
    })
}


getText('/home/parth/Documents/node_tuts/BuiltInModules/pathExample/fs1.txt')
.then((result)=>{
    const first = result
    console.log(result);
    getText2('/home/parth/Documents/node_tuts/BuiltInModules/pathExample/fs2.txt')
    .then((result)=>{
        const second = result
        console.log(result);
        writeFile('/home/parth/Documents/node_tuts/BuiltInModules/pathExample/result.txt',
        `This is somewhat Awesome : ${first} ${second}`, ()=>{
            console.log("All done");
        })
    })
    .catch((error)=>{
        console.log(error);
    })
    
})
.catch((error)=>{
    console.log(error);
})

console.log("Next task started");