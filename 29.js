'use strict';

const readline = require('readline-sync');

console.log('Enter the array size:');
const size = getInput();

const myArray = getArray();
let sum;

myFilter(myArray, callback);

function myFilter(myArray, fn) {
  fn(myArray);
  console.log(sum);
}

function callback(myArray) {
  sum = myArray.reduce((x, y) => x + y, 0);
  if (sum % 2 == 0) {
    return true;
  } else return false;
}

function getArray() {
  console.log('Enter the array elements:');
  const arr = [];
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
