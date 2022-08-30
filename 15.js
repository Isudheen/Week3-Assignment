const readline = require('readline-sync');

console.log('Enter the array size:');
const size = getInput();
main();

function main() {
  const arr1 = getArray();

  displayArray(arr1);
}

function getArray() {
  console.log('Enter the array elements:');
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr[i] = getInput();
  }
  return arr;
}
function displayArray(arr) {
  console.log(arr);
}

function getInput() {
  console.log('Waiting for input');
  const ans = Number(readline.question());
  return ans;
}
