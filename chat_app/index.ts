import inquirer from "inquirer";

class Gender {
  menname: string | undefined;
  womenname: string | undefined;
  constructor(menname?: string);
  constructor(womenname?: string);
  constructor(menname?: string, womenname?: string) {
    this.menname = menname;
    this.womenname = womenname;
  }
}

class Person {
  men: Gender[] = [];
  women: Gender[] = [];
  addMen(obj: Gender) {
    this.men.push(obj);
  }
  addWomen(obj: Gender) {
    this.women.push(obj);
  }
}

const persons = new Person();

// Storing an anonymous function in a variable
const programStart = async (persons: Person) => {
  do {
    console.log("Welcome Guests");
    const ans = await inquirer.prompt({
      type: "list",
      message: "With Whom you want to talk with?",
      choices: ["Myself", "Men", "Women"],
      name: "select",
    });
    if (ans.select == "Myself") {
      console.log("Hello, I want to talk to my ownself");
      console.log("I am good");
      console.log("I am worried and aggressive as well");
    }

    if (ans.select == "Men") {
       
      const ans2 = await inquirer.prompt({
        type: "input",
        message: "Which Men you would like to talk with?",
        name: "men",
      });
      const men:Gender|undefined = persons.men.find((val) => val.menname === ans2.men);
      if (!men) {
        persons.addMen(men);
        console.log(`Hello my Name is ${men.menname}`);
      } 
    }

    if (ans.select == "Women") {
      const ans3 = await inquirer.prompt({
        type: "input",
        message: "What is the name of women you would like to talk with?",
        name: "women",
      });
      const women = persons.women?.find((val) => val.womenname === ans3.women);
      if (!women) {
        const newWomen = new Gender(ans3.women);
        persons.addWomen(newWomen);
        console.log(`Hello my Name is ${newWomen.womenname}`);
      } else {
        console.log(`Hello my Name is ${women.womenname}, and I am good`);
      }
    }
  } while (true);
};

programStart(persons);
