const {readFile, writeFile} = require('fs').promises
// We can do .promises and the above functions will similarly return resolve
// or reject. 
// There is also another method under the module util : util.promisify. 
// This also returns the a promise object.

console.log("Starting of the system");

// const getText = (path)=> {
//     console.log("getText called");
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf-8', (err, res)=>{
//             if(err){

//                 reject(err)
//             }
//             else{
//                 resolve(res)
//             }
//             console.log('Exiting Promise');
//         })
//     })
// }


const start = async() =>{
    try{
        const f1 =  await readFile('/home/parth/Documents/node_tuts/BuiltInModules/pathExample/fs1.txt')
        console.log("In between await");
        const f2 =  await readFile('/home/parth/Documents/node_tuts/BuiltInModules/pathExample/fs2.txt')
        console.log("After await");
        writeFile('/home/parth/Documents/node_tuts/BuiltInModules/pathExample/result.txt',
        `This is very AWESOME : ${f1} \n ${f2}`)
        
    console.log('All done');
    }
    catch(error){
        console.log(`Some error ${error}`)
    }
}

start()


console.log("Next task started");