var events = require("events");
var eventEmitter = new events.EventEmitter();

eventEmitter.on('sayHiEvent',handleSayHi);

eventEmitter.emit('sayHiEvent');

function handleSayHi(){
    console.log("hi~~ I'm Jason")
}

console.log("event.js end");


// hi~~ I'm Jason
// event.js end