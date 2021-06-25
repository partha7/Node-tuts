// the process allows us to take command line arguments
// but there is too much processing required to actually use those values

console.log(process.argv);

// [
//     '/usr/bin/node',
//     '/home/parth/Documents/node_tuts/app.js',
//     '--title=testing'
//   ]

// That is being resolved by yargs.
// Yargs is a very useful command line package.
// It helps in reading values from the command line in a better way.

const yargs = require('yargs')

console.log(yargs.argv);

// parth@parth:~/Documents/node_tuts$ node app.js --title=testing
// { _: [], title: 'testing', '$0': 'app.js' }





