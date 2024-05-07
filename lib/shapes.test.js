const Shapes = require('./shapes');
// NEED MULTIPLE FILES FOR EACH SHAPE!!

describe('Shapes', () => {
    describe('Triangle', () => {
        test('should produce a blue triangle', () => {
            const shape = new Shapes();
            shape.setColor('blue');
            expect(shape.render()).toEqual('<polygon points= "150, 18 244, 182 56, 182" fill="blue"/>');
        })
    })

    describe('Square', () => {
        test('should produce a pink square', () => {
            const shape = new Square();
            shape.setColor('pink');
            expect(shape.render()).toEqual('<rect ')
        })
    })
})