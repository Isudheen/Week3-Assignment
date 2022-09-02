const char = getInput();
console.log(char);
console.log(typeof char);

function getInput() {
  const readline = require('readline-sync');
  console.log('Enter a character: ');
  let ans = String(readline.question());
  return ans;
}
