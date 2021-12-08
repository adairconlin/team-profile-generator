const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);

        this.github = "adairconlin";
    }

    getGithub() {
        return `https://github.com/${this.github}/`;
    }

    getRole() {        
        return `Engineer`;
    }
}

module.exports = Engineer;