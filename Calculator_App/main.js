"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.bgGray('Enter Numbers'));
console.log(chalk_1.default.green.bgGray(' 1  2  3  4 '));
console.log(chalk_1.default.green.bgGray(' 5  6  7  8 '));
console.log(chalk_1.default.green.bgGray(' 9  0 '));
console.log(chalk_1.default.red.bgGray(' +  -  *  /'));
let answer;
answer = await inquirer_1.default.prompt([
    {
        name: "Num1",
        type: "number",
        message: "Please Enter your First Number",
    },
    {
        message: "Please Enter your Second Number",
        type: "number",
        name: "Num2"
    },
    {
        message: "Choose the Operator",
        type: "list",
        name: 'operation',
        choices: [
            "+",
            "-",
            "*",
            "/"
        ]
    },
]);
// await is used to instruct the method to take to wait for user input 
//if(answer.choices==answer.choices[0])
//{
// console.log(answer.Num1 + answer.Num2) 
//}
//console.log(result)
//We make modules so that we can import and reuse everytime
if (answer.Num1 && answer.Num2 && answer.operation) {
    let result = 0;
    if (answer.operation === '+') {
        result = answer.Num1 + answer.Num2;
        console.log(result);
    }
    else if (answer.operation === '-') {
        result = answer.Num1 - answer.Num2;
        console.log(result);
    }
    else if (answer.operation === '*') {
        result = answer.Num1 * answer.Num2;
        console.log(result);
    }
    else if (answer.operation === '/') {
        result = answer.Num1 / answer.Num2;
        console.log(result);
    }
}
else {
    'PLEASE ENTER A VALID VALUE';
}
