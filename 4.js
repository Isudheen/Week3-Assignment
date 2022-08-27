const mark = parseFloat(getInput());
if (mark >= 50 && mark >= 0 && mark <= 100) {
  console.log('Passed');
} else if (mark < 50 && mark >= 0) {
  console.log('Failed');
} else {
  console.log('Invalid input');
}

function getInput() {
  const readline = require('readline-sync');
  console.log('Enter the mark: ');
  const ans = Number(readline.question());
  return ans;
}
