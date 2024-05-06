const inquirer = require('inquirer');


class CLI {
    constructor() {

    }
}

// questions that need to be asked 
const questions = [
    {
        name: 'shape',
        message: 'Which shape do you want your logo to be?',
        type: 'list',
        choices: ['square', 'triangle', 'circle']
    }, 
    {
        name: 'shapeColor',
        message: 'What color do you want the logo to be?',
        type: 'list',
        choices: ['green', 'orange', 'blue', 'pink']
    },
    {
        name: 'text',
        message: 'What do you want your logo to say? (Maximum 3 characters)',
        type: 'input'
    },
    {
        name: 'textColor',
        message: 'What color do you want the text to be?',
        type: 'list',
        choices: ['white', 'black', 'yellow', 'navy']
    },

]

module.exports = CLI;