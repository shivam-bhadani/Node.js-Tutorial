const os = require('os');

console.log(os.arch());  //This gives the architecture of the system

const freeMemory = os.freemem();
console.log("Free memory in bytes" + freeMemory);  // This memory is in bites

console.log(`Free memory in gb is: ${freeMemory /1024 /1024 /1024}`);

const totalMemory = os.totalmem();
console.log(`Total memory in gb is: ${totalMemory /1024 /1024 /1024}`);

// The above freeMemory and totalMemory of RAM.

console.log(os.hostname());  // Name of the pc using 

console.log(os.platform()); // For windows returns output win32

console.log(os.tmpdir());

console.log(os.type()); // For windows returns Windows_NIT