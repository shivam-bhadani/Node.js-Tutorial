const greet = require('./export');
const Name = require('./export2.js');
const person = new Name("shivam", "bhadani");
greet.goodmorning();
console.log(greet.hello);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName());