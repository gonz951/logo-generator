class Shapes {
    constructor(shapeColor){
        this.shapeColor = '';
    }

    setColor(shapeColor){
        this.shapeColor = shapeColor
    }
}
// First attempt ==========================================

class Triangle extends Shapes {
    // constructor(shape, shapeColor) {
    //     super(shapeColor)
    //     this.shape = shape;
    // }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`;
    }
}

class Square extends Shapes {
    // constructor(shape, shapeColor) {
    //     super(shapeColor)
    //     this.shape = shape;
    // }

    render() {
        return `<rect width="50" height="50" fill="${this.shapeColor}"/>`;
    }
}

class Circle extends Shapes {
    // constructor(shape, shapeColor) {
    //     super(shapeColor)
    //     this.shape = shape;
    // }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
    }
}

// ! This didn't register, find a new solution

module.exports = { Circle, Triangle, Square };