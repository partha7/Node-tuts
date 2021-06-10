// setInterval is another async function

console.log('before setInterval');

const setI = setInterval(()=>
{
    console.log('inside setInterval');
}, 1000)

console.log('after setInterval');

clearInterval(setI)