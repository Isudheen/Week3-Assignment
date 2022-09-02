const readline = require(`readline-sync`);
let tax;
console.log('Enter the income:');
const income = readline.question();

if (income > 0 && income <= 250000) {
  tax = 0;
  console.log(`Income tax amount = ${tax}`);
} else if (income > 250000 && income <= 500000) {
  tax = 0.05 * income;
  console.log(`Income tax amount = ${tax}`);
} else if (income > 500000 && income <= 1000000) {
  tax = 0.2 * income;
  console.log(`Income tax amount = ${tax}`);
} else if (income > 1000000 && income <= 5000000) {
  tax = 0.3 * income;
  console.log(`Income tax amount = ${tax}`);
} else {
  console.log('Invalid amount, please try again');
}

function getInput() {
  console.log(`Enter a number: `);
  const ans = Number(readline.question());
  return ans;
}
