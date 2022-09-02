const readline = require(`readline-sync`);

class Operations {
  addition(num1, num2) {
    return num1 + num2;
  }

  subtraction(num1, num2) {
    return num1 - num2;
  }

  multiplication(num1, num2) {
    return num1 * num2;
  }

  division(num1, num2) {
    return num1 / num2;
  }
}

function main() {
  const operation = new Operations();
  console.log(`
 Please choose an operation: \n1.Addition \n2.Subtraction \n3.Multiplication \n4.Division
 `);
  const choice = Number(readline.question());

  console.log(`Enter the two numbers for the operation:`);
  const num1 = Number(readline.question());
  const num2 = Number(readline.question());

  switch (choice) {
    case 1:
      console.log(operation.addition(num1, num2));
      break;
    case 2:
      console.log(operation.subtraction(num1, num2));
      break;
    case 3:
      console.log(operation.multiplication(num1, num2));
      break;
    case 4:
      console.log(operation.division(num1, num2));
      break;

    default:
      console.log('Invalid Entry, Please try again.');
      break;
  }
}
main();
