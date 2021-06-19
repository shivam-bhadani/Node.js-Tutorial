// 1. Convert an object to json
// 2. Add it to another file
// 3. Read file 
// 4. again convert back to object 
// 5. Show the object on console


const fs = require('fs');

const bioData = {
    name: "Shivam",
    age: 18,
    gender: "Male"
};

const jsonData = JSON.stringify(bioData);

fs.writeFile("write.txt", jsonData, (err) => {
    if(err){console.log("Error is: " + err);}
    else{
        console.log("File has successfully written");
    }
});

const data = fs.readFile("write.txt", "utf-8", (err, data) =>{
    if(err){console.log("Error is: " + err);}
    else{
        console.log(data);
    }
});

const newobjdata = JSON.parse(data);
console.log(newobjdata);
