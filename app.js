#! /usr/bin/env node
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
//displaying welcome message
console.log(chalk_1.default.bold.yellow(`\n  \t\t <<<================================================>>>`));
console.log(chalk_1.default.bold.blue(`<<<=========>>>  ${chalk_1.default.blueBright.bold("Welcome To 'Hafeez Siddiqui' - OBJECT ORIENTED PROGRAMMING ")}  <<<=========>>>`));
console.log(chalk_1.default.bold.yellow(`\t\t <<<===============================================>>>\n`));
// create class
class Person {
    constructor() {
        this.personality = "Mystery";
    }
    //user input
    userInput(input) {
        if (input.includes(`I like to tell others about Myself`)) {
            this.personality = "Social Butterfly";
        }
        else if (input.includes("I like to Keep Quiet and Don`t ask Questions")) {
            this.personality = "Gentle Observer";
        }
    }
    //return function
    get _personality() {
        return this.personality;
    }
}
//create objects
class Main {
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            const ans = yield inquirer_1.default.prompt([{
                    name: "choice",
                    type: "list",
                    choices: ["I like to tell others about Myself", "I like to Keep Quiet and Don`t ask Questions"],
                    message: chalk_1.default.magenta("Tell Us Your Behaviour?")
                }]);
            //create a personal class
            let myPerson = new Person();
            myPerson.userInput(ans.choice);
            console.log(chalk_1.default.green(`It sounds Quiet Amazing. You are a ${myPerson._personality}`));
        });
    }
}
const myObject = new Main();
myObject.main();
