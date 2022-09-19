const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

// TODO: CODE GOES HERE
const fs = require('fs');
const inquirer = require('inquirer');
const create = require('./src/page-template.js');

const team = [];


const createManager = [

    {
        type: 'input',
        message: "What is the manager's name?",
        name: 'managerName',
    },
    {
        type: 'input',
        message: "What is the manager's id?",
        name: 'managerId',
    },
    {
        type: 'input',
        message: "What is the manager's email?",
        name: 'managerEmail',
    },
    {
        type: 'input',
        message: "What is the manager's office number?",
        name: 'managerOfficeNumber',
    },
]

const createMenu = [

    {
        type: 'list',
        message: "Please choose an option using arrow keys then press enter",
        choices: [
            "select to provide Manager information, press enter",
            "select to add an Engineer, press enter",
            "select to add an Intern, press enter",
            "select to finish building team, press enter"
        ],
        name: 'options'
    },
]



const createEngineer = [

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
]


const createIntern = [
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
]

function menuQuestions() {
    inquirer.prompt(createMenu)
        .then(function ({ options }) {
            switch (options) {
                case "select to provide Manager information, press enter":
                    managerQuestions();
                    break;
                case "select to add an Engineer, press enter":
                    engineerQuestions();
                    break;
                case "select to add an Intern, press enter":
                    internQuestions();
                    break;
                case "select to finish building team, press enter":
                    buildTeam();
                    break;
            }
        })




    function managerQuestions() {
        inquirer.prompt(createManager)
            .then((answers) => {
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
                team.push(manager);
                console.log(manager);
                console.log(team);
                menuQuestions();
            })
    }

    function engineerQuestions() {
        inquirer.prompt(createEngineer)
            .then((answers) => {
                const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
                team.push(engineer);
                console.log(engineer);
                console.log(team);
                menuQuestions();
            })
    }

    function internQuestions() {
        inquirer.prompt(createIntern)
            .then((answers) => {
                const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                team.push(intern);
                console.log(intern);
                menuQuestions();
            })
    }

    function buildTeam() {
        console.log(team);
        fs.writeFile('./dist/team.html', create(team), (err) => {
            err ? console.error(err) : console.log('Your team profile is ready');
        });
    }
}


function init() {
    menuQuestions()


}


init();

//console.log('Your team profile is ready');


        //Prompt for if they want to add more employees or not

        //App menu which has choices to add

        //build team function which will generate off page-template.js



