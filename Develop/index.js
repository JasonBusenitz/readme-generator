import fs from 'fs';
import inquirer from 'inquirer';

// TODO: Create an array of questions for user input
const questions = [

    inquirer
        .prompt(
            [
                {
                    type: 'list',
                    name: 'data-license',
                    choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License (GPL) v3', 'Mozilla Public License 2.0', 'BSD 3-Clause License', 'None'],
                },
                {
                    type: 'input',
                    name: 'data-title',
                    message: 'What is the title of your application?',
                },
                {
                    type: 'input',
                    name: 'data-description',
                    message: 'Write a few sentances describing your application',
                },
                {
                    type: 'input',
                    name: 'data-install',
                    message: 'How would a user install your application?',
                },
                {
                    type: 'input',
                    name: 'data-usage',
                    message: 'How does a user use your application?',
                },
                {
                    type: 'input',
                    name: 'data-contribution',
                    message: 'How can other developers contribut to your application? If they can not simply put N/A',
                },
                {
                    type: 'input',
                    name: 'data-tests',
                    message: 'This is where you pate tests for your application, as well as instructions on how to use those tests.',
                },
                {
                    type: 'input',
                    name: 'data-gitHUbUserName',
                    message: 'What is your Git Hub username?',
                },
                {
                    type: 'input',
                    name: 'data-gitHUbLink',
                    message: 'Paste a link to your Git Hub account here.',
                },
                {
                    type: 'input',
                    name: 'data-email',
                    message: 'What is a good email for people to reach you at?',
                }
            ]
        )

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
