import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";

const res = await inquirer.prompt(
    {
        type:"number",
        name:"userInput",
        message:"Please enter the amount of second"
    }
);
let val = res.userInput;
console.log(val);

let input = res.userInput;
function startTime(val:number){
    const intTime = new Date().setSeconds(new Date().getSeconds()+ 1);
    const intervalTime = new Date()


    setInterval(()=>{
        const currentTime = new Date()
        const timeDiff = differenceInSeconds(intervalTime,currentTime);
        if(timeDiff <=0){
            console.log("Timer has expired");
        }
        const min = Math.floor(timeDiff%(3600*24))/3600;
        const second = Math.floor(timeDiff%(timeDiff % 60));
    },1000);
} 
startTime(input);


// console.log(date);
