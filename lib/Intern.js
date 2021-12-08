const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);

        this.school = "College";
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return `Intern`;
    }
}

module.exports = Intern;