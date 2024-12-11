//The fill() method in JavaScript is used to change all elements in an array
//to a static value from a start index (default 0) to an end index (default array.length).
// This method is useful for initializing or resetting elements in an array.



//value: The value to fill the array with.
//start (Optional): The index at which to start filling. Defaults to 0.
//end (Optional): The index at which to stop filling. Defaults to array.length.

//array.fill(value, start, end)

// NOTE:-  It modify original array

//1)Filling the Entire Array:
const array1 = [1, 2, 3, 4, 5];
array1.fill(0);
console.log(array1); // [0, 0, 0, 0, 0]

//2) Filling from a Specific Start Index:
const array2 = [1, 2, 3, 4, 5];
array2.fill(0, 2);
console.log(array2); // [1, 2, 0, 0, 0]

//3)Filling from a Specific Start to End Index:
const array3 = [1, 2, 3, 4, 5];
array3.fill(0, 1, 3);
console.log(array3); // [1, 0, 0, 4, 5]

//4)Using Negative Indices:
const array4 = [1, 2, 3, 4, 5];
array4.fill(0, -3, -1);
console.log(array4); // [1, 2, 0, 0, 5]

