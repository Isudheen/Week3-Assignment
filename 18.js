const readline = require(`readline-sync`);

console.log(`Enter the marks scored by the student: \n 1. Written Test:`);
const test = readline.question();

console.log(`2. Lab Exam:`);
const exam = readline.question();

console.log(`3. Assignments: `);
const asnmt = readline.question();

const grade = test * 0.7 + exam * 0.2 + asnmt * 0.1;

console.log(`Grade of the student is: ${grade}`);
