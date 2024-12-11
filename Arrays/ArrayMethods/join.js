//The join method in JavaScript is used to concatenate all elements of an array into a single string,
//with an optional separator between each element. 
//This method is particularly useful when you need a specific separator other than the default comma.


const array1 = [1, 2, 3, 4, 5];
console.log(array1.join()); // "1,2,3,4,5"

const array2 = ['apple', 'banana', 'cherry'];
console.log(array2.join(' - ')); // "apple - banana - cherry"

const array3 = [true, false, null, undefined];
console.log(array3.join('')); // "truefalsenull"


const nestedArray = [1, [2, 3], [4, 5]];
console.log(nestedArray.join('|')); // "1|2,3|4,5"

const arrayWithObjects = [1, {name: 'Alice'}, {age: 30}];
console.log(arrayWithObjects.join(' - ')); // "1 - [object Object] - [object Object]"

const arrayWithHoles = [1, , 3];
console.log(arrayWithHoles.join('-')); // "1--3"


