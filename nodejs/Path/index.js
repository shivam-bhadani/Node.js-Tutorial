// The Path module provides utilities for working with file and directory path.

const path = require('path');

console.log(path.parse('E:/Node.JS/nodejs/path/index.js')); 
//Returns an object whose properties represent significant elements of the path. 
//And we can use its any properties to find information about path.

console.log(path.basename('E:/Node.JS/nodejs/path/index.js')); 

console.log(path.extname('E:/Node.JS/nodejs/path/index.js'));

console.log(path.dirname('E:/Node.JS/nodejs/path/index.js'));

// To join location use path.join()
// Example to join path of stream
console.log(path.join(__dirname, "../Streams"));