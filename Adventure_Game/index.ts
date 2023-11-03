import inquirer from 'inquirer';
import chalk from 'chalk';
import { welcome } from './welcome.js';

await welcome();
//Game variables
const enemies:string[] = ['Skeleton', 'warrior', 'assasin'];
let maxEnergyHealth:number = 75;
let enemyAttackDamage:number = 25;
//Player variables 
let health:number = 100;
let attackDamage:number = 50;
let numHealthPotions:number = 3;
let healthPotionMealAmount:number = 30;
let healthPotionDropChance:number = 50;


function randomIntFromInterval(min :number, max: number ):number { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  
  

let running:boolean =true;
console.log('Welcome to the Dungeon');

while(running){
    console.log('--------------------------');
    let enemyHealth:number = randomIntFromInterval(0,maxEnergyHealth);
    let enemy:number = randomIntFromInterval(1,enemies.length);
    let healthdrop:number = randomIntFromInterval(0,health);
   while(enemyHealth > 0){
    console.log(`Your HP:${health}`)
    console.log(`You have ${enemy} enemies and enemy health is ${enemyHealth}`)
    const answers = await inquirer.prompt([{
     name:"Question1",
     message:"What would you like to do ?",
     type:"list",
     choices:['Attack', 'Drink Health Potions', 'Run']


    }
   
] 
    );
    if( answers.Question1 === 'Attack'){
        let damageDealt:number = randomIntFromInterval(0,attackDamage);
        let damageTaken:number = randomIntFromInterval(0,enemyAttackDamage);
        enemyHealth -= damageDealt;
        health -= damageTaken;
        console.log(`You strike  ${enemy}  for a ${damageDealt} damage`);
        console.log(`You receive ${damageTaken} in retaliation`);
        console.log(`Your health is now decreased to ${health}`);
        if (health < 30){
            console.log('You have taken too much damage, you are too weak to go on');
            break;
        }
    }
    else if (answers.Question1 === 'Drink Health Potions'){
        numHealthPotions= randomIntFromInterval(0,4);
        if(numHealthPotions > 0){
            health += healthPotionMealAmount;
            numHealthPotions--;
           console.log(`You drink a health potion , healing yourself for ${healthPotionMealAmount} .`);
           console.log(`You now have ${health}`);
           console.log(`You have ${numHealthPotions} health potions left`)

        }
        else{
            console.log(`You have no health potions left ! Defeat enemies for a chance to get one!`)
        }
    }


    
    else if (answers.Question1 ==='Run'){
        console.log(`You run away from the ${enemy}`);
       
    }
 else{
        console.log('Invalid command');

    }
}
if(health < 10){
    console.log(`You jumped out of the dungeon, weak from battle`);
    break;
}
console.log("--------------------");
console.log(` ${enemy} was defeated`);
console.log(`You have ${health} HP left`);
if(healthdrop < healthPotionDropChance){
    numHealthPotions++;
    console.log(`The ${enemy} dropped a health potion`);
    console.log(`You now have ${numHealthPotions} health potions `);


}
console.log(`------------------`);
const answers2 = await inquirer.prompt([{
    name:"Question2",
    message:"What would you like to do ?",
    type:"list",
    choices:['1. Continue Fighting ', "2.Exit Dungeon", ]


   }
]
)
let answer2:string = answers2.Question2;
while(answers2.Question2 = 0 ){
    console.log('invalid command ');
    console.log(`${answer2}`);
}
if(answer2 ==='1. Continue Fighting ' ){
    console.log('Continue adventure')

}
else if(answer2 === '2.Exit Dungeon'){
console.log('You exited Dungeon Sucessfully');
break;
}
console.log('#############');
console.log('Thanks For PLAYING')
  
    

}
