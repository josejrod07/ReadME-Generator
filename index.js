// Import required packages

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./readME/markdown');

// User Questions

const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Github associated email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the project's name?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a minimal description for your project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license does your project use?',
        choices: ['MIT', 'GPLv3', 'Apache_2.0', 'ISC', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Command to install dependencies: ',
        default: 'npm install',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Command to run tests',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the specific requirements for using this project',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter the specific requirements for contributing to this repo',
    },
];

// Function to write README file using the user input

function writeToFile(fileName, data) {
    // The function uses the Node.js fs (file system) module to write the data to a file with the given fileName. The fs.writeFileSync() method writes data to a file synchronously and blocks execution until the file is written.
    // The path.join() method is used to concatenate the readME folder with the fileName argument, to create the full file path.
    return fs.writeFileSync(path.join('readME', fileName), data);
  }
  
  // Function to initialize app

  function enterUserResponse() {
// Defines a function that uses the inquirer module to prompt the user with a set of questions defined in the questions variable. When the user responds to the questions, the then() method is called, which passes the user's responses to a callback function that generates a README file using the generateMarkdown() function and writes it to a file using the writeToFile() function.
    inquirer.prompt(questions).then((inquirerResponses) => {
      console.log('Generating README...');
      writeToFile('README.md', generateMarkdown({ ...inquirerResponses }));
    });
  }
  
  enterUserResponse();