// Node Js is a javascript runtime built on top of chromes v8 engine.
// Both node js and v8 engine are built with c++
// So whatevr functions we are using in Js are not actually part of JS but c++.
// For example JS does not know how to read a file but c++ does.
// So whenever we are sending in some JS code to run, we are also sending the c++ bindings.

// JS Browser has window, which can basically access anything in the browser
// We do not have the same in node since there is no window.
// Instead in node we have global
// Similarly we have DOM (document) in browser JS to access elements of a web page.
// The equivalent in node is call process

// We can pass arguments in the command line while executing a JS file.
// then we can use process.argv[index] to get the argument



//My First Node app

// 1.
// const number = 100;

// if(number > 10){
//     console.log(`It is a large number ${number}`);
// }
// else{
//     console.log(`It is a small number ${number}`);
// }

// 2. Globl object in Node JS

// console.log(module);
// console.log(process);
// console.log(__dirname);

