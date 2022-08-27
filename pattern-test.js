const limit = getInput();

let i, j, arr1 = [], pattern;
 for(i = 0; i < limit; i++) {
  for(j = 0; j <= i; j++) {
   arr1[j] = "*";
  }
  pattern = arr1.join(' ');
  console.log(pattern);
 }

 function getInput() {
  const readline = require("readline-sync");
  console.log("Enter a beautiful limit: ");
  let ans = readline.question();
  return ans;
 }