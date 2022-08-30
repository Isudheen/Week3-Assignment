const readline = require('readline-sync');

const limit = getLimit();
let i,
  j,
  arr = [];

for (i = 1; i <= limit; i++) {
  let col = i;
  for (j = 1; j <= col; j++) {
    arr.push(j);
  }
  printArray(arr);
  arr = [];
}

function getLimit() {
  console.log('Enter the limit: ');
  const ans = readline.question();
  return ans;
}

function printArray(arr) {
  const arrString = arr.join(' ');
  console.log(arrString);
}
