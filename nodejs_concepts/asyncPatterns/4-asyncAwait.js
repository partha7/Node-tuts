// Even with promises the concept of nesting would still be there.
// For that we can use async-wait.

// Async can be added to any function which we want to make asynchronous
// Inside that function we can use await to call for things that we want 
// to execute prior to the things that need to be executed in the async function.

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
            console.log('Exiting Promise');
        })
    })
}


const start = async() =>{
    try{
        const f1 = await getText('/home/parth/Documents/node_tuts/BuiltInModules/pathExample/fs1.txt')
        console.log("In between await");
        const f2 = await getText('/home/parth/Documents/node_tuts/BuiltInModules/pathExample/fs2.txt')
        console.log("After await");
        await writeFile('/home/parth/Documents/node_tuts/BuiltInModules/pathExample/result.txt',
        `This is AWESOME : ${f1} \n ${f2}`,()=>{
            console.log('Writing to file done');
        }
    )
    }
    catch(error){
        console.log(`Some error ${error}`)
    }
}

start()


console.log("Next task started");