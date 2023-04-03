// required packages
const inquirer = require('inquirer');

const logoQuestions = [
    // checks if user input is 3 or less characters, won't proceed to next question until criteria is meet
    {
        type: 'input',
        message: 'Choose three characters to be apart of your logo',
        name: 'characters',
        validate: (input) => {
            if (input.length <= 3){
                return true;
            } 
            else {
                return false;
            }
        }
    },
    {
        // Presents user with shape choices
        type: 'list',
        message: 'What shape would you like to use for your logo?',
        name: 'shape',
        choices: ['Circle', 'Square', 'Triangle']
    },
    {
        // allows user to input a color choice
        type: 'input',
        message: 'Enter a color keyword or hexadecimal number to choose a color for your logo.',
        name: 'color'
    }
];

function init() {
    inquirer
        .prompt(logoQuestions)
        .then((response) =>
            console.log(response));
}

// Function call to initialize app
init();