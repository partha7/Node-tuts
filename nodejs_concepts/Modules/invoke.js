// all the files in node js has their individual scope. 
// So using require we can run another file, eg: log statements or even function invokes
// but we cannot reference to any members of the other file from some other file.
// To access we will need to export.

const names = require('./names');
const sayHi = require('./function')
require('./noexport')
// console.log(names.myName);
// sayHi(names.parth);
// sayHi(names.nath);
