const fs = require("fs");

// Writing in file 

fs.writeFile("write.txt", "This file is created in Asynchronous way", (err) => {
    if(err){console.log("Error is : " + err);}
    else{
        console.log("File is created");
    }
});


// Appending in file

fs.appendFile("write.txt", " We are appending some text", (err) => {
    if(err){console.log("Error is : " + err);}
    else{
        console.log("File is appended");
    }
})


// Reading data from file

fs.readFile("write.txt", "utf-8", (err, data) => {
    if(err){console.log("Error is : " + err);}
    else{
        console.log(data);
    }
});

// After the reading file the next lines of code is following to check Asynchronos 

console.log("After reading data first code");
console.log("After reading data second code");
console.log("After reading data third code");
console.log("After reading data fourth code");
console.log("After reading data fifth code");
console.log("After reading data sixth code");
console.log("After reading data seventh code");
console.log("After reading data eighth code");


// To rename the file 
// fs.rename("write.txt", "newname.txt", (err) => console.log('File renamed'))


//To delete the file
//fs.unlink("write.txt", (err) => console.log("file deleted"))
