import inquirer from "inquirer";
import chalk from "chalk";
let Todo:string[] = [];
let cnd:boolean = true;

type Answer ={
    Todo:string;
    AddMore:boolean;
}


 while(cnd){
 const answer:Answer =  await inquirer.prompt ( [ 
        {
            message:chalk.yellowBright("What you want to add in you to do list ?"),
            type:"input",
            name:"Todo"

        },
        {
            message:chalk.blueBright("Do you want to add more"),
            type:"confirm",
            name:"AddMore",
            default:"false"
        },

    
    ]
    )

    cnd = answer.AddMore
    if(Todo != null ){
    Todo.push(answer.Todo);
    console.log(Todo);
    }
    else{
        console.log('Please enter a valid value')
    }
}

