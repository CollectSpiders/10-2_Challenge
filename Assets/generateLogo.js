function generateLogo(data) {
    // switch statement based on index.js choice of shape
    switch(data.shape){
        // if shape is circle return ___
        case 'Circle':
            return `
                <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <circle cx="150" cy="100" r="80" fill="${data.color}" />

                <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${data.characters}</text>

                </svg>`
            break;

        // if shape is square return ___
        case 'Square':
            return ``
            break;

        // if shape is triangle return ___
        case 'Triangle':
            return ``
            break;
    }

};

module.exports = generateLogo;
