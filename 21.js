const readline = require(`readline-sync`);

console.log('Enter array size');
const size = getInput();

const arr1 = getArray();

const prodArray = prodAdj();
console.log(prodArray);

function prodAdj() {
  let prod = [];
  arr1.forEach((x, i) => {
    if (i + 1 < size) prod[i] = arr1[i + 1] * x;
  });
  return prod;
}

function getArray() {
  const arr = [];
  console.log('Enter 2D array elements ');
  for (let i = 0; i < size; i++) {
    arr[i] = getInput();
  }
  return arr;
}

function getInput() {
  console.log('Waiting for input');
  const ans = Number(readline.question());
  return ans;
}
