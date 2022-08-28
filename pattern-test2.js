let i, j, l;
let arr1 = [],
  limit = 11,
  k = 1;
middle = (limit - 1) / 2;

for (i = 0; i < limit; i++) {
  if (i <= middle) {
    col = 2 * i;
  } else col = 2 * (limit - i) - 2;

  for (j = 0; j <= col; j++) {
    if (j == 0 || j == col) {
      arr1[j] = '*';
    } else {
      arr1[j] = k;
      if (i <= middle) j < i ? k++ : k--;
      if (i > middle) j < limit - i - 1 ? k++ : k--;
    }
  }
  console.log(arr1.join(''));
  arr1 = [];
  k = 1;
}
