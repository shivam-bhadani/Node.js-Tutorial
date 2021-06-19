const fs = require("fs");

//Writing in file in synchronous way

let newFile = fs.writeFileSync('write.txt', "We are learning node.js");
console.log(newFile);  //This method return undefined
fs.writeFileSync('write.txt', "This is new text"); //This will overwrite the previous file
fs.appendFileSync("write.txt", "This will append the previous file");


//Reading from file in synchronous way

const buf_data = fs.readFileSync("read.txt"); //It will give buffer data
console.log(buf_data);
const string_data = buf_data.toString();
console.log(string_data);

//Reading from file without getting buffer data


//Renaming the file name

const data = fs.readFileSync("read.txt", "utf-8");
console.log(data);

fs.renameSync("readwrite.txt", "rename.txt");