const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee{
    constructor(school){
    this.school = school;
    }
    getSchool(school){
        return school;
    }
    getRole(Employee){
        return Intern;
    }
}