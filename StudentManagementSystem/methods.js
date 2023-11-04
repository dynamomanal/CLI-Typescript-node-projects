import inquirer from "inquirer";
class Student {
    name;
    static id;
    courses;
    enroll(course) {
        this.courses.push(course);
    }
    fees = 0;
    viewFees() {
        console.log(`Pending Fees:${this.fees}`);
    }
    payFees(fee) {
        if (fee != 0) {
            this.fees = fee;
            console.log('You have paid ${this.fees}');
        }
    }
    showStatus() {
        console.log(`
      Name: ${this.name}
      ID: ${Student.id}
      Courses: ${this.courses || 'None'}
      Pending fees: ${this.fees}
    `);
    }
    constructor(courses, fees, studentname, id) {
        this.name = studentname;
        this.courses = courses;
        this.fees = fees;
        Student.id = id;
    }
}
//const student = new Student('');
class StudentManagementSystem {
    students;
    constructor(studentslist) {
        this.students = studentslist ?? [];
    }
}
;
//Add Student Method
async function enrollStudent() {
    const { id, course } = await inquirer.prompt([
        {
            type: 'input',
            name: 'course',
            message: 'Enter course name:',
            validate: (val) => Boolean(val) || 'Please enter course name...',
        },
    ]);
    const student = this.students.find(s => s.id === id);
    if (student) {
        student.enroll(course);
        student.fees += 500;
        console.log(`Student ${student.name} enrolled in course ${course}.`);
    }
    else {
        console.log(`Student with ID ${id} not found.`);
    }
}
async function showStatus() {
    // if (student) {
    //   student.showStatus();
    // } else {
    //   console.log(`Student with ID ${Student.id} not found.`);
    // }
}
