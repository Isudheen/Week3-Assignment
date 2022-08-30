const readline = require('readline-sync');

console.log(`Enter a string: `);
const str = getInput();

const str1 = strRev(str);
if (str === str1) {
  console.log('Entered string is a palindrome');
} else {
  console.log('Entered string is not a palindrome');
}

function getInput() {
  console.log('Waiting for input');
  const ans = readline.question();
  return ans;
}

function strRev(str) {
  const revstr = str.split('').reverse().join('');
  return revstr;
}
