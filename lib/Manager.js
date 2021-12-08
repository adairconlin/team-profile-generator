const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email){
        super(name, id, email);

        this.officeNumber = 123456789;
    }

    getRole() {
        return `Manager`;
    }
}

module.exports = Manager;