const path= require('path');

console.log(path.sep);

const filePath = path.join('/pathExample', 'aSubfolder', 'myName.txt');
console.log(filePath);

const absPath = path.resolve(__dirname, 'pathExample', 'aSubfolder', 'myName.txt')
console.log(absPath);