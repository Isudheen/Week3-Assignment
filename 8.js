const readline = require(`readline-sync`);
const limit = getInput();

function getInput() {
  console.log(`Enter the limit to find sum of odd numbers: `);
  const ans = Number(readline.question());
  return ans;
}
