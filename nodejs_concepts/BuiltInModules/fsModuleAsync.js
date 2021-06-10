const {readFile, writeFile} = require('fs');
console.log('Starting the process');
readFile('./pathExample/fs1.txt', 'utf-8', (err, res)=>{
    if(err){
        return
    }
    else{
        const file1 = res
        console.log(res);
        readFile('./pathExample/fs2.txt', (err, res)=>{
            if(err){
                return
            } 
            else{
                const file2 = res
                console.log(res);
                writeFile('./pathExample/result.txt',`The result is ${file1} + ${file2}`,()=>{
                    console.log("The contents of both files are written into the result");
                    console.log('Ending the process');
                })
            }

    })
}
})

console.log('Starting the next process');