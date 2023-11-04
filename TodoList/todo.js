import inquirer from "inquirer";
import chalk from "chalk";
let Todo = [];
let cnd = true;
while (cnd) {
    const answer = await inquirer.prompt([
        {
            message: chalk.redBright("What you want to add in you to do list ?"),
            type: "input",
            name: "Todo"
        },
        {
            message: chalk.redBright("Do you want to add more"),
            type: "confirm",
            name: "AddMore",
            default: "false"
        },
    ]);
    cnd = answer.AddMore;
    if (Todo != null) {
        Todo.push(answer.Todo);
        console.log(Todo);
    }
    else {
        console.log('Please enter a valid value');
    }
}
