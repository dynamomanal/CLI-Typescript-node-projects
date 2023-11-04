#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";




    async function startgame() {
  
    let again;
   do {
        await computernumber();
         again = await inquirer.prompt(
            [
                {
                type:"list",
                name:"start",
                choices:["Yes","No"],
                message:chalk.blue("Do you want to continue the game")
    }
]
        )
    }
    while( again.start ==="Yes")

}
startgame();
async function computernumber()
{
    let compNum= Math.floor(Math.random())*10;
    let hint;
    if(compNum%2 == 0){
        hint = "Number is even"
       
    }
    else{
 hint = "Number is odd"
    };


    const answer = await inquirer.prompt(
        [
            {
                type:"number",
                name:"userGuess",
                message:chalk.yellow.bold(`Guess a number between 1 to 10 hint:(${hint})`),
            }
        ]
    );
    console.log(`Your Guess is ${answer.userGuess}`)

   

    let score=0;
    if(answer.userGuess === compNum){
        score ++;
        console.log(`Congrats you guessed correctly is ${answer.userGuess} is same as ${compNum} and your score is ${score}`)
    }
    else{
        console.log(`Sorry Wrong Guess the computer number is ${compNum} your score is ${score}`)
    }
}


