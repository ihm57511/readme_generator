// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does this project require?',
        choices: [
            'MIT',
            'BSD3',
            'APACHE2.0',
            'none',
        ]
    },
    {   
        type: 'input',
        name: 'description',
        message: 'Please provide a description of this project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide any pertinent usage information.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Are there any guidlines for contribution?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What are the testing instructions?',
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'Please provide your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            writeToFile('testReadMe.md', generate(response));
        })
}

// Function call to initialize app
init();
