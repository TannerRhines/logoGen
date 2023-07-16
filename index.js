const filesystem = require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require("inquirer");




























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