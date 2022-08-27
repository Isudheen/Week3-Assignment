const readline = require(`readline-sync`);
const num = getInput();

console.log(`The multiplication table of ${num} is: `);
for (i = 1; i <= 10; i++) {
  console.log(`${i} x ${num} = ${i * num}`);
}

function getInput() {
  console.log(`Enter a number: `);
  const ans = Number(readline.question());
  return ans;
}
