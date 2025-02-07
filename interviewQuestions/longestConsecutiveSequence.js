function checknum() {
  let arr = [1, 2, 3, 55,4, 66, 7];
  if (arr.length === 0) return 0;

  arr.sort((a, b) => a - b);
  let longestStrek = 1;
  let currentStreak = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) continue;
    if (arr[i] === arr[i - 1] + 1) {
      longestStrek++;
    } else {
    //   longestStrek = Math.max(longestStrek, currentStreak);
      currentStreak = 1;
    }
  }
  return longestStrek
}


console.log(checknum())