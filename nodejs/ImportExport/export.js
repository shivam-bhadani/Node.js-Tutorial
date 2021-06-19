let x = "Hello World!";
function morning(){
    console.log("Good Morning...");
};
module.exports.hello = x;  // exporting string as object
module.exports.goodmorning = morning;  // exporting function as object
