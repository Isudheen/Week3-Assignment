const readline = require(`readline-sync`);
const limit = getInput();

let i,
  sum = 0;
for (i = 1; i <= limit; i++) {
  if (i % 2 === 1 || i === 1) {
    sum += i;
  }
}
console.log(`Sum of odd numbers upto ${limit} is : ${sum}`);

function getInput() {
  console.log(`Enter the limit to find sum of odd numbers: `);
  const ans = Number(readline.question());
  return ans;
}
