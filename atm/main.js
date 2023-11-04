
#!/usr/bin/node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
const Atm = await inquirer_1.default.prompt([
    {
        type: "input",
        name: "username",
        message: chalk_1.default.bgCyan.black("Please Enter Your Username"),
    },
    {
        type: "password",
        name: "Pin",
        message: chalk_1.default.bgCyan.black("Please Enter your Personal Identification Number"),
    },
    {
        type: "list",
        name: "accountType",
        choices: ["Current Account", "Saving Account"],
        message: chalk_1.default.bgCyan.black("Select your Account Type"),
    },
    {
        type: "list",
        name: "transactionType",
        choices: ["Fast Cash", "Cash Withdrawal"],
        message: chalk_1.default.bgCyan.black("Select transaction type"),
    },
    {
        type: "number",
        name: "cashWithdrawal",
        message: chalk_1.default.bgCyan.black("Please enter the amount you want to Withdraw"),
        when(Atm) {
            return Atm.transactionType == "Cash Withdrawal";
        }
    },
    {
        type: "list",
        name: "fastCash",
        message: chalk_1.default.bgCyan("Select the amount you want to Withdraw"),
        choices: ["1000", "10000", "3000", "20000", "5000", "50000"],
        when(Atm) {
            return Atm.transactionType == "Fast Cash";
        }
    },
    {
        type: "list",
        message: chalk_1.default.red("2.5 rupees will be charged for the Slip ,Would you like to receive a slip?"),
        name: "Slip",
        choices: ["Yes", "No"]
    },
]);
if (Atm.Pin && Atm.username) {
    if (Atm.transactionType == "Fast Cash") {
        let fastcash = Atm.fastCash;
        function getFastCash() {
            const random = Math.floor(Math.random() * 100000);
            let balance = random - fastcash;
            if (balance < fastcash) {
                balance = balance * -1;
                console.log(chalk_1.default.italic.bold.bgBlue.yellow `Your remaining cash is ${balance}`);
            }
            else {
                console.log(chalk_1.default.italic.bold.bgBlue.yellow `Your remaining cash is ${balance}`);
            }
        }
        getFastCash();
    }
    else {
        let cashWithdrawal = Atm.cashWithdrawal;
        function getCash() {
            const random = Math.floor(Math.random() * 10000);
            let balance = random - cashWithdrawal;
            if (balance < cashWithdrawal) {
                balance = balance * -1;
                console.log(chalk_1.default.italic.bold.bgBlue.yellow `Your remaining cash is ${balance}`);
            }
            else {
                console.log(chalk_1.default.italic.bold.bgBlue.yellow `Your remaining cash is ${balance}`);
            }
        }
        getCash();
    }
}
setTimeout(() => {
    console.log(chalk_1.default.italic.bold.bgBlue.yellow("Your transaction is being processed "));
}, 1000);
setTimeout(() => {
    console.log(chalk_1.default.italic.bold.bgBlue.yellow("Thank you for choosing this ATM"));
}, 6000);
