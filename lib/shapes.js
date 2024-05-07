class Shapes {
    constructor(shapeColor){
        this.shapeColor = shapeColor;
    }
}
// First attempt ==========================================

class Triangle extends Shapes {
    constructor(shape, shapeColor) {
        super(shapeColor)
        this.shape = shape;
    }

    render() {
        this.shape = `<polygon points="150, 18 244, 182 56, 182" fill= "${this.shapeColor}"/>`
        return;
    }
}

class Square extends Shapes {
    constructor(shape, shapeColor) {
        super(shapeColor)
        this.shape = shape;
    }

    render() {
        this.shape = `<polygon points="150, 18 244, 182 56, 182" fill= "${this.shapeColor}"/>`
        return;
    }
}

class Circle extends Shapes {
    constructor(shape, shapeColor) {
        super(shapeColor)
        this.shape = shape;
    }

    render() {
        this.shape = `<circle cx="150" cy="100" r="80" fill= "${this.shapeColor}"/>`
        return;
    }
}

// ! This didn't register, find a new solution

module.exports = Shapes;