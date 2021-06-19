// Exporting function as Class
module.exports = function (firstName, lastName){
    this.firstName = firstName; 
    this.lastName = lastName;
    this.fullName = () => this.firstName + ' ' + this.lastName;
};