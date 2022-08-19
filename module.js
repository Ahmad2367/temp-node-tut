// Module
// CommonJS, every file is module (by default)
// Modules -- Encapsulated Code (only share minimum)
const names = require('./variable');
const msg = require('./function');

require('./without_export')
msg.Greetings("Ahmad");
msg.Greetings(names.Alex)
msg.Greetings(names.John) 
console.log(names)
console.log(msg)