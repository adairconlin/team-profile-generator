const inquirer = require("inquirer");
const { writeFile } = require("./utils/generate-site.js");
const generatePage = require("./src/page-template.js");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const promptManager = employeeData => {
    console.log(`
=================
Add a New Project
=================
`);
    if(!employeeData.managers) {
        employeeData.managers = [];
    }
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Provide the name of this Manager:",
            validate: response => {
                if(response) {
                    return true;
                }
                console.log("Please provide the Manager's name.");
                return false;
            }
        },
        {
            type: "number",
            name: "id",
            message: "Provide the Manager's ID:",
            validate: response => {
                if(response) {
                    return true;
                }
                console.log("Please provide the Manager's name.");
                return false;
            }
        },
        {
            type: "input",
            name: "email",
            message: "Provide the Manager's email:",
            validate: response => {
                if(response) {
                    return true;
                }
                console.log("Please provide the Manager's email.");
                return false;
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Provide the Manager's office number:",
            validate: response => {
                if(response) {
                    return true;
                }
                console.log("Please provide the managers office number.");
                return false;
            }
        },
        {
            type: "confirm",
            name: "confirmAddManager",
            message: "Would you like to add another manager?",
            default: false
        }
    ])
    .then(({ name, id, email, officeNumber, confirmAddManager }) => {
        employeeData.managers.push(new Manager(name, id, email, officeNumber));
        if(confirmAddManager) {
            return promptManager(employeeData);
        }
        return employeeData;
    })
};

const promptEngineer = employeeData => {
    if(!employeeData.engineers) {
        employeeData.engineers = [];
    };
    console.log(`
=========================
    Add a New Engineer
=========================
    `);

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Provide the name of this Engineer:",
            validate: response => {
                if(response) {
                    return true;
                }
                console.log("Please provide the Engineer's name.");
                return false;
            }
        },
        {
            type: "number",
            name: "id",
            message: "Provide the Engineer's ID:",
            validate: response => {
                if(response) {
                    return true;
                }
                console.log("Please provide the Engineer's name.");
                return false;
            }
        },
        {
            type: "input",
            name: "email",
            message: "Provide the Engineer's email:",
            validate: response => {
                if(response) {
                    return true;
                }
                console.log("Please provide the Engineer's email.");
                return false;
            }
        },
        {
            type: "input",
            name: "github",
            message: "Provide the Engineer's GitHub username:",
            validate: response => {
                if(response) {
                    return true;
                }
                console.log("Please provide the Engineer's GitHub username.");
                return false;
            }
        },
        {
            type: "confirm",
            name: "confirmAddEngineer",
            message: "Would you like to add another Engineer?",
            default: false
        }
    ])
    .then(({ name, id, email, github, confirmAddEngineer }) => {
        employeeData.engineers.push(new Engineer(name, id, email, github));
        if(confirmAddEngineer) {
            return promptEngineer(employeeData);
        }
        return employeeData;
    });
};

const promptIntern = employeeData => {
    if(!employeeData.interns) {
        employeeData.interns = [];
    };
    console.log(`
=========================
    Add a New Intern
=========================
    `);

    return inquirer .prompt([
        {
            type: "input",
            name: "name",
            message: "Provide the name of this Intern:",
            validate: response => {
                if(response) {
                    return true;
                }
                console.log("Please provide the Intern's name.");
                return false;
            }
        },
        {
            type: "number",
            name: "id",
            message: "Provide the Intern's ID:",
            validate: response => {
                if(response) {
                    return true;
                }
                console.log("Please provide the Intern's name.");
                return false;
            }
        },
        {
            type: "input",
            name: "email",
            message: "Provide the Intern's email:",
            validate: response => {
                if(response) {
                    return true;
                }
                console.log("Please provide the Intern's email:");
                return false;
            }
        },
        {
            type: "input",
            name: "college",
            message: "Provide the Intern's current school:",
            validate: response => {
                if(response) {
                    return true;
                }
                console.log("Please provide the Intern's current school:");
                return false;
            }
        },
        {
            type: "confirm",
            name: "confirmAddIntern",
            message: "Would you like to add another Intern?",
            default: false
        }
    ])
    .then(({ name, id, email, college, confirmAddIntern }) => {
        employeeData.interns.push(new Intern(name, id, email, college));
        if(confirmAddIntern) {
            return promptIntern(employeeData);
        }
        return employeeData;
    })
}

promptManager({})
    .then(promptEngineer)
    //.then(promptIntern)
    .then(employeeData => {
        return generatePage(employeeData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })