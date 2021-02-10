//require the node fs module
const fs = require('fs');
//require the inquirer module
var inquirer = require('inquirer');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'project title',
        message: 'What is your project title?',
    },
    {
        type: 'confirm',
        name: 'table of contents',
        message: 'Do you want to add Table of Contents?',
        answer: 'yes'
        if(response[1] === answer) {
            
        }
      },
{
    type: 'input',
        name: 'description',
            message: 'What is project description?',
      },
{
    type: 'input',
        name: 'installation',
            message: 'Provide a step-by-step description of how to get the application running?',
      },
{
    type: 'input',
        name: 'usage',
            message: 'Provide instructions and examples for use including screenshots',
      },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
