//The events module provides an event-driven architecture where certain objects emit named events that cause functions to be called.
//Example:
const EventEmitter = require('events');


// Create an instance of EventEmitter
const myEmitter = new EventEmitter();


// Event listener for 'greet' event
myEmitter.on('greet', () => {
  console.log('Hello, how are you today?');
});


// Emit 'greet' event
myEmitter.emit('greet');