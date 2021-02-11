//require the node fs module
const fs = require('fs');
//require the inquirer module
var inquirer = require('inquirer');
//require the util module
var util = require('util');
//require the generator module
var generateMarkdown = require('./utils/generateMarkdown');
const writeFileAsync = util.promisify(fs.writeFile)


// // function to initialize program
function init() {
    // function to write README file


    // array of questions for user
    const questions = [
        {
            type: 'input',
            name: 'projectTitle',
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
            name: 'collaborator1',
            message: 'Provide name of the first collaborator. ',

        },
        {

            type: 'input',
            name: 'collaborator2',
            message: 'Provide name of the second collaborator. ',

        },
        {

            type: 'input',
            name: 'collaborator3',
            message: 'Provide name of the third collaborator. ',

        },
        {

            type: 'input',
            name: 'collaborator4',
            message: 'Provide name of the fourth collaborator. ',

        },
        {

            type: 'input',
            name: 'collaborator5',
            message: 'Provide name of the fifth collaborator. ',

        },
        {

            type: 'input',
            name: 'github1',
            message: 'What is the first collaborator GitHub username? ',

        },
        {

            type: 'input',
            name: 'github2',
            message: 'What is the second collaborator GitHub username? ',

        },
        {

            type: 'input',
            name: 'github3',
            message: 'What is the third collaborator GitHub username? ',

        },
        {

            type: 'input',
            name: 'github4',
            message: 'What is the fourth collaborator GitHub username? ',

        },
        {

            type: 'input',
            name: 'github5',
            message: 'What is the fifth collaborator GitHub username? ',

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

        writeFileAsync('README.md', generateMarkdown((data))
           

    );



})};





// function call to initialize program
init();
