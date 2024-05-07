const Shapes = require('./shapes');
// can't tell if this matters; check with someone

describe('Shapes', () => {
    describe('Triangle', () => {
        test('should produce a blue triangle', () => {
            const shape = new Triangle();
            shape.shapeColor('blue');
            expect(shape.render()).toEqual('<polygon points= "150, 18 244, 182 56, 182" fill="blue"/>');
        })
    })

    describe('Square', () => {
        test('should produce a pink square', () => {
            const shape = new Square();
            shape.shapeColor('pink');
            expect(shape.render()).toEqual('<rect width="50" height="50" fill="pink"/>')
        })
    })

    describe('Circle', () => {
        test('should produce a green circle', () => {
            const shape = new Circle();
            shape.shapeColor('green');
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green"/>')
        })
    })
})