const readline = require('readline-sync');

const limit = getInput();

let i, j, pattern;
let arr1 = [];
for (i = 0; i < limit; i++) {
  for (j = 0; j <= i; j++) {
    arr1[j] = '*';
  }
  pattern = arr1.join(' ');
  console.log(pattern);
  arr1 = [];
}

function getInput() {
  console.log('Enter a beautiful limit: ');
  let ans = readline.question();
  return ans;
}
