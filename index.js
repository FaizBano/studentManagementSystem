#! usr/bin/env/node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.red.bold.underline("\n ****** WELCOME TO STUDENTS MANAGEMENT SYSTEM****** \n"));
let do_continue = true;
while (do_continue) {
    let sId = Math.floor(10000 + Math.random() * 10000 + 1);
    let balance = 0;
    let studentData = await inquirer.prompt([
        {
            name: "student",
            Type: "input",
            message: (chalk.green.bold("Enter Student Name")),
        },
        {
            name: "course",
            type: "list",
            message: (chalk.blue.bold("Which Course do you prefare? \n")),
            choices: ["javascript", "python", "AI"]
        },
    ]);
    let mybalance = balance;
    if (studentData.course === "javascript") {
        if (studentData.course = "jawascript") {
            mybalance = 20000;
        }
        console.log(chalk.red.bold(`${studentData.course} fee/balance = ${mybalance}\n`));
    }
    else if (studentData.course === "python") {
        if (studentData.course = "python") {
            mybalance = 10000;
            console.log(chalk.yellow.bold(`${studentData.course} fee/balance = ${mybalance}`));
        }
    }
    else if (studentData.course === "AI") {
        mybalance = 50000;
        console.log(chalk.yellow.bold(` The Fee/Balance of ${studentData.course}=${mybalance}`));
    }
    else {
        console.log(chalk.red.bold("invalild course"));
    }
    let studentId = sId;
    console.log("Student ID code is", studentId);
    let myTask = await inquirer.prompt([
        {
            name: "option",
            type: "list",
            message: (chalk.blue.bold("Select Option to perform the Task")),
            choices: ["View", "Exit"]
        }
    ]);
    if (myTask.option === "View") {
        console.log(chalk.green.bold(`\n Student Name = ${studentData.student}`));
        console.log(chalk.green.bold(` Student ID code = ${sId} `));
        console.log(chalk.green.bold(` Student's Course is = ${studentData.course} `));
        console.log(chalk.green.bold(`Fee of ${studentData.course} = ${mybalance}`));
    }
    else {
        console.log("Thank You For Using Our Services");
    }
    let repeateTask = await inquirer.prompt([{
            name: "confirm",
            type: "list",
            message: "Do You Want to Continue??",
            choices: ["Continue", "Exit"]
        }
    ]);
    if (repeateTask.confirm === "Continue") {
        console.log("you are continue to your task");
    }
    else {
        console.log("Thak You for using our App");
        break;
    }
}
