const readline = require(`readline-sync`);

console.log('Enter array size');
const size = getInput();

function main() {
  const arr1 = get2DArray();
  const arr2 = get2DArray();
  const sumArray = add2DArray(arr1, arr2);
  displayArray(sumArray);
}

function get2DArray() {
  const arr = [];
  console.log('Enter 2D array elements ');
  for (let i = 0; i < size; i++) {
    arr[i] = [];
    for (let j = 0; j < size; j++) {
      arr[i][j] = getInput();
    }
  }
  return arr;
}

function add2DArray(arr1, arr2) {
  const arrX = arr1,
    arrY = arr2;
  const arrZ = [];
  for (let i = 0; i < size; i++) {
    arrZ[i] = [];
    for (let j = 0; j < size; j++) {
      arrZ[i][j] = arrX[i][j] + arrY[i][j];
    }
  }
  return arrZ;
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
