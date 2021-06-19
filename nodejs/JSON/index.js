// JSON stands for JavaScript Object Notation 
//JSON is a lightweight format for storing and transporting data.
// JSON is often used when data is sent from a sever to a webpage

const bioData = {
    name : "Shivam",
    age : 18,
    gender : "Male"
};

console.log(bioData.name);
console.log(bioData.age);
console.log(bioData.gender);

// To convert object into json use JSON.stringify(object_name)

const jsonData = JSON.stringify(bioData);
console.log(jsonData);

// To convert jsonData into object JSON.parse(jsonData)

const obj = JSON.parse(jsonData);
console.log(obj);