// What are array like object:-- Array like object are object that have length and indexd elements  similar to the array but not methods 
//like push(), pop() and so others.
const arr={
  0:'a',
  1:'b',
  2:'c',
  length:3
}




//1) Array.form
let arr1=Array.from(arr);
console.log(arr1)//[ 'a', 'b', 'c' ]

//2) Array.prototype.slice.call()
let arr2=Array.prototype.slice.call(arr)
console.log(arr2)

//3)spread operator
let arr3=[...Array.from(arr)];
console.log(arr3)
