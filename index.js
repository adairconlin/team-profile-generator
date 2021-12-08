const inquirer = require("inquirer");
const { writeFile, copyFile } = require("./utils/generate-site.js");
const generatePage = require("./src/page-template.js");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const promptManager = employeeData => {
    if(!employeeData.managers) {
        employeeData.managers = [];
    }
    console.log(`
    ==================
    Add a New Manager
    ==================
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
                console.log("Please provide the Manager's email");
                return false;
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Provide the Manager's office number",
            validate: response => {
                if(response) {
                    return true;
                }
                console.log("Please provide the managers office number");
                return false;
            }
        }
    ])
    .then(employeeData => {
        employeeData.managers.push(new Manager(name, id, email, officeNumber));
        console.log(employeeData.managers);
    })
};

promptManager();