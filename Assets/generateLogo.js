// Define the base Shape class
class Shape {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color || "black";
    }
  
    // Define a method to render the shape as an SVG string
    render() {
        throw new Error("Not implemented");
    }
};

// Circle class that inherits from Shape
class Circle extends Shape {
    constructor(x, y, radius, color) {
        super(x, y, color);
        this.radius = radius;
    }
  
    // Implement the render method for the Circle class
    render() {
        return `<circle cx="${this.x}" cy="${this.y}" r="${this.radius}" fill="${this.color}" />`;
    }
};

// Square class that inherits from Shape
class Square extends Shape {
    constructor(x, y, size, color) {
        super(x, y, color);
        this.size = size;
    }
  
    // This renders the Square class
    render() {
        return `<rect x="${this.x}" y="${this.y}" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
    }
};

// Triangle class that inherits from Shape
class Triangle extends Shape {
    constructor(x, y, size, color) {
        super(x, y, color);
        this.size = size;
    }
  
    // Renders the Triangle class
    render() {
        const halfSize = this.size / 2;
        const points = [
            [this.x + halfSize, this.y],
            [this.x, this.y + this.size],
            [this.x + this.size, this.y + this.size]
        ];
        return `<polygon points="${points.map(p => p.join(',')).join(' ')}" fill="${this.color}" />`;
    }
}

function generateLogo(data) {
    // switch statement based on index.js choice of shape
    switch(data.shape){
        // if shape is circle dynamically return ___ 
        case 'Circle':
            return `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <circle cx="150" cy="100" r="80" fill="${data.color}" />

                <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.characters}</text>

                </svg>`
            break;

        // if shape is square dynamically return ___
        case 'Square':
            return `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <rect width="300" height="200" fill="${data.color}" />

                <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.characters}</text>

                </svg>`
            break;

        // if shape is triangle dynamically return ___
        case 'Triangle':
            return `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <polygon points="150,0 0,200 300,200" fill="${data.color}" stroke="black"/>

                <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.characters}</text>

                </svg>`
            break;
    }

};

module.exports = generateLogo;
