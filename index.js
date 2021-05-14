// Include file system and inquirer packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require ('./lib/Manager.js')
const Engineer = require ('./lib/Engineer.js')
const Intern = require ('./lib/Intern.js');

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
        type: 'list',
        name: 'employeeRole',
        message: 'What is their Role?',
        choices: [
            'Engineer',
            'Intern',
        ],
        default: 'Engineer'
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

// create a function to prompt for additional employees

function promptEmployees () {
    inquirer
    .prompt([...employeeQuestions])
    .then((employeeResponses) => {
        console.log(employeeResponses.employeeRole)
        if(employeeResponses.employeeRole === 'Engineer') {
            employee = new Engineer(employeeResponses.employeeName, employeeResponses.employeeID, employeeResponses.employeeEmail, employeeResponses.engineerGithub)
            employees.push(employee)
            console.log('you added an engineer')
        } 
        
        if(employeeResponses.employeeRole === 'Intern') {
            employee = new Intern(employeeResponses.employeeName, employeeResponses.employeeID, employeeResponses.employeeEmail, employeeResponses.internSchool)
            employees.push(employee)
            console.log('you added an intern')
        }
        
        if (employeeResponses.newEmployee) {
            promptEmployees ()
        } else {
            console.log(employees[1].name + 'is a' + employees[1].getRole() + ' and their id is ' + employees[1].getId())
        }
    })
}

// Create a function to initialize app

function init () {
    inquirer
    .prompt([...managerQuestions])
    .then((managerResponses) => {
        let employee; 
        employee = new Manager(managerResponses.managerName, managerResponses.managerID, managerResponses.managerEmail, managerResponses.officeNumber)
        employees.push(employee)
        console.log(employees)
        if (managerResponses.newEmployee) {
            promptEmployees ()
        } else {
            console.log(employees[0].name)
        }
    })
}

    // prompt for manager
    // push manager into employees array
    // if more employees, prompt for more
    // pass responses to generateHTML function and write the HTML file

// initialize the app
init ()