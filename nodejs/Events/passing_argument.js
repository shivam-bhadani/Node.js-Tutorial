const EventEmitter = require('events');
const event = new EventEmitter();

//Specifying event handler

event.on('sayName', (fname, lname) => {
    console.log(`My name is ${fname} ${lname}`);
});


// Event emitter 

event.emit('sayName', 'Shivam', 'Bhadani');



// If we have multiple argument then it is likely to pass them by makeing object.

//Specifying event handler

event.on('myName', (arg) => {
    console.log(`Name is: ${arg.fname} ${arg.lname}`);
});

// Event emitter 

event.emit('myName', {fname: "Shivam", lname: "Bhadani"});