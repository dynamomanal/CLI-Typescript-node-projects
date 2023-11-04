import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bgWhiteBright.bold('             C u r r e n c y   C o n v e r t e r            '));
console.log(chalk.rgb(123, 45, 67).bgWhiteBright.underline( '         |GBP|    |PKR|    |USD|    |EUR|          '));



interface conversions{
   GBP:number;
   PKR:number;
   USD:number;
   EUR:number;


}


const conversions = {
    GBP:{
        GBP: 1,
        PKR:335.70,
        USD:1.22,
        EUR:1.15,
     },
     USD:{
        GBP:0.82 ,
        PKR:0.82,
        USD:1,
        EUR:0.95,
     },
     EUR:{
        GBP:0.87 ,
        PKR:291.10,
        USD:1.05,
        EUR:1,
     },
     PKR:{
        GBP: 0.0030,
        PKR:1,
        USD:0.0036,
        EUR:0.0034,
     },



}


let answers:{
 From:"USD"| "EUR"|"GBP"|"PKR", 
 To:"USD"| "EUR"|"GBP"|"PKR", 
 amount:number,
}

answers= await inquirer.prompt([
    {
        type:'list',
        name:'From',
        message:'Choose the currrency you want to convert from',
        choices: ["GBP","USD","EUR","PKR"]


    },
    {
        type:'list',
        name:'To',
        message:'Choose the currency you want to convert to ',
        choices: ["GBP","USD","EUR","PKR"]


    },
    {
        type:'number',
        name:'amount',
        message:'Enter the amount you want to convert'

    },
])
if(answers.From && answers.To && answers.amount){

   // let converse= conversions.GBP.PKR;
   //This is same as below way of acccesing an object property value

 let conversion:number= conversions[answers.From][answers.To]*answers.amount;
 console.log(`Your conversion from ${answers.amount} ${answers.From} to ${answers.To} is ${conversion}`)






}
else{
    console.log('Invalid Inputs')
}