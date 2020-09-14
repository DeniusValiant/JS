function Employee() {};

Employee.prototype.FirstName =  "Nick";
Employee.prototype.LastName =  "Durko";
Employee.prototype.Age =  20;
Employee.prototype.Sex =  "male";
Employee.prototype.Nationality =  "RU";
Employee.prototype.getFullInfo =  function() { return `First Name : ${this.FirstName}, Last name : ${this.LastName} , age : ${this.Age}`;};
Employee.prototype.FirstName =  "Nick";

let emp = new Employee();

console.log(emp.getFullInfo());
