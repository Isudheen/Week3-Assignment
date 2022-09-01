const readline = require(`readline-sync`);

function main() {
  const arr1 = get2DArray();
  displayArray(arr1);
}

function get2DArray() {
  console.log('Enter array size');
  const size = getInput(),
    arr = [];
  console.log('Enter 2D array elements ');
  for (let i = 0; i < size; i++) {
    arr[i] = [];
    for (let j = 0; j < size; j++) {
      arr[i][j] = getInput();
    }
  }
  return arr;
}

function displayArray(arr) {
  console.log(arr);
}

main();

function getInput() {
  console.log('Waiting for input');
  const ans = Number(readline.question());
  return ans;
}
