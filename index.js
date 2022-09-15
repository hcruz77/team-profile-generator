const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


// TODO: CODE GOES HERE
const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const pageTemplate = require('./src/page-template');

function writeToFile(fileName, userInput) {
    fs.writeFile(fileName, userInput, (err) => {
        err ? console.error(err) : console.log('Your team profile is ready');
    });
}

const team = [];


function createManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the manager's name?",
            name: 'managerName'
        },
        {
            type: 'input',
            message: "What is the manager's id?",
            name: 'managerId'
        },
        {
            type: 'input',
            message: "What is the manager's email?",
            name: 'managerEmail'
        },
        {
            type: 'input',
            message: "What is the manager's office number?",
            name: 'managerOfficeNumber'
        },
    ]).then((data) => {
        const manager = new Manager(
            data.managerName,
            data.managerId,
            data.managerEmail,
            data.managerOfficeNumber
        )

        team.push(manager);
        writeToFile('./dist/team.html', pageTemplate(team, data));

    })
}
createManager();

function createMenu() {
    inquirer.prompt([
    {
        type: 'list',
        message: "Please choose an option",
        choices: [
            "add an Engineer",
            "add an Intern",
            "finish building team"
        ],
        name: 'options'

}



function createEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'engineerName'
        },
        {
            type: 'input',
            message: "What is the engineer's id?",
            name: 'engineerId'
        },
        {
            type: 'input',
            message: "What is the engineer's email?",
            name: 'engineerEmail'
        },
        {
            type: 'input',
            message: "What is the engineer's github?",
            name: 'engineerGithub'
        },
    ]).then((data) => {
        const engineer = new Engineer(
            data.engineerName,
            data.engineerId,
            data.engineerEmail,
            data.engineerGithub
        )
        team.push(engineer);
        writeToFile('./dist/team.html', pageTemplate(team, data));
    })
}
createEngineer();

function createIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'internName'
        },
        {
            type: 'input',
            message: "What is the intern's id?",
            name: 'internId'
        },
        {
            type: 'input',
            message: "What is the intern's email?",
            name: 'internEmail'
        },
        {
            type: 'input',
            message: "What is the intern's shcool?",
            name: 'internSchool'
        },
    ]).then((data) => {
        const intern = new Intern(
            data.internName,
            data.internId,
            data.internEmail,
            data.internSchool
        )
        team.push(intern);
        writeToFile('./dist/team.html', pageTemplate(team, data));
    });
}
createIntern();


//Prompt for if they want to add more employees or not

//App menu which has choices to add

//build team function which will generate off page-template.js


