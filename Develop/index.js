import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
const questions = [

    {
        type: 'list',
        name: 'license',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License (GPL) v3', 'Mozilla Public License 2.0', 'BSD 3-Clause License', 'None'],
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your application?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a few sentances describing your application',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How would a user install your application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How does a user use your application?',
    },
    {
        type: 'input',
        name: 'credits',
        messege: 'This is where you credit others who have held you build your application.'
    }
    , {
        type: 'input',
        name: 'contribution',
        message: 'How can other developers contribut to your application? If they can not simply put N/A',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'This is where you paste tests for your application, as well as instructions on how to use those tests. Again put N/A if there are none.',
    },
    {
        type: 'input',
        name: 'gitHUbUserName',
        message: 'What is your Git Hub username?',
    },
    {
        type: 'input',
        name: 'gitHUbLink',
        message: 'Paste a link to your Git Hub Repo here.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is a good email for people to reach you at?',
    }
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(data => writeToFile('README.md', data))
}

// Function call to initialize app
init();
