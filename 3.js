const readline = require('readline-sync');

console.log('Enter the principal amount: ');
const principal = parseInt(getInput());
console.log(principal);

console.log('Enter the interest rate: ');
const rate = parseFloat(getInput());

console.log('Enter duration: ');
const time = parseFloat(getInput());

const interest = (principal * rate * time) / 100;
console.log(`The simple interest is ${interest}`);

function getInput() {
  let num = Number(readline.question());
  return num;
}
