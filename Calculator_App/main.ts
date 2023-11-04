import {sum} from "./add.js";
import inquirer from "inquirer";
import chalk from 'chalk';

console.log(chalk.bgGray('Enter Numbers'));
console.log(chalk.green.bgGray(' 1  2  3  4 '))
console.log(chalk.green.bgGray(' 5  6  7  8 '))
console.log(chalk.green.bgGray(' 9  0 '))
console.log(chalk.red.bgGray(' +  -  *  /'))

let answer:{
   Num1:number;
   Num2:number;
   operation:string;
}
 answer= await inquirer.prompt( [
    {
          name:"Num1",
          type:"number",
          message:"Please Enter your First Number",


 },
 {
    message:"Please Enter your Second Number",
    type:"number",
    name:"Num2"


},
{
 message:"Choose the Operator",
 type:"list",
 name:'operation',
 choices:
 [
"+",
"-",
"*",
"/"
]
},
]
); 
// await is used to instruct the method to take to wait for user input 
//if(answer.choices==answer.choices[0])
//{
  // console.log(answer.Num1 + answer.Num2) 
//}

//console.log(result)
//We make modules so that we can import and reuse everytime
if(answer.Num1 && answer.Num2 && answer.operation){
   let result = 0;
if(answer.operation === '+'){
 result= answer.Num1 + answer.Num2
 console.log(result)
;}
else if(answer.operation ==='-'){
   result= answer.Num1 - answer.Num2
   console.log(result);
}
else if(answer.operation ==='*'){
   result= answer.Num1*answer.Num2
   console.log(result);
}
else if(answer.operation ==='/'){
   result= answer.Num1/answer.Num2
   console.log(result);
}
}
else{
   'PLEASE ENTER A VALID VALUE'
}
