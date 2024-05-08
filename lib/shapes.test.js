const { Circle, Triangle, Square } = require('./shapes');
// can't tell if this matters; check with someone

describe('Shapes', () => {
    describe('Triangle', () => {
        it('should produce a blue triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon x="50" y="50" points="100, 10 200, 160 10, 160" fill="blue"/>');
        })
    })

    describe('Square', () => {
        it('should produce a pink square', () => {
            const shape = new Square();
            shape.setColor("pink");
            expect(shape.render()).toEqual('<rect x="50" y="50" width="100" height="100" fill="pink"/>')
        })
    })

    describe('Circle', () => {
        it('should produce a green circle', () => {
            const shape = new Circle();
            shape.setColor("green");
            expect(shape.render()).toEqual('<circle cx="105" cy="100" r="80" fill="green"/>')
        })
    })
})