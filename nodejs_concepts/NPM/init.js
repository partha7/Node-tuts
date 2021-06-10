// npm is a repository of different implementations that
// we can import into our projects
/************************************************ */
// npm --version
// gives the version of npm

/************************************************ */
// to install a package from npm which will only be used
// this particular proj

// npm i <packageName>

// Global dependency - use in any project

// sudo npm install -g <packageName>

//*********************************************** */

// package.json - Manifest file (stores information on proj)
// manual (creating in the root and create properties)
// npm init (step by step)
// npm init -y (uses all the default)

// major use case is for storing dependecies of the packages that we want for our proj

/*************************************************** */

// To include in the project we will need to first download

const _ = require('lodash')
const items = [1,[2],[3, [4,[5]]]]

const newItems = _.flattenDeep(items)
console.log(newItems);
console.log("Hello, you are changing Nodemon. I like");

/******************************************** */

// One of the most important module we will be using for the rest of the course will be
// Nodemon : It looks at out files and restarts on changes

// We don't want to install it as a normal dependency because we don't want it in a
// production environment. So we'll include it as a dev dependency.
// Command for dev dependency : npm i nodemon -D



/************************************************ */
// SCRIPTS in package.json is very helpful in getting short commands
// "start": "node index.js"
// so now npm start will run index.js for us
// similarly some commands need to be called with "node run"  eg: "node run dev"


/*************************************************** */

// Package-lock.json includes all the module dependecies of the dependencies we are using
// Eg:Bootstap uses Jquery. So package.json : Bootstrap dependency.
//                             package-lock.json : Jquery dependency