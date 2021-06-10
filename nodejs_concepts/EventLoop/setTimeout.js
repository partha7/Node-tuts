// SetTimeout is Asynchronous and async funtions get offloaded
// When we call setTimeout(()=>{}, 0)
// This callback is pushed to a message queue while everything else is in a call stack.
// So the callstack is executed first and then the callback function.

// The loop gives priority to the call stack, and it first processes 
// everything it finds in the call stack, and once there's nothing in there,
// it goes to pick up things in the message queue.

console.log('first');

setTimeout(()=>{
    console.log('Inside timeout');
},0)

console.log('after timeout');

