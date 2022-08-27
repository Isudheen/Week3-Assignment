 const num1 = getInput();
 const num2 = getInput();

 const sum = num1 + num2;
 console.log(`The sum of two numbers is: ${sum}`);

function getInput() {
 const readline = require("readline-sync");
 console.log("Enter a number:");
 let num = Number(readline.question());
 return num;
}