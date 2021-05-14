// Include file system and inquirer packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
// team manager’s name, employee ID, email address, and office number
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'What is the name of the Manager?',
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'What is their employee ID?',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'What is their email address?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is their office number?',
    },
    {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Add another employee to the team?',
    },
];

const employeeQuestions = [
    {
        type: 'input',
        name: 'employeeName',
        message: 'What is the name of the employee?',
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'What is their employee ID?',
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'What is their email address?',
    },
    {
        type: 'checkbox',
        name: 'emplyeeRole',
        message: 'What is their Role?',
        choices: [
            'Engineer',
            'Intern',
        ]
    },
    {
        type: 'input',
        name: 'engineerGithub',
        message: 'What is their Github username?',
        when: (responses) => {
            return responses.employeeRole === 'Engineer'
        }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'What school are they attending?',
        when: (responses) => {
            return responses.employeeRole === 'Intern'
        }
    },
    {
        type: 'confirm',
        name: 'newEmployee',
        message: 'Add another employee to the team?',
    },
];

// create an array of employees
let employees = []

// Create a function to initialize app
    // prompt for responses
    // pass responses to generateHTML function and write the HTML file

// initialize the app