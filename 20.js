const readline = require('readline-sync');

const limit = getInput();

let i,
  j,
  k = 1,
  pattern;
let arr1 = [];
for (i = 1; i <= limit; i++) {
  for (j = 1; j <= i; j++) {
    arr1[j] = k;
    k++;
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
