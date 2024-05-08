class CreateSvg { 
    constructor(text, textColor, shape){
        this.text = text;
        this.textColor = textColor;
        this.shape = shape;
    }

    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${this.shape.render()}
        
        <text x="100" y="115" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
        </svg>`;
    }
}


module.exports = CreateSvg;