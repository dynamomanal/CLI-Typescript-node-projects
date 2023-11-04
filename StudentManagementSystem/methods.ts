import inquirer, { QuestionCollection } from "inquirer";

class Student{
    name: string;
  static  id:string|number;
    courses:string[];
    enroll(course:string){
        this.courses.push(course);

    }
    fees:number = 0;
    viewFees(){
    console.log('Pending Fees:${this.fees}');

    }
    payFees(fee:number){
        if(fee != 0){
          this.fees = fee;
           console.log('You have paid ${this.fees}');
        }


    }
    showStatus(){
        console.log(`
      Name: ${this.name}
      ID: ${Student.id}
      Courses: ${this.courses || 'None'}
      Pending fees: ${this.fees}
    `);

    }
constructor(
 courses:string[],
 fees:number ,
studentname:string,
id:string,


){
    this.name =studentname;
    this.courses = courses;
    this.fees =fees;
   Student.id= id;



}

}

//const student = new Student('');

class StudentManagementSystem {
    private students: Student[];
    constructor(studentslist?:Student[]){
        this.students = studentslist ?? [];
    }
    // addStudent(name:string | number) {
    //     const student = new Student(
    //       name,
    //       (Math.floor(Math.random() * 99999)).toString()
    //     );
    //     this.students.push(student);
    //     console.log(`Student ${name} added. ID: ${student.id}`);
    //   }
     
};
//Add Student Method
async function enrollStudent() {
    const { id, course } = await inquirer.prompt([
      {
        type: 'input',
        name: 'course',
        message: 'Enter course name:',
        validate: (val:any) => Boolean(val) || 'Please enter course name...',
      },
      
    ] as QuestionCollection<{ id: string, course: string }>);
    
    // if (student) {
    //   student.enroll(course);
    //   student.fees += 500
    //   console.log(`Student ${student.name} enrolled in course ${course}.`);
    // } else {
    //   console.log(`Student with ID ${id} not found.`);
    // }
}
async function showStatus() {
  
    // if (student) {
    //   student.showStatus();
    // } else {
    //   console.log(`Student with ID ${Student.id} not found.`);
    // }
  }
