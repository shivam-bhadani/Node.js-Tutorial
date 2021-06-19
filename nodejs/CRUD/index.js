// 1. Create a file named bio.txt and data into it.
// 2. Add more data into the file at the end of the existing data.
// 3. Read the data without getting the buffer data at first.
// 4. Rename the file name to mybio.txt

const fs = require("fs");

//Creating file and adding data into it 

fs.writeFileSync("bio.txt", "Hello! My name is Shivam Bhadani.");


// Adding more data into bio.txt

fs.appendFileSync("bio.txt"," I want to become the best coder.")


//Reading data from bio.txt without getting buffer

const data = fs.readFileSync("bio.txt", "utf-8");
console.log(data);

//Renaming bio.txt to mybio.txt

fs.renameSync("bio.txt", "mybio.txt");