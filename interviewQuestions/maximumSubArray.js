function maxSumSubarray(arr, k) {
    const n = arr.length;
    let maxSum = 0, currSum = 0;
  
    for (let i = 0; i < k * n; i++) {
      currSum += arr[i % n];    maxSum = Math.max(maxSum, currSum);
      currSum = Math.max(currSum, 0); 
    }
  
    return maxSum;
  }

let arr=[12,3,4,55,6]
  console.log(maxSumSubarray(arr, 2))