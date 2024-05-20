#! /usr/bin/env node

// Importing Inquirer and Chalk Packages
import inquirer from "inquirer";
import chalk from "chalk";

// Display a colourfull Welcome message
console.log(chalk.bold.cyanBright("\n \t\t Code With Owais Khan - Word Counter"));
console.log("=".repeat(60));

// prompt the user to enter a  sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a Sentence",
    }
]);

// Trimming the Sentence and Splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");

// Analysis of user unput Sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence Words:"));
console.log(words);
console.log(chalk.bold(`\n - Word Count: ${chalk.bold.redBright(words.length)}`));
console.log("=".repeat(60));