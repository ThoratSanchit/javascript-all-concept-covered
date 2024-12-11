let arr = [1, 2, 3, 5];

function sorted(arr) {
  for (let i = 1; i < arr.length ; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
}

console.log(sorted(arr));
