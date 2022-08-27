console.log('Enter the principal amount:');
const principal = getInput();

console.log();

function getInput() {
  const readline = require('readline-sync');
  let num = Number(readline.question());
  return num;
}
