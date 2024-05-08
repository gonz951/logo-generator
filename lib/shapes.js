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
        return `<polygon x="50" y="50" points="100, 10 200, 160 10, 160" fill="${this.shapeColor}"/>`;
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="50" y="50" width="100" height="100" fill="${this.shapeColor}"/>`;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="105" cy="100" r="80" fill="${this.shapeColor}"/>`;
    }
}

module.exports = { Circle, Triangle, Square };