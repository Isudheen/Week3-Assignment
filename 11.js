const readline = require('readline-sync');

let arr1 = [],
  num = 0;
console.log('Enter the array size: ');
const size = getInput();

console.log('Enter array elements: ');
for (let i = 0; i < size; i++) {
  arr1[i] = getInput();
}

//Number of even numbers

for (let i = 0; i <= size; i++) {
  if (arr1[i] % 2 === 0) num++;
}

console.log(`Number of even numbers in the array is: ${num}`);

function getInput() {
  console.log('Waiting for input');
  const ans = readline.question();
  return ans;
}
