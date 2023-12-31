const filesystem = require('./node_modules/graceful-fs/graceful-fs');
const { Circle, Square, Triangle } = require("./lib/shapes");

class Svg {
    constructor() {
        this.textElement = ''
        this.shapeElement = ''
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
    }
    setTextElement(text, color) {
        this.textElement = `<text x="150" y="100" dy=".35em" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
}

const questions = [
    {
        type: "input",
        name: "text",
        message: "choose up to 3 text characters:",
    },
    {
        type: "input",
        name: "text-color",
        message: "Choose a color keyword or HEX number :",
    },
    {
        type: "input",
        name: "shape",
        message: "Choose a color keyword or HEX number :",
    },
    {
        type: "list",
        name: "pixel-image",
        message: "Which Pixel Image you would like for your logo?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

// Function to write data to file, uses filesystem
function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]")
    filesystem.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("you have generated a logo with svg");
    });
}

async function getInquirer() {
    return import('inquirer');
}

async function init() {
    const inquirerModule = await getInquirer();
    const { prompt } = inquirerModule.default;
    
    console.log("Starting init");
    var svgString = "";
    var svg_file = "logo.svg";

    // Prompts the user for answers in command line
    const answers = await prompt(questions);

    var user_text = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
        user_text = answers.text;
    } else {
        console.log("Invalid user text field. enter 1-3 characters only");
        return;
    }

    console.log("User text: [" + user_text + "]");
    user_font_color = answers["text-color"];
    console.log("User font color: [" + user_font_color + "]");
    user_shape_color = answers.shape;
    console.log("User shape color: [" + user_shape_color + "]");
    user_shape_type = answers["pixel-image"];
    console.log("User entered shape = [" + user_shape_type + "]");
    
    let user_shape;
    if (user_shape_type === "Square" || user_shape_type === "square") {
        user_shape = new Square();
        console.log("User selected Square shape");
    } else if (user_shape_type === "Circle" || user_shape_type === "circle") {
        user_shape = new Circle();
        console.log("User selected Circle shape");
    } else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
        user_shape = new Triangle();
        console.log("User selected Triangle shape");
    } else {
        console.log("Invalid shape!");
    }
    user_shape.setColor(user_shape_color);

    var svg = new Svg();
    svg.setTextElement(user_text, user_font_color);
    svg.setShapeElement(user_shape);
    svgString = svg.render();
    
    console.log("Displaying shape:\n\n" + svgString);

    console.log("Shape generation complete!");
    console.log("Writing shape to file...");
    writeToFile(svg_file, svgString); 
}

init();
