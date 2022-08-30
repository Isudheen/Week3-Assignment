const readline = require('readline-sync');

console.log('Enter array size: ');
const arr1 = [],
  arr2 = [],
  arr3 = [],
  size = getInput();

for (let i = 0; i < size; i++) {
  arr1[i] = [];
  for (j = 0; j < size; j++) {
    console.log('Enter the values of array 1: ');
    arr1[i][j] = getInput();
  }
}
for (let i = 0; i < size; i++) {
  arr2[i] = [];
  for (j = 0; j < size; j++) {
    console.log('Enter the values of array 2: ');
    arr2[i][j] = getInput();
  }
}
for (let i = 0; i < size; i++) {
  arr3[i] = [];
  for (j = 0; j < size; j++) {
    arr3[i][j] = arr1[i][j] + arr2[i][j];
  }
}
console.log(arr3);

function getInput() {
  console.log('Waiting for input');
  const ans = Number(readline.question());
  return ans;
}
