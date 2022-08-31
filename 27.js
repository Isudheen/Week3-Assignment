const readline = require('readline-sync');

function getHeight() {
  const userHeight = readline.question();
  if (isNaN(userHeight)) {
    throw 'notANumberError';
  } else if (userHeight > 200) {
    throw 'HugeHeightError';
  } else if (userHeight < 40) {
    throw 'TinyHeightError';
  } else if (userHeight >= 40 && userHeight <= 200) {
    console.log(`valid`);
  } else {
    throw 'Invalid entry';
  }
}

try {
  getHeight();
} catch (err) {
  console.error(err);
}
