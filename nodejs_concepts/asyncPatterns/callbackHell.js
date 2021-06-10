
// Async functions help to offload the timetaking tasks such that the next tasks can
// be performed

// But it includes working with callbacks such that the next task that needs to be
// executed happens inside one callback and henceforth
// This leads to what is known as a callback hell. We simplify this using
// promise, async-await.

const {readFile, writeFile} = require('fs');
console.log('Starting the process');

readFile('/home/parth/Documents/node_tuts/BuiltInModules/pathExample/fs1.txt', 'utf-8', (err, res)=>{
    if(err){
        console.log(`Error 1 ${err}`);
        return
    }
    else{
        const file1 = res
        console.log(res);
        
        readFile('/home/parth/Documents/node_tuts/BuiltInModules/pathExample/fs2.txt','utf-8', (err, res)=>{
            if(err){
                console.log(`Error 2 ${err}`);
                return
            } 
            else{
                const file2 = res
                console.log(res);
                writeFile('/home/parth/Documents/node_tuts/BuiltInModules/pathExample/result.txt',`The result is ${file1} + ${file2}`,()=>{
                    console.log("The contents of both files are written into the result");
                    console.log('Ending the process');
                })
            }

    })
}
})

console.log('Starting the next process');