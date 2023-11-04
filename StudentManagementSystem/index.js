import inquirer from '\inquirer';
const { calltoactions } = await inquirer.prompt([
    {
        name: 'StudentName',
        type: 'String',
        message: "What would you lik to do?",
        choices: [
            'Add student',
            'Enroll student',
            'Show balance',
            'List students',
            'Remove student',
            'Pay fees',
            'Show status',
            'Exit'
        ],
        //filter keyword takes in afunction which take the receive the input and whatever is done through this function it will be implemented through out code
        filter: (val) => val.toUppercase().replace('', '_')
    },
]);
switch (calltoactions) {
    case 'ADD_STUDENT':
        const answers = await inquirer.prompt([{
                type: 'input',
                name: 'Student Name',
                message: 'Enter student Name',
                //validate checks true the initial and false after the pipe
                validate: (val) => Boolean(val) || 'Please enter student name'
            },
            {
                type: 'input',
                name: 'Student ID',
                message: 'Enter student ID',
                validate: (val) => val.toString(val) === '5' || 'Please enter 5 digit Student ID'
            }]);
    case 'Enroll_Student':
    case 'Show_Balance':
    case 'List_Student':
    case 'Remove_Student':
    case 'Pay_Fees':
    case 'Show_Status':
    case 'Exit':
}
// This project is a simple console based Student Management System. In this project you will be learning how to add new students, how to generate a 5 digit unique studentID for each student, how to enroll students in the given courses. Also, you will be implementing the following operations
// enroll, view balance, 
//pay tuition fees, show status, etc. 
//The status will show all the details of the student including name, id, courses enrolled and balance.This is one of the best projects to implement the Object Oriented Programming concepts.
// Create a GitHub repository for the project and submit its URL in the project submission form.
