const readline = require('readline-sync');

console.log('Enter a number for prime check: ');
const num = getInput();
let flag = 0;

if (num <= 1) flag = 1;

for (let i = 2; i <= num / 2; i++) {
  if (num % i == 0) {
    flag = 1;
    break;
  }
}

if (flag == 0) {
  console.log('Entered number is a prime number');
} else {
  console.log('Entered number is not a prime');
}

function getInput() {
  console.log('Waiting for input');
  const ans = Number(readline.question());
  return ans;
}
