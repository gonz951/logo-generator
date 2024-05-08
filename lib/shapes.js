class Shapes {
    constructor(shapeColor){
        this.shapeColor = '';
    }

    setColor(shapeColor){
        this.shapeColor = shapeColor
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>`;
    }
}

class Square extends Shapes {
    render() {
        return `<rect width="50" height="50" fill="${this.shapeColor}"/>`;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>`;
    }
}

module.exports = { Circle, Triangle, Square };