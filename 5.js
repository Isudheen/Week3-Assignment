const readline = require('readline-sync');
const totalMark = parseFloat(getInput());

if (totalMark > 100 || totalMark < 0) {
  console.log('Invalid Entry');
} else if (totalMark >= 90) {
  console.log('A');
} else if (totalMark >= 80) {
  console.log('B');
} else if (totalMark >= 70) {
  console.log('C');
} else if (totalMark >= 60) {
  console.log('D');
} else if (totalMark >= 50) {
  console.log('E');
} else if (totalMark < 50) {
  console.log('Failed');
} else {
  console.log('Invalid Entry');
}

function getInput() {
  console.log('Enter the mark: ');
  const ans = Number(readline.question());
  return ans;
}
