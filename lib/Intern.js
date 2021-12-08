const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, college) {
        super(name, id, email);

        this.school = college;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return `Intern`;
    }
}

module.exports = Intern;