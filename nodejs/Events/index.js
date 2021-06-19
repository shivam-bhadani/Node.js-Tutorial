// Node.js allows us to create and handle custom events easily by using events module. Event module includes EventEmitter class which can be used to raise and handle custom events.

const EventEmitter = require('events');
const event = new EventEmitter();

// Specifying event handler i.e., what to do when event is raised
//It accepts the name of the event to handle and callback function which is called when event is raised

event.on('sayName', () => {
    console.log("My name is Shivam Bhadani");
});


// Raising event

event.emit('sayName');