const inquirer = require("inquirer");
const { writeFile, copyFile } = require("./utils/generate-site.js");
const generatePage = require("./src/page-template.js");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const promptManager = () => {
    // if(!employeeData.managers) {
    //     employeeData.managers = [];
    // }
    console.log(`
=========================
    Add a New Manager
=========================
    `);

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
    .then(({ name, id, email, officeNumber }) => {
        const manager = new Manager(name, id, email, officeNumber);
        console.log(manager);
        return manager;
    })
};

const promptEngineer = employeeData => {
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
    ])
    .then(({ name, id, email, github }) => {
        const engineer = new Engineer(name, id, email, github);
        console.log(engineer);
        console.log(engineer.getGithub());
        return engineer;
    });
};

const promptIntern = employeeData => {
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
        }
    ])
    .then(({ name, id, email, college }) => {
        const intern = new Intern(name, id, email, college);
        console.log(intern);
        return intern;
    })
}


promptManager()
    .then(promptEngineer)
    .then(promptIntern)