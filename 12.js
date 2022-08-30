const readline = require('readline-sync');

const arr1 = [];
console.log('Enter the array size: ');
const size = getInput();

console.log('Enter array elements: ');
for (let i = 0; i < size; i++) {
  arr1[i] = getInput();
}

console.log(`Unsorted array: ${arr1}`);

const arr2 = arr1.sort((a, b) => a - b);
console.log(`Sorted array ${arr2}`);

function getInput() {
  console.log('Waiting for input');
  const ans = Number(readline.question());
  return ans;
}
