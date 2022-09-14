const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// TODO: CODE GOES HERE
const inquirer = require('inquirer');

const team = [];

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
        employees.push(engineer);
    })
}


//Prompt for if they want to add more employees or not

//App menu which has choices to add

//build team function which will generate off page-template.js


