#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";



//displaying welcome message
console.log(
  chalk.bold.yellow(
    `\n  \t\t <<<================================================>>>`
  )
);
console.log(
  chalk.bold.blue(
    `<<<=========>>>  ${chalk.blueBright.bold(
      "Welcome To 'Hafeez Siddiqui' - OBJECT ORIENTED PROGRAMMING "
    )}  <<<=========>>>`
  
  )
);
console.log(
  chalk.bold.yellow(
    `\t\t <<<===============================================>>>\n`
  )
);



// create class
class Person {
    private personality: string;
    constructor() {
        this.personality ="Mystery"
    }

    //user input
    userInput(input: string) { 
        if (input.includes(`I like to tell others about Myself`)) {
            this.personality = "Social Butterfly"
        } else if (input.includes("I like to Keep Quiet and Don`t ask Questions")) {
            this.personality="Gentle Observer"
        }
        
    }
    
    //return function
    get _personality() {
        return this.personality
    }
}

//create objects
class Main{
    public async main() {
        
        const ans = await inquirer.prompt([{
            name: "choice",
            type: "list",
            choices: ["I like to tell others about Myself","I like to Keep Quiet and Don`t ask Questions"],
            message:chalk.magenta("Tell Us Your Behaviour?")
        }])

        //create a personal class
        let myPerson = new Person()
        
        myPerson.userInput(ans.choice);

        console.log(chalk.green(`It sounds Quiet Amazing. You are a ${myPerson._personality}`));
        
    }
}

const myObject = new Main();
myObject.main()