const inquirer = require('inquirer');
// const { createSvg } = require('./svg')

class CLI {
    constructor() {
        this.logo = [];
    }
    run() {
        return inquirer
        .prompt([
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
        ])
        .then(({ shape, shapeColor, text, textColor }) => {
            this.logo.push({ shape, shapeColor, text, textColor });
        });
    }
}

module.exports = CLI;