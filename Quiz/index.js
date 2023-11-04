import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
const rainbow = chalkAnimation.rainbow(' Typescript Quiz ');
let score = 0;
let questions = 5;
setTimeout(async () => {
    rainbow.stop();
    let quiz;
    quiz = await inquirer.prompt([
        {
            name: "q1",
            type: 'rawlist',
            message: 'What is an area in code where you can declare types but cannot declare implementations?',
            choices: [
                'Declaration file',
                'Ambient context',
                'Implementation block',
            ],
        },
        {
            name: "q2",
            type: 'rawlist',
            message: 'What is a type that is allowed to be used anywhere and can be given anything?',
            choices: [
                'Unknown',
                'Any',
                'Top type',
            ],
        },
        {
            name: "q3",
            type: 'rawlist',
            message: "What is the catchy industry term for type systems allowing values like null in places requiring a different type?",
            choices: [
                'Strict null checking',
                'Type assertion',
                'Billion-dollar mistake',
            ]
        },
        {
            name: "q4",
            type: 'rawlist',
            message: "What is a type that has no possible values—the empty set of types?",
            choices: [
                'Null type',
                "Void type",
                "Bottom type",
            ]
        },
        {
            name: "q5",
            type: 'rawlist',
            message: "What is a TypeScript construct that allows a different type to be substituted each time a new usage is created?",
            choices: [
                "Enum",
                "Generic",
                "Interface",
            ]
        },
    ]);
    const ans1 = quiz.q1;
    const ans2 = quiz.q2;
    const ans3 = quiz.q3;
    const ans4 = quiz.q4;
    const ans5 = quiz.q5;
    const correct1 = 'Ambient context';
    const correct2 = 'Any';
    const correct3 = 'Billion-dollar mistake';
    const correct4 = "Bottom type";
    const correct5 = "Generic";
    if (ans1 === correct1) {
        score++;
        console.log('You have answered correctly');
    }
    else {
        console.log(`Wrong answer correct answer is: ${correct1}`);
    }
    if (ans2 === correct2) {
        score++;
        console.log('You have answered correctly');
    }
    else {
        console.log(`Wrong answer correct answer is :${correct2}`);
    }
    if (ans3 === correct3) {
        score++;
        console.log('You have answered correctly');
    }
    else {
        console.log(`Wrong answer correct answer is :${correct3}`);
    }
    if (ans4 === correct4) {
        score++;
        console.log('You have answered correctly');
    }
    else {
        console.log(`Wrong answer correct answer is :${correct4}`);
    }
    if (ans5 === correct5) {
        score++;
        console.log('You have answered correctly');
    }
    else {
        console.log(`Wrong answer correct answer is :${correct5}`);
    }
    if (score === questions) {
        chalkAnimation.neon(`Congratulations you answered all questions correctly you score is ${score}/${questions}`);
    }
    else if (score < questions) {
        let percentage = score / questions * 100;
        if (percentage >= 70 && percentage <= 99) {
            console.log(chalk.blue.bgRed.bold `Your grade is A1 grade ${percentage} %`);
        }
        else if (percentage >= 59 && percentage <= 69) {
            console.log(chalk.blue.bgRed.bold `Your grade is B grade ${percentage} %`);
        }
        else if (percentage >= 46 && percentage <= 58) {
            console.log(chalk.blue.bgRed.bold `Your grade is C grade ${percentage} %`);
        }
        else if (percentage >= 38 && percentage <= 45) {
            console.log(chalk.blue.bgRed.bold `Your grade is D grade ${percentage} % `);
        }
        else if (percentage >= 20 && percentage <= 40) {
            console.log(chalk.blue.bgRed.bold `You failed Your score is ${percentage} %`);
        }
        else {
            console.log(chalk.blue.bgRed.bold `Try again `);
        }
    }
    else {
        console.log('Try Again Something went wrong ');
    }
}, 1000);
