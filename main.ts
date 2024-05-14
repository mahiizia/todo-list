#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let condition = true;
console.log("\n\twelcome to my todo list tool\n");

while (condition){
let addTask = await inquirer.prompt(
    [
        {
            name:"todo",
            message:"What you want to add in your todos..?",
            type:"input"
        },
        {
            name:"addMore",
            type:"confirm",
            message:"Do you want to add more..?"
        },
        
    ],
    
);

// console.log(addTask.todo);
todos.push(addTask.todo);
condition = addTask.addMore
console.log(todos);
};
console.log ("\n\t thanks for using my tool i hope you enjoy;) \n");
