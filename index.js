const filesystem = require('./node_modules/graceful-fs/graceful-fs')
const inquirer = require("inquirer");

const {Circle, Square, Triangle} = require("./lib/shapes");




class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){

        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeElement(shape){
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