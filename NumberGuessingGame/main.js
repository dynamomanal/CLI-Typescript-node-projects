#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
function startgame() {
    return __awaiter(this, void 0, void 0, function* () {
        let again;
        do {
            yield computernumber();
            again = yield inquirer_1.default.prompt([
                {
                    type: "list",
                    name: "start",
                    choices: ["Yes", "No"],
                    message: chalk_1.default.blue("Do you want to continue the game")
                }
            ]);
        } while (again.start === "Yes");
    });
}
startgame();
function computernumber() {
    return __awaiter(this, void 0, void 0, function* () {
        let compNum = Math.floor(Math.random()) * 10;
        let hint;
        if (compNum % 2 == 0) {
            hint = "Number is even";
        }
        else {
            hint = "Number is odd";
        }
        ;
        const answer = yield inquirer_1.default.prompt([
            {
                type: "number",
                name: "userGuess",
                message: chalk_1.default.yellow.bold(`Guess a number between 1 to 10 hint:(${hint})`),
            }
        ]);
        console.log(`Your Guess is ${answer.userGuess}`);
        let score = 0;
        if (answer.userGuess === compNum) {
            score++;
            console.log(`Congrats you guessed correctly is ${answer.userGuess} is same as ${compNum} and your score is ${score}`);
        }
        else {
            console.log(`Sorry Wrong Guess the computer number is ${compNum} your score is ${score}`);
        }
    });
}
