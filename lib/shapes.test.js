const { Circle, Triangle, Square } = require('./shapes');
// can't tell if this matters; check with someone

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should produce a blue triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
        })
    })

    describe('Square', () => {
        it('should produce a pink square', () => {
            const shape = new Square();
            shape.setColor("pink");
            expect(shape.render()).toEqual('<rect width="50" height="50" fill="pink"/>')
        })
    })

    describe('Circle', () => {
        it('should produce a green circle', () => {
            const shape = new Circle();
            shape.setColor("green");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="green"/>')
        })
    })
})