const readline = require('readline-sync');
const dayNum = getInput();

switch (dayNum) {
  case 1:
    day = 'Sunday';
    break;
  case 2:
    day = 'Monday';
    break;
  case 3:
    day = 'Tuesday';
    break;
  case 4:
    day = 'Wednesday';
    break;
  case 5:
    day = 'Thursday';
    break;
  case 6:
    day = 'Friday';
    break;
  case 7:
    day = 'Saturday';
    break;

  default:
    day = 'Invalid Entry';
    break;
}

console.log(day);

function getInput() {
  console.log(`Enter the day number: `);
  const ans = Number(readline.question());
  return ans;
}
