const readline = require('readline-sync');

console.log('Enter a string: ');
const myString = 1234;

function stringRev() {
  const revMyString = myString.split('').reverse().join('');
  return revMyString;
}

try {
  const revString = stringRev();
  console.log(`reversed string is ${revString}`);
} catch (e) {
  console.log(`Error: ${e}`);
} finally {
  console.log(`Type of myString is ${typeof myString}`);
}
