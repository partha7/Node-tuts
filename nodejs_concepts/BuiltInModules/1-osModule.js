//For built in modules we do not need ./ thus specifying that it is a built in module.
//External modules are needed to be downloaded before adding it in a module

const os = require('os');

// console.log(os.userInfo());

// console.log(`The system uptime is ${os.uptime()} seconds`);

//Creation of an object in JS

const obj = {
    name: os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem
}

console.log(obj.name);
console.log(obj);