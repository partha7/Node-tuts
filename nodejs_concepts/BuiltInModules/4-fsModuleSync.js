const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./pathExample/fs1.txt', 'utf-8');
const second = readFileSync('./pathExample/fs2.txt', 'utf-8');


//writeFileSync will create a file if its not already present
writeFileSync("./pathExample/theResultofFS1andFS2.txt",
 `Here is the result : ${first} ${second}`, {flag: 'a'});

 // Following are the two ways of appending into a file

// fs.writeFileSync("notes.txt", "Tum kon?", {flag : 'a'})

// fs.appendFileSync("notes.txt", " Hum hai shahenshah, naam to suna hi hoga")
