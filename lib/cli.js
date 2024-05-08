const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Square, Triangle, Circle } = require('./shapes');
const CreateSvg = require('./svg');

class CLI {
    constructor() {
        this.logo = '';
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
        // ! Finish .then chain
        .then(({ shape, shapeColor, text, textColor }) => {
            let userShape;
            if (shape = 'square') {
                userShape = new Square()
            } else if (shape = 'triangle') {
                userShape = new Triangle()
            } else if (shape = 'circle') {
                userShape = new Circle()
            }
            userShape.setColor(shapeColor)
            let svg = new CreateSvg(userShape, text, textColor)
            return writeFile('logo.svg', svg.render())
        })
        // eventually 
        .then(() => console.log('Created logo!'))
        .catch((err) => {
            console.log(err);
            console.log('Something went wrong.')
        })
    }
}

module.exports = CLI;