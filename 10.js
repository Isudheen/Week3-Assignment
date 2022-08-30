const readline = require('readline-sync');

//Array input and printing
let arr1 = [],
  arr2 = [];
console.log('Enter the array size: ');
const size = getInput();

console.log('Enter array 1 elements: ');
for (let i = 0; i < size; i++) {
  arr1[i] = getInput();
}

console.log('Enter array 2 elements: ');
for (let i = 0; i < size; i++) {
  arr2[i] = getInput();
}
console.log(`Arrays before swapping:\n Array1: ${arr1}\n Array2: ${arr2}`);

//Array Swapping:
let temp = arr1;
arr1 = arr2;
arr2 = temp;

console.log(`Arrays after swapping:\n Array1: ${arr1}\n Array2: ${arr2}`);

function getInput() {
  console.log('Waiting for input');
  const ans = readline.question();
  return ans;
}
