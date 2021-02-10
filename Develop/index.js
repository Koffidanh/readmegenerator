//require the node fs module
const fs = require('fs');
//require the inquirer module
var inquirer = require('inquirer');
//require the util module
var util = require('util');
//require the generator module
var generatorMarkdown = require('./utils/generateMarkdown');



// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'project title',
        message: 'What is your project title?',
    },
    {
        type: 'confirm',
        name: 'contents',
        message: 'Do you want to add Table of Contents?',
        answer: 'yes'

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
    {

        type: 'input',
        name: 'collaborators',
        message: 'Provide name of the collaborators. ',
        
    },
    {

        type: 'input',
        name: 'github',
        message: 'What is the collaborator GitHub username? ',
        
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for the project.',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0'],
        
      },

];
inquirer.prompt(questions).then((data) => {
    console.log('\nUser input:');
    console.log(JSON.stringify(data, null, '  '));
   
});


// // function to write README file
function writeToFile('README.md', generatorMarkdown(data) , (err) =>
  
err ? console.error(err) : console.log('Readme created!')
);


// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
