//The toString() method in JavaScript is used to convert an array into a string, 
//with each element of the array separated by a comma. 
//It provides a simple way to produce a human-readable representation of an array.

const array1 = [1, 2, 3, 4, 5];
console.log(array1.toString()); // "1,2,3,4,5"

const array2 = ['apple', 'banana', 'cherry'];
console.log(array2.toString()); // "apple,banana,cherry"

const array3 = [true, false, null, undefined];
console.log(array3.toString()); // "true,false,,"

const array4 = [1, 'two', [3, 4], {five: 5}];
console.log(array4.toString()); // "1,two,3,4,[object Object]"
